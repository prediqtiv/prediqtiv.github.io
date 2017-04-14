// needs the most clean up


// https://docs.google.com/spreadsheets/d/1_sv-QsJvHCfTCjRlpgv5ZwAUZetMCu-SfQHERAOuGZE/edit#gid=0
	let WikipediaDataFileName = 'https://spreadsheets.google.com/feeds/list/1_sv-QsJvHCfTCjRlpgv5ZwAUZetMCu-SfQHERAOuGZE/1/public/values?alt=json';

	let WKI = {};

	let symbols;

	WKI.init = function() {

		let xhr, response, entries, entry, symbol;

		symbols = {};
		symbols.keys = [];
		symbols.meshes = [];
		symbols.lines = undefined;
		symbols.touchables = [];
//		symbols.ticks = [];
		symbols.ticksCount = 0;
		symbols.date = new Date();
		symbols.openTime = new Date( symbols.date.getFullYear(), symbols.date.getMonth(), symbols.date.getDate(), 6, 30 );
		symbols.openTime = symbols.openTime.getTime()
		symbols.updates = 1;

		PLA.index = 0;
		PLA.playing = false;
		mnuControls.innerHTML = 'Pause';

		xhr = new XMLHttpRequest();
		xhr.open( 'GET', WikipediaDataFileName + '&t=' + Math.random(), true );
		xhr.onload = callbackJSON;
		xhr.send( null );

		function callbackJSON() {

			response = xhr.responseText;
			response = JSON.parse( response );
			entries = response.feed.entry;

			for ( let i = 0; i < entries.length; i++  ) {

				entry = entries[i];

				symbol = {

					symbol: entry.gsx$tickersymbol.$t, // t.replace( '.', '-' ),
					name: entry.gsx$security.$t,
					sector: entry.gsx$gicssector.$t,
					sectorID: parseInt( entry.gsx$sectorid.$t, 10 ),
					industry: entry.gsx$gicssubindustry.$t,
					cik: parseInt( entry.gsx$cik.$t, 10),
					marketCap: parseInt( entry.gsx$marketcap.$t, 10 ),
					volumeAvg: parseInt( entry.gsx$volumeavg.$t, 10 ),
					ticks : [],
					vertices : []

				};

				symbols.keys[ i ] = symbol.symbol;
				symbols[ symbol.symbol ] = symbol;

			}

			mnuWKI.innerHTML = 'Symbols loaded: ' + symbols.keys.length;

			drawSymbols();

		}

	}


	function drawSymbols() {

		let geometry, material, mesh;
		let edgesGeometry, edgesMaterial, edges;
		let scale,  obj, sp;

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
			mesh.position.set( 0, 0.5 * scale, 0 );
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

		loadTickJSON();
		SHO.setMenuSymbolSelect();

		hed.touchables = symbols.touchables;

	}

