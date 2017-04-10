
	TWT = {};

	TWT.folder = '../../tweets/';

	TWT.init = function() {

	}


	TWT.requestTweets = function() {

//		let fileName, text, lines, v2, material, geometry, mesh;


		fileName = symbols.fileName;

		xhr = new XMLHttpRequest();
		xhr.open( 'GET', TWT.folder + fileName, true );
		xhr.onerror = function( xhr ) { console.log( 'error', xhr  ); };
		xhr.onprogress = function( xhr ) {
			//outDate.innerHTML += '<span style=color:red; > Tweets: ' + xhr.loaded + ' out of ' + xhr.total + '</span>';
		};
		xhr.onload = callback;
		xhr.send( null );

			function callback( xhr ) {

				text = xhr.target.response;

				lines = text.split( '\n' ).map( function( line ) { return line.split( ',' ); } );

if ( lines === undefined ) { return; }

				v2 = function( x, y ){ return new THREE.Vector2( x, y ); };
				points = [ v2( 0, -1 ) , v2( 0.5, -1 ), v2( 1, -0.8 ), v2( 0, 0 ) ];

				material = new THREE.MeshNormalMaterial( { shading: THREE.FlatShading } );

				for ( var i = 0; i < symbols.keys.length; i++ ) {

					symbol = symbols[ symbols.keys[ i ] ];
					symbol.tweets = parseInt( lines[ i ][ 1 ] );

					geometry = new THREE.LatheGeometry( points, 7 );
					geometry.applyMatrix( new THREE.Matrix4().makeScale( 5, 1 + symbol.tweets, 5 ) );

					mesh = new THREE.Mesh( geometry, material );
					mesh.name = symbol.symbol;
					mesh.position.set( 0, -5, 0 );

					symbols.meshes[ i ].add( mesh );
					symbols.touchables.push( mesh );

				}

			}


	}



	function drawLatheObject() {

		var points;
		var v2 = function( x, y ){ return new THREE.Vector2( x, y ); };

		points = [ v2( 0, 0 ) , v2( 1, -0.8 ), v2( 0.5, -1 ), v2( 0, -1 ) ];

//		geometry = new THREE.LatheGeometry( points, segments, phiStart, phiLength  );
		geometry = new THREE.LatheGeometry( points, 5, 0, 2 * Math.PI + 2 * Math.PI / 8  );

		return geometry;

	}