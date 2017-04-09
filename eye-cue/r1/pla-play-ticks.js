	let PLA = {};

	PLA.index = 0;

	PLA.playing = false;

	PLA.replay = function() {

		if ( PLA.playing === false ) {

			if ( PLA.index > symbols.ticksCount ) { PLA.index = 0; }
			PLA.playing = true;
			mnuControls.innerHTML = 'Pause';
			PLA.updatePosition();

		} else {

			PLA.playing = false;
			mnuControls.innerHTML = 'Play';

		}

	}

// See SEL.init, SET.init
	 PLA.updatePosition = function() {

		let symbol, vertex, t;

		for ( let i = 0; i < symbols.keys.length; i++ ) {

			symbol = symbols[ symbols.keys[ i ] ];

			if ( !symbol.vertices ) { continue; }

			vertex = symbol.vertices[ PLA.index ];

			if ( !symbol.ticks[ PLA.index ] || !vertex ) { continue; }

			symbols.meshes[ i ].position.copy( vertex );

		}

		symbols.date.setTime( symbols.openTime + 60000 * PLA.index );

		menuReplay.innerHTML = 'Minute: ' + PLA.index + ' - Time: ' + symbols.date.toLocaleTimeString();

		PLA.index++;

		if ( PLA.index <= 390 && PLA.playing === true ) { // ???

			inpIndex.value = PLA.index;

// window.requestIdleCallback ??

			t = setTimeout( PLA.updatePosition, 100 );

		} else if ( PLA.playing === true ) {

			if ( mnuReplay1.checked === true ) {

				selFiles.selectedIndex++;
				selFiles.selectedIndex = selFiles.selectedIndex > selFiles.length ? 0 : selFiles.selectedIndex;

				TKS.requestFileTicks( selFiles.value );

			} else {

					inpIndex.value = PLA.index = 0;
					t = setTimeout( PLA.updatePosition, 50 );

			}

		}

	}
