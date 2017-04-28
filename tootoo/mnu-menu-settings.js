
	MNU = {};

	MNU.init = function() {

		mnuSettings.innerHTML =

			'<details>' +

				'<summary><h3>Settings</h3></summary>' +

				'<div><button onclick=MNU.cssColors("#222","#ddd","#555");  >Dark</button>' +
					' <button onclick=MNU.cssColors("#fff","#000","#eee"); >Light</button>' +
					' <button onclick=MNU.cssColors("#f3eacb","#704214","#704214"); >Sepia</button>' +
				'</div>' + b +

				'<div><button onclick=MNU.cssFontOpenSans(); >Open Sans</button>' +
					' <button onclick=MNU.cssFontInconsolata(); >Inconsolata</button>' +
					' <button onclick=MNU.cssFontMonospace(); >Monospace</button>' +
				'</div>' + b +

				'<div><button onclick=MNU.cssFontSize("12pt"); >Normal</button>' +
					' <button onclick=MNU.cssFontSize("14pt"); >Larger</button>' +
					' <button onclick=MNU.cssFontSize("18pt"); >Largest</button>' +
				'</div>' + b +

			'</details>' +
		'';

		mnuAbout.innerHTML =

			'<details>' +

				'<summary><h3>About</h3></summary>' +

				'<p>Copyright &copy; ' + ( new Date() ).getFullYear() + ' ' + user.user + ' authors. ' +
				'<a href=http://github.com/' + user.user + '/' + user.repo + ' >MIT license</a>.</p>' +
				'<p>Click the \'i in a circle\' icon for more <a href=index.html#readme.md title="Click here for help and information" >help</a>.</p>' +

			'</details>' +

			'<hr>' +

			'<center><a href=javascript:menu.scrollTop=0; style=text-decoration:none; onmouseover=pop2.style.display=""; onmouseout=pop2.style.display="none"; ><h1>' + ( user.logo ? user.logo : '❦' ) + '</h1></a></center>' +
			'<div class=popUp id=pop2 style=display:none;bottom:20px; >' + user.user + ' - ' + user.subText + '.<br>Click here to return to the top of the page</div>' +

		'';

	}

	MNU.cssColors = function( back, color, mnu ) {

		document.body.style.backgroundColor = back;
		document.body.style.color = color;
		menu.style.backgroundColor = mnu;

	};


	MNU.cssFontOpenSans = function() {

		let fontID = 'Open+Sans';

		let font = document.body.appendChild( document.createElement( 'link' ) );
		font.id = fontID;
		font.rel = 'stylesheet';
		font.href = 'https://fonts.googleapis.com/css?family=' + fontID;

		document.body.style.fontFamily = 'Open Sans';

	};

	MNU.cssFontInconsolata = function() {

		let fontID = 'Inconsolata';

		let font = document.body.appendChild( document.createElement( 'link' ) );
		font.id = fontID;
		font.rel = 'stylesheet';
		font.href = 'https://fonts.googleapis.com/css?family=' + fontID;

		document.body.style.fontFamily = 'Inconsolata';

	};

	MNU.cssFontMonospace = function() {

//		document.body.style.fontFamily = '"Lucida Console", Monaco, monospace';
		document.body.style.fontFamily = 'monospace';

	};

	MNU.cssFontSize = function( size ) {

		document.body.style.fontSize = size;

	};
