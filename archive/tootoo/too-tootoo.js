	TOO = {};

//	let files;
	const b = '<br>';


	TOO.initUser = function( usr ) {

		user = usr;

		TOO.setMenu = TOO.tableOfContents !== undefined ? TOO.setMenuContents : TOO.setMenuDefault;

		if ( MNU.init ) { MNU.init() };

		TOO.initButtons();

		if ( location.hash.includes( '@@@' ) ) {

			TOO.urlGHPages = './';
			location.hash = location.hash.replace( '@@@', '' );

		} else if ( user.rawgit ) {

			TOO.urlGHPages = 'https://rawgit.com/' + user.user + '/' + user.repo + '/' + user.branch + '/';

		} else {

			TOO.urlGHPages = 'https://' + user.user + '.github.io/' + user.repo + '/';

		}

		TOO.setMenu( user.path );


	}


	TOO.initButtons = function() {

		editButton = document.body.appendChild( document.createElement( 'div' ) );
		editButton.id = 'editButton';
		editButton.innerHTML = 'Edit';
		editButton.title = 'Update this page using the GitHub source code editor';

		nextFile = document.body.appendChild( document.createElement( 'div' ) );
		nextFile.id = 'nextFile';
		nextFile.innerHTML = '&gt;';
		nextFile.title = 'Next file';

		previousFile = container.appendChild( document.createElement( 'div' ) );
		previousFile.id = 'previousFile';
		previousFile.innerHTML = '&lt;';
		previousFile.title = 'Previous file';

	}


	TOO.setMenuDefault = function ( path ) {

		let url;

		url = 'https://api.github.com/repos/' + user.user + '/' + user.repo + '/contents/' + ( path ? path : '' );

		TOO.setBreadcrumbs( path );

		TOO.requestFile( url, TOO.callbackFolderContents );

	}


	TOO.callbackFolderContents = function( xhr ) {

//		let response, items, item, count;

		response = xhr.target.response;
		items = JSON.parse( response );

		TOO.files = [];
		count = 0;
		menuItems.innerHTML = '';

		for ( let i = 0; i < items.length; i++ ) {

			item = items[ i ];

			if ( item.type === 'dir' ) {
// make highlighting full width. see below
				menuItems.innerHTML +=
					'<a href=JavaScript:location.hash="' + item.path + '";TOO.setMenuDefault("' + item.path  + '"); style=width:100%;  > 🗀 ' + item.name  + '</a>' + b +
				'';

			}

		}

		for ( i = 0; i < items.length; i++ ) {

			item = items[ i ];

			if ( item.type === 'file' ) {

				menuItems.innerHTML +=

					'<a id=file' + count++ + ' href=JavaScript:TOO.getFileSetContents("' + item.path + '"); style=width:100%;  > ' + item.name + '</a>' + b +

				'';

				TOO.files.push( item.path );

			}

		}


// do the following within the above loops...
		if ( location.hash && ( location.hash.includes( '/' ) || location.hash.includes( '.' ) ) )  {

			TOO.getFileSetContents( location.hash.slice( 1 ) );

		} else {

			TOO.setDefaultContents();

		}

	}



	TOO.setMenuContents = function() { // we have a table of contents / TOO.tableOfContents somewhere

		TOO.files = [];
		menuTitle.innerHTML = 'Table of Contents';
		breadcrumbs.innerHTML = '';
		menuItems.innerHTML = '';

		let count = 0;

		for ( let i = 0; i < TOO.tableOfContents.length; i++ ) {

			if ( TOO.tableOfContents[ i ][ 0 ] === 'header' ) {

				menuItems.innerHTML += '<h4>'  + TOO.tableOfContents[ i ][ 1 ] + '</h4>';

			} else if ( TOO.tableOfContents[ i ][ 1 ] === 'gallery' ) {

				menuItems.innerHTML +=

				'<div id=file' + count++ + ' >' +
					'<a href=JavaScript:TOO.createPageOfImages("' + TOO.tableOfContents[ i ][ 0 ] + '"); > ' +
						TOO.tableOfContents[ i ][ 2 ] +
					' </a>' +
				'</div>';

				TOO.files.push( TOO.tableOfContents[ i ][ 0 ] );

			} else {

				menuItems.innerHTML +=
				'<div id=file' + count++ + ' style=width:100%; >' +
					'<a href=JavaScript:TOO.getFileSetContents("' + TOO.tableOfContents[ i ][ 0 ] + TOO.tableOfContents[ i ][ 1 ] + '"); > ' +
						TOO.tableOfContents[ i ][ 2 ] +
					' </a>' +
				'</div>';

				TOO.files.push( TOO.tableOfContents[ i ][ 0 ] + TOO.tableOfContents[ i ][ 1 ] );

			 }
		}

		if ( location.hash.length > 1 ) {

			TOO.getFileSetContents( location.hash.slice( 1 )  );

		} else {
// user.defaultFile
			TOO.getFileSetContents( 'README.md' );

		}

	}


	TOO.setDefaultContents = function() {

		let txt, start, path, p;

		for ( var i = 0; i < TOO.files.length; i++ ) {

			path = TOO.files[ i ];
			p = path.toLowerCase();

			if ( p.endsWith( 'index.html' ) || p.endsWith( 'index.htm') ) { TOO.getFileSetContents( path ); return; }
			if ( p.endsWith( 'readme.md' ) ) { TOO.getFileSetContents( path ); return; }

		}

		path = TOO.files[ 0 ];
		TOO.getFileSetContents( path  );

	}


	TOO.setBreadcrumbs = function( path ) {

		let name, txt, folders, str;

		name = user.folder ? user.folder : user.repo;

		txt = '<h3><a href=JavaScript:TOO.setMenuDefault(); >' + name + '</a> &raquo; </h3>';

		folders = path ? path.split( '/' ) : [] ;

		str = '';

		for ( let i = 0; i < folders.length; i++ ) {

			str += folders[ i ] + '/';

			txt += '<h3><a href=JavaScript:TOO.setMenuDefault("' + str.slice( 0, -1 ) + '"); >' + folders[ i ] + '</a> &raquo; </h3>';

		}

		breadcrumbs.innerHTML = txt;

	}



	TOO.getFileSetContents = function( path ) {

		let url, u;

		if ( path === undefined ) {

			contents.innerHTML = '<center>no files in this folder</center>';
			return;

		}

		url = TOO.urlGHPages + path;

		u = url.toLowerCase();

		if ( u.endsWith( '.md' ) ){

			TOO.getFileMD( url );

		} else if ( u.endsWith( '.html' ) || u.endsWith( '.htm' ) ) {

			TOO.getFileHTML( url );

		} else if ( u.endsWith( '.gif' ) || u.endsWith( '.ico' ) || u.endsWith( '.jpg' ) || u.endsWith( '.png' ) ||  u.endsWith( '.svg' ) ) {

			TOO.getFileImage( url );

		} else {

			TOO.getFileCode( url );

		}

		TOO.setHighlightAndButtons( path );

		location.hash = path;

	}


	TOO.getFileHTML = function( url ){

		contents.innerHTML =
			'<iframe id=ifr src=' + url + ' width=' + ( window.innerWidth - 325 ) + ' height=' + ( window.innerHeight - 5 ) +
			' style="border:0 none; " >' +
		'<iframe>';

	}


	TOO.massageText = function( response ){

		text = TOO.converter.makeHtml( response );

		return text;

	};


	TOO.getFileMD = function( url ) {

// https://github.com/showdownjs/showdown

		showdown.setFlavor('github');

		TOO.converter = new showdown.Converter();

		TOO.requestFile( url, callbackMD );

		function callbackMD( xhr ) {

			text = TOO.massageText( xhr.target.response );

			contents.innerHTML =

			'<div style="margin: 0 auto; width: 800px; position: relative;" >' +
				text +
			'</div>';

			contents.scrollTop = 0;

		}

	}


	TOO.getFileImage = function( url ){

		contents.innerHTML = '<img src="' + url + '" style="border: 0px solid gray; margin: 25px 0 0 50px; max-width: 800px; " >';

	}


	TOO.getFileCode = function( url ) {

// try embed gist
		contents.innerHTML =
			'<div id=contentsCode style="border: 0px red solid; height: 900px; margin: 0 auto; width: 900px; position: relative;" >' +
			' item will appear here ' +
		'</div>';

		if ( TOO.editor ) {

			setEditContents();

		} else {

// check here for latest: https://cdnjs.com/libraries/ace/
// Anyway to get latest automatically?
// use GitHub code embed??

			TOO.editor = document.body.appendChild( document.createElement( 'script' ) );
			TOO.editor.onload = setEditContents;
			TOO.editor.src = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js';

		}


		function setEditContents() {

			editor = ace.edit( 'contentsCode' );
			editor.$blockScrolling = Infinity;
			editor.getSession().setMode( 'ace/mode/markdown' );

			TOO.requestFile( url, callback );

			function callback( xhr ) {

				editor.setValue( xhr.target.response.slice( 0, 10000 ), -1 );

			}

		}

	}


	TOO.createPageOfImages = function( path ) {

			let page, items, item, fileName;

			page = '';
//			count = 0;

			fileName = 'https://api.github.com/repos/' + user.user + '/' + user.repo + '/contents/' + path;

			TOO.requestFile( fileName, callbackGalleryContents );

			function callbackGalleryContents( xhr ){

				response = xhr.target.response;
				items = JSON.parse( response );

				for ( let i = 0; i < items.length; i++ ) {

					item = items[ i ];

					source = item.download_url;

					if ( source.includes( 'TOOgallery' ) || source.includes( '.thumb' ) || source.includes( '.highlight' ) || source.endsWith( '.dat' )  || source.endsWith( '.lock' ) ) { continue; }

					page += '<div style=display:inline-block;margin:10px; >' +
						'<a href=JavaScript:TOO.getFileSetContents("' + item.path +'"); ><img src=' + source + ' height=200; title="' + fileName.slice( 0, -4 ) + '" ></a>' +
					'</div>';

				}

				contents.innerHTML = page;

				TOO.setHighlightAndButtons( path, true );

			}

	}



	TOO.setHighlightAndButtons = function( path, gallery ) {

//highlight
		index = TOO.files.indexOf( path );

		for ( let i = 0; i < TOO.files.length; i++ ) {

			el = document.getElementById( 'file' + i );

			col = ( i === index ) ? '#ccc' : '';

			el.style.backgroundColor = col;

		}

// buttons
		if ( editButton ) {

			folder = user.folder ? user.folder + '/' : '';

			editButton.innerHTML = '<a href="https://github.com/' + user.user + '/' + user.repo + '/blob/' + user.branch + '/' + folder + path + '" target="_blank"> Edit </a>';

		}

		indexNext = index + 1;

		if ( index >= TOO.files.length - 1 ) { indexNext = 0; }

		indexPrevious = index - 1;

		if ( index <= 0 ) { indexPrevious = TOO.files.length - 1; }

		if ( nextFile || previousFile ) {

			if ( gallery ) {

				nextFile.innerHTML = '<a href=JavaScript:TOO.createPageOfImages("' + TOO.files[ indexNext ] + '"); > &gt; </a>';
				previousFile.innerHTML = '<a href=JavaScript:TOO.createPageOfImages("' + TOO.files[ indexPrevious ] + '"); > &lt; </a>';

			} else {

				nextFile.innerHTML = '<a href=JavaScript:TOO.getFileSetContents("' + TOO.files[ indexNext ] + '"); > &gt; </a>';
				previousFile.innerHTML = '<a href=JavaScript:TOO.getFileSetContents("' + TOO.files[ indexPrevious ] + '"); > &lt; </a>';

			}
		}

	}

	TOO.requestFile = function ( fileName, callback ) {

		var fileName, text, lines;

		xhr = new XMLHttpRequest();
		xhr.crossOrigin = 'anonymous';
		xhr.open( 'GET', fileName, true );
		xhr.onerror = function( xhr ) { console.log( 'error', xhr  ); };
		xhr.onload = callback;
		xhr.send( null );

	}

