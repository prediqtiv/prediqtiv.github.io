
	TKS = {};

	let symbols;
	TKS.folder;

	TKS.folder = '../../trades/';

	TKS.init = function() {

//		requestTradesFileNames();

//			function requestTradesFileNames() {

				let fileName, text, files, files2;

				fileName = 'https://api.github.com/repos/jaanga/sp500/contents/trades';

				xhr = new XMLHttpRequest();
				xhr.open( 'GET', fileName, true );
				xhr.onerror = function( xhr ) { console.log( 'error', xhr  ); };
				xhr.onload = callback;
				xhr.send( null );

				function callback( xhr ) {

					text = xhr.target.response;
					files = JSON.parse( text );

					files2 = [];

					for ( let i = 0; i < files.length; i++ ) {

						file = files[ i ].name;

						if ( file.endsWith( '.csv' ) ) { files2.push( file ); }

					}

					for ( i = 0; i < files2.length; i++ ) {

						selFiles[ files2.length - i - 1 ] = new Option( files2[ i ] );

					}

					selFiles.selectedIndex = 0;

					TKS.requestFileTicks( selFiles.value );

				}

//			}


	}


	TKS.requestFileTicks = function( fname ) {

		let xhr, text, len, lines, line;
		let info, symbol, tick, vol;

		if ( symbols ) {

			scene.remove( symbols.objects, symbols.lines );

		}

		symbols = {};
		symbols.keys = [];
		symbols.meshes = [];
		symbols.lines = undefined;
		symbols.touchables = [];
		symbols.date = new Date();
		symbols.fileName = fname;
		PLA.index = 0;
		PLA.playing = false;
		mnuControls.innerHTML = 'Pause';

		xhr = new XMLHttpRequest();
		xhr.open( 'GET', TKS.folder + fname, true );
		xhr.onerror = function( xhr ) { console.log( 'error', xhr  ); };
		xhr.onprogress = function( xhr ) { outDate.innerHTML = '<span style=color:red; >Loaded ' + xhr.loaded + ' out of ' + xhr.total + '</span>'; };
		xhr.onload = callback;
		xhr.send( null );

			function callback( xhr ) {

				text = xhr.target.response;

				lines = text.split( '###\n' ).map( function( line ) { return line.split( '\n' ); } );

				symbols.openTime = parseInt( lines[ 0 ][ 1 ].slice( 1, 11 ) + '000', 0 );

				symbols.date.setTime( symbols.openTime );

				outDate.innerHTML ='Replaying day: ' + symbols.date.toLocaleDateString();

				len = lines.length - 1;

				for ( let i = 0; i < len; i++ ) {

					symbolData = lines[ i ];
					info = symbolData[ 0 ].split( ',' );
					ticks = [];
					previousVolume = 0;
					vol = 0;

					symbols.keys.push( info[ 0 ] );

if ( isNaN( parseInt( info[ 3 ] ), 10 ) ){ info[ 3 ] = 12; console.log( 'id', info ); }
if ( isNaN( parseInt( info[ 5 ] ), 10 ) ){ info[ 5 ] = 100000000000;console.log( 'cap', info ); }
if ( isNaN( parseInt( info[ 6 ] ), 10 ) ){ info[ 5 ] = 2000000;console.log( 'vol', info ); }

					symbol = symbols[ info[ 0 ] ] = {

						symbol: info[ 0 ],
						name: info[ 1 ],
						sector: info[ 2 ],
						sectorID: parseInt( info[ 3 ], 10 ),
						industry: info[ 4 ],
						marketCap: parseInt( info[ 5 ], 10 ),
						volumeAvg: parseInt( info[ 6 ], 10 ),

					}

					if ( symbol.sector === 'Utilities' ) { symbol.sectorID = 11; } // to make up for wiki errors

					for ( let j = 1; j < symbolData.length - 1; j++ ) {

						tick = symbolData[ j ].split( ',' );

						minute = j === 1 ? 0 : parseInt( tick[ 0 ], 10 );

						vol += parseInt( tick[ 5 ], 10 );
						ticks.push(

							[ minute, parseFloat( tick[ 1 ] ), parseFloat( tick[ 2 ] ),
							parseFloat( tick[ 3 ] ), parseFloat( tick[ 4 ] ),
							vol ]

						);

					}

					symbol.ticks = ticks;
					symbol.open = parseFloat( ticks[ 0 ][ 1 ] );

				}

	// update to create an event

				SHO.setMenuSymbolSelect();

				drawSymbols();
				getVertices();

				TWT.requestTweets();
				PLA.replay();

			}


			function drawSymbols() {

				let geometry, material, mesh;
				let edgesGeometry, edgesMaterial, edges;
				let scale, obj, sp;

				scene.remove( symbols.objects );

				symbols.objects = new THREE.Object3D();

				geometry = new THREE.BoxGeometry( 5, 1, 5 );

				for ( let i = 0; i < symbols.keys.length; i++) {

					obj = new THREE.Object3D();
					symbol = symbols[ symbols.keys[ i ] ];

					material = new THREE.MeshPhongMaterial( {
						color: colors[ symbol.sectorID ], // 0xffffff * Math.random(),
						opacity: 0.85,
						side: 2,
						transparent: true
					} );

					mesh = new THREE.Mesh( geometry, material );
					mesh.name = mesh.userData.symbol = symbol.symbol;
					mesh.userData.name = symbol.name;
					mesh.userData.sector = symbol.sector;
					mesh.userData.sectorID = symbol.sectorID;

		//subindustry
		//clic
					mesh.userData.volumeAvg = symbol.volumeAvg;
					mesh.userData.marketCap = symbol.marketCap;
					mesh.userData.volume = 0;
					mesh.userData.changePct = 0;

					scale = 2 + 0.0000000002 * symbol.marketCap;
					mesh.position.set( 0, 0.6 * scale, 0 );
					mesh.scale.y = scale;
					mesh.castShadow = true;
					mesh.receiveShadow = true;
					obj.add( mesh );

					edgesGeometry = new THREE.EdgesGeometry( mesh.geometry ); // or WireframeGeometry
					edgesMaterial = new THREE.LineBasicMaterial( { transparent: true } );
					edgesMaterial.color.setRGB( 0.3, 0.3, 0.3 );
					edges = new THREE.LineSegments( edgesGeometry, edgesMaterial );
					mesh.add( edges ); // add wireframe as a child of the parent mesh

					sp = THR.drawSprite( mesh.userData.symbol, (0.05 ), '#ffff00', mesh.position.x, ( 2 * mesh.position.y + 3 ), mesh.position.z);
					sp.material.opacity = 0.5;
					obj.add( sp );

					symbols.meshes.push( obj );
					symbols.touchables.push( mesh );
					symbols.objects.add( obj );

				}

				scene.add( symbols.objects );

				hed.touchables = symbols.touchables;

			}


			function getVertices() {

				let len, symbol, tick, verts;

				scene.remove( symbols.lines );

				symbols.lines = new THREE.Object3D();

				len = symbols.keys.length;

				for ( let i = 0; i < len; i++ ) {

					symbol = symbols[ symbols.keys[ i ] ];

					verts = [];

					if ( !symbol.ticks ) { console.log( 'no ticks', symbol.symbol ); continue; }


					for ( let j = 0; j < symbol.ticks.length; j++ ) {

						let v = new THREE.Vector3;

						tick = symbol.ticks[ j ];

						v.x = 3000 * ( tick[ 1 ] - symbol.open ) / symbol.open;
						v.z = -200 * tick[ 5 ] /  symbol.volumeAvg;
						v.y = v.z < -400 ? 10 * Math.log( -400 - v.z ) : 0;
						v.z = v.z < -400 ? -400 : v.z;

						verts.push( v );

					}

					symbol.vertices = verts;

					drawLine( symbol );

				}

				scene.add( symbols.lines );

			}


			function drawLine( symbol ) {

				let geometry, material, line;

				geometry = new THREE.Geometry();
				geometry.vertices = symbol.vertices;
				material = new THREE.LineBasicMaterial( { color: colors[ symbol.sectorID ], transparent: true } );
				line = new THREE.Line( geometry, material );
				line.userData.symbol = symbol.symbol;
				symbols.lines.add( line );

			}


	}