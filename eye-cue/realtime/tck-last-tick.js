// https://docs.google.com/spreadsheets/d/17cct_eo6odACejno1YnDPxXXyOoNxxjs02zhXTNdWwo/edit#gid=1750244370
	let TradeDataFileName = 'https://spreadsheets.google.com/feeds/list/17cct_eo6odACejno1YnDPxXXyOoNxxjs02zhXTNdWwo/1/public/values?alt=json';



	function loadTickJSON() {

	let tickUpdate = 2;

		let xhr, response, txt;
		let cells, cell, ticks, tick, symbol, diff, note;
		const b = '<br>';

		ticks = [];
		txt = '';

		xhr = new XMLHttpRequest();
		xhr.open( 'GET', TradeDataFileName + '&t=' + Math.random(), true );
		xhr.onload = callbackJSON;
		xhr.send( null );

		function callbackJSON() {

			response = xhr.responseText;
			response = JSON.parse( response );
			cells = response.feed.entry; // from spreadsheet

			for ( let i = 0; i < cells.length; i++  ) {

				cell = cells[ i ];

				tick = [
					parseFloat( cell.gsx$changepct.$t ),
					parseInt( cell.gsx$volume.$t, 10 )
				];

				ticks.push( tick );

			}

			if ( symbols.updates === 1 ) { // first pass

//console.log( 'first update' );

				diff = true;

				note = '<span style=color:red; >first tick</span>';

				addticks();

			}  else {

//console.log( 'update', symbols.updates );

				diff = false;

				for ( i = 0; i < symbols.keys.length ; i++ ) {

					symbol = symbols[ symbols.keys[ i ] ];

					if ( !ticks[ i ][ 1 ] || !symbol.ticks[ symbol.ticks.length - 1 ] ) {

//console.log( 'trd', i, ticks );

						break;

					}

					if ( ticks[ i ][ 1 ] && symbol.ticks[ symbol.ticks.length - 1 ][ 1 ] !== ticks[ i ][ 1 ] ) {

//console.log( 'diff', symbol.symbol );

						diff = true;
						break;
					}

				}

			}

			symbols.updates++;

			updateTime = new Date().toLocaleTimeString();

			if ( diff === true ) {

				note = ' <span style=color:red; >' + symbols.updates + ' diff ' + symbol.symbol + '</span>';
				tickUpdate = note;
				addticks();

				updateSymbols();
				updateLines();

			} else {

				note = 'No new tick';

			}

			mnuTRD.innerHTML =

				updateTime + b +
				'updates: ' + symbols.updates + b +
				note + b +
				'ticks: ' + symbols["AAPL"].ticks.length + ' update ' + tickUpdate + b +

			'';

// use the wait for free time thing
			tim = setTimeout( loadTickJSON, 5000 );

		}


		function addticks() {

			for ( let i = 0; i < symbols.keys.length ; i++ ) {

				symbol = symbols[ symbols.keys[ i ] ];

				symbol.ticks.push( ticks[ i ] );

			}

			symbols.ticksCount++;
			inpIndex.max = symbols.ticksCount

		}

	}


	function updateSymbols() {

		let symbol, tick, x, z, vertex;

		for ( let i = 0; i < symbols.keys.length; i++ ) {

			symbol = symbols[ symbols.keys[ i ] ];
			tick = symbol.ticks[ symbol.ticks.length - 1 ];

			x = 30 * tick[ 0 ];
			x = x > 150 ? 150 : x;
			x = x < -150 ? -150 : x;

			z = -200 * tick[ 1 ] / symbol.volumeAvg;
			y = z < -400 ? 10 * Math.log( -400 - z ) : 0;
			z = z < -400 ? -400 : z;

			vertex =  new THREE.Vector3( x, y, z );
			symbol.vertices.push( vertex );
			symbols.meshes[ i ].position.copy( vertex )

		}

	}


	function updateLines() {

		let symbol;
		let geometry, material, line;

		scene.remove( symbols.lines );

		symbols.lines = new THREE.Object3D();

		for ( let i = 0; i < symbols.keys.length; i++ ) {

			symbol = symbols[ symbols.keys[ i ] ];

			geometry = new THREE.Geometry();
			geometry.vertices = symbol.vertices;
			material = new THREE.LineBasicMaterial( { color: colors[ symbol.sectorID ], transparent: true } );
			line = new THREE.Line( geometry, material );
			line.userData.symbol = symbol.symbol;

			symbols.lines.add( line );

		}

		scene.add( symbols.lines );

	}
