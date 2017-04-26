
	TKS = {};

	let symbols;
	let syms = [];
	let count;

	TKS.folder;
//	TKS.folder = '../../../trades-dev/';
	TKS.folder = 'https://prediqtiv.github.io/trades-dev/';

	TKS.folderUrl = 'https://api.github.com/repos/prediqtiv/prediqtiv.github.io/contents/trades-dev/';

	TKS.init = function() {

		TKS.requestFile( TKS.folderUrl, TKS.callbackFolders );

	}


	TKS.callbackFolders = function( xhr ) {

		let response, items, folders, folder;

		response = xhr.target.response;
		items = JSON.parse( response );
		folders = [];

		for ( let i = 0; i < items.length; i++ ) {

			folder = items[ i ];

			if ( folder.type === 'dir' ) {

				selFiles.innerHTML = '<option>' + folder.name + '</option>' + selFiles.innerHTML;

			}

		}

		selFiles.selectedIndex = 0;

		TKS.requestFile( TKS.folderUrl + selFiles.value, TKS.callbackAllFiles );

	}


	TKS.callbackAllFiles = function( xhr ) {

		let response, syms, sym;

		if ( symbols ) {

			scene.remove( symbols.objects, symbols.lines );

		}

		count = 0;
		response = xhr.target.response;
		syms = JSON.parse( response );

		symbols = {};
		symbols.keys = [];
		symbols.meshes = [];
		symbols.lines = undefined;
		symbols.date = new Date();
		symbols.objects = new THREE.Object3D();
		symbols.touchables = [];

		scene.add( symbols.objects );

		HED.touchables = symbols.touchables;

		PLA.index = 0;
		PLA.playing = false;
		mnuControls.innerHTML = 'Pause';

		for ( let i = 0; i < syms.length; i++ ) {

			sym = syms[ i ];

			TKS.requestFile( TKS.folder + selFiles.value + '/' + sym.name, TKS.callbackFile );

		}

		date = selFiles.value.split( '-' );

		open = new Date( date[ 0 ], parseInt( date[ 1 ], 10 ) - 1, parseInt( date[ 2 ], 10 ), 6, 30 );

		symbols.openTime = open.getTime();

		symbols.date.setTime( symbols.openTime );

		outDate.innerHTML ='Replaying day: ' + symbols.date.toLocaleDateString();

	}



	TKS.callbackFile = function( xhr ) {

		let response;

		last = syms[ syms.length - 1 ].name.slice( -8, -4 );

		response = xhr.target.response;

		lines = response.split( '\n' ).map( function( line ) { return line.split( ',' ); } );

		if ( lines.length === 0 ) {

console.log( 'err ', response );

			return;
		}

//console.log( '', lines[0][ 0 ] );

		info = lines[ 0 ];
		ticks = [];
		previousVolume = 0;
		vol = 0;

		symbols.keys.push( info[ 0 ] );

if ( isNaN( parseInt( info[ 3 ] ), 10 ) ){ console.log( 'id', info ); info[ 3 ] = 12;  }
if ( isNaN( parseInt( info[ 5 ] ), 10 ) ){ console.log( 'cap', info ); info[ 5 ] = 100000000000; }
if ( isNaN( parseInt( info[ 6 ] ), 10 ) ){ console.log( 'vol', info ); info[ 6 ] = 2000000; }

		symbol = symbols[ info[ 0 ] ] = {

			symbol: info[ 0 ],
			name: info[ 1 ],
			sector: info[ 2 ],
			sectorID: parseInt( info[ 3 ], 10 ),
			industry: info[ 4 ],
			marketCap: parseInt( info[ 5 ], 10 ),
			volumeAvg: parseInt( info[ 6 ], 10 ),

		}

		for ( let i = 1; i < lines.length; i++ ) {

			tick = lines[ i ];

			minute = i === 1 ? 0 : parseInt( tick[ 0 ], 10 );

			vol += parseInt( tick[ 5 ], 10 );

			ticks.push(

				[ minute, parseFloat( tick[ 1 ] ), parseFloat( tick[ 2 ] ),
				parseFloat( tick[ 3 ] ), parseFloat( tick[ 4 ] ),
				vol ]

			);

		}

		symbol.ticks = ticks;
		symbol.open = parseFloat( ticks[ 0 ][ 1 ] );

		TKS.drawSymbol( symbol );

		if ( symbol.symbol === last ) {

			SHO.setMenuSymbolSelect();

			getVertices();

			TWT.init();
			PLA.replay();

			outDate.innerHTML += '<br>Replaying day: ' +  symbols.date.toLocaleDateString();

		}

	}


	TKS.requestFile = function( url, callback ) {

		var xhr;

		xhr = new XMLHttpRequest();
		xhr.crossOrigin = 'anonymous';
		xhr.open( 'GET', url, true );
		xhr.onerror = function( xhr ) { console.log( 'url', url  ); console.log( 'error', xhr  ); };
		xhr.onprogress = function( xhr ) { outDate.innerHTML = '<span style=color:red; >Loaded ' + count++ + ' out of ' + syms.length + '</span>'; };
		xhr.onload = callback;
		xhr.send( null );

	}



	TKS.drawSymbol = function( symbol ) {

		let shape, geometry, material, mesh;
		let edgesGeometry, edgesMaterial, edges;
		let scale, obj, sp;

		obj = new THREE.Object3D();
//			symbol = symbols[ symbols.keys[ i ] ];

		material = new THREE.MeshPhongMaterial( {
			color: colors[ symbol.sectorID ], // 0xffffff * Math.random(),
			opacity: 0.85,
			side: 2,
			transparent: true
		} );

		shape = new THREE.Shape( GND.shapes[ symbol.sectorID ] );
		geometry = new THREE.ExtrudeGeometry( shape, { amount: 1, bevelEnabled: false, steps: 1 } );

		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -0.5 * Math.PI ) );
		geometry.applyMatrix( new THREE.Matrix4().makeScale( 1, 2 + 0.0000000002 * symbol.marketCap, 1 ) );
		geometry.applyMatrix( new THREE.Matrix4().makeTranslation( -2.5, 0, 2.5 ) );

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


//					mesh.position.set( -2,5, 0.0, -2.5 );
//					scale = 2 + 0.0000000002 * symbol.marketCap;
//					mesh.scale.y = scale;
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		obj.add( mesh );

		edgesGeometry = new THREE.EdgesGeometry( mesh.geometry ); // or WireframeGeometry
		edgesMaterial = new THREE.LineBasicMaterial( { transparent: true } );
		edgesMaterial.color.setRGB( 0.3, 0.3, 0.3 );
		edges = new THREE.LineSegments( edgesGeometry, edgesMaterial );
		mesh.add( edges ); // add wireframe as a child of the parent mesh

		sp = THR.drawSprite( mesh.userData.symbol, (0.05 ), '#ffff00',
			mesh.position.x, ( 8 + 0.0000000002 * symbol.marketCap ), mesh.position.z);
		sp.material.opacity = 0.5;
		obj.add( sp );

		symbols.meshes.push( obj );
		symbols.touchables.push( mesh );
		symbols.objects.add( obj );


	}







			function drawSymbols() {

				let shape, geometry, material, mesh;
				let edgesGeometry, edgesMaterial, edges;
				let scale, obj, sp;

//				scene.remove( symbols.objects );

				symbols.objects = new THREE.Object3D();

//				geometry = new THREE.BoxGeometry( 5, 1, 5 );

				for ( let i = 0; i < symbols.keys.length; i++) {

					obj = new THREE.Object3D();
					symbol = symbols[ symbols.keys[ i ] ];

					material = new THREE.MeshPhongMaterial( {
						color: colors[ symbol.sectorID ], // 0xffffff * Math.random(),
						opacity: 0.85,
						side: 2,
						transparent: true
					} );

					shape = new THREE.Shape( GND.shapes[ symbol.sectorID ] );
					geometry = new THREE.ExtrudeGeometry( shape, { amount: 1, bevelEnabled: false, steps: 1 } );

					geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -0.5 * Math.PI ) );
					geometry.applyMatrix( new THREE.Matrix4().makeScale( 1, 2 + 0.0000000002 * symbol.marketCap, 1 ) );
					geometry.applyMatrix( new THREE.Matrix4().makeTranslation( -2.5, 0, 2.5 ) );

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


//					mesh.position.set( -2,5, 0.0, -2.5 );
//					scale = 2 + 0.0000000002 * symbol.marketCap;
//					mesh.scale.y = scale;
					mesh.castShadow = true;
					mesh.receiveShadow = true;
					obj.add( mesh );

					edgesGeometry = new THREE.EdgesGeometry( mesh.geometry ); // or WireframeGeometry
					edgesMaterial = new THREE.LineBasicMaterial( { transparent: true } );
					edgesMaterial.color.setRGB( 0.3, 0.3, 0.3 );
					edges = new THREE.LineSegments( edgesGeometry, edgesMaterial );
					mesh.add( edges ); // add wireframe as a child of the parent mesh

					sp = THR.drawSprite( mesh.userData.symbol, (0.05 ), '#ffff00',
					 mesh.position.x, ( 8 + 0.0000000002 * symbol.marketCap ), mesh.position.z);
					sp.material.opacity = 0.5;
					obj.add( sp );

					symbols.meshes.push( obj );
					symbols.touchables.push( mesh );
					symbols.objects.add( obj );

				}

				scene.add( symbols.objects );

				HED.touchables = symbols.touchables;

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
				symbols.lines.visible = chkSnailSlime.checked;

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

	function test(){

		TKS.requestFile( TKS.folder + selFiles.value + '/XOM.txt', callback );

		function callback( xhr ) {

console.log( 'xxx', xhr.target.response );

		}

	}


