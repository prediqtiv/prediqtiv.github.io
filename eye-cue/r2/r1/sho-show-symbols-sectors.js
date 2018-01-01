
	SHO = {};

	SHO.init = function() {

		mnuShow.innerHTML =

			'<details id=detSymbols >' +
				'<summary><h3>Symbol Highlight</h3></summary>' +

				'<p  id=mnuShowSymbol ></p>' +

			'</details>' +

			'<details open>' +
				'<summary><h3>Sector Highlight</h3></summary>' +

				'<p id=mnuSector ></p>' +

			'</details>' +
		''

		SHO.initShowSymbolMenu();

		SHO.initShowSectorMenu();

	}


	SHO.initShowSymbolMenu = function() {

		mnuShowSymbol.innerHTML =

			'<p>🔍 <input id=inpSearch size=5 ></p>' +
			'<p><select id=selSymbols size=10 style=width:100px; ></select></p>' +
			'<p><button onclick=SHO.resetSymbols();  style=width:100%; >Reset Symbols</button></p>' +
		'';

		inpSearch.onclick = function() { this.select(); } // highlights everything
		inpSearch.onkeyup = function() { SHO.setSymbolSearch(); }

	}


	SHO.setMenuSymbolSelect = function() { // runs after symbols loaded

//		detSymbols.open = true; // toggle for debug
		detSymbols.ontoggle = function() { inpSearch.focus(); }

		for ( let i = 0; i < symbols.keys.length; i++ ) {

			selSymbols[ i ] = new Option( symbols.keys[ i ] );

		}

		selSymbols.selectedIndex = Math.floor( Math.random() * symbols.keys.length );

		selSymbols.onchange = selSymbols.onfocus = function() {

			index = symbols.keys.indexOf( selSymbols.value )
			intersected = symbols.touchables[ index ] ;
			HED.setHeadsUp();
			SHO.showSymbol( selSymbols.selectedIndex );

		}

	}


	SHO.setSymbolSearch = function() {

		let letters;

		letters = inpSearch.value.toUpperCase();

		selSymbols.innerHTML = '';

		for ( let i = 0; i < symbols.keys.length; i++ ) {

			if ( symbols.keys[ i ].indexOf( letters ) > -1 ) {

				selSymbols.innerHTML += '<option>' + symbols.keys[ i ]  + '</option>';

			}

		}

		selSymbols.selectedIndex = 0;

	}


	SHO.showSymbol = function( index ) {

		let tch;

		for ( let i = 0; i < symbols.touchables.length; i++ ) {

			tch = symbols.touchables[ i ];

			if ( index !== i ) {

				SHO.setTransparent( i );

			} else {

				SHO.setOpaque( i );

			}

		}

	}


	SHO.initShowSectorMenu = function() {

		let index, txt;
		txt = '';

		for ( let i = 0; i < sectors.length; i++ ) {

			txt += '<div onclick=SHO.showSector(' + ( i + 1 ) + '); ><span style=background-color:#' + colors[ i + 1 ].toString( 16 ) + '; >&nbsp; &nbsp; &nbsp; </span> &nbsp;' + sectors[ i ].slice(0,25) + '</div>';

		}

		mnuSector.innerHTML = txt + '<p><button onclick=SHO.resetSymbols();  style=width:100%; >Reset Sectors</button></p>';

	}


	SHO.showSector = function( id ) {

		for ( let i = 0; i < symbols.keys.length; i++ ) {

			if ( symbols[ symbols.keys[ i ] ].sectorID !== id ) {

				SHO.setTransparent( i );

			} else {

				SHO.setOpaque( i );

			}

		}

	}


	SHO.resetSymbols = function() {

		for ( let i = 0; i < symbols.keys.length; i++ ) {

			SHO.setOpaque( i );

		}

	}


	SHO.setTransparent = function( i ) {

		let tch;

		tch = symbols.touchables[ i ];

		tch.material.opacity = 0.1;
		tch.children[0].material.opacity = 0;
		tch.castShadow = false;
		tch.receiveShadow = false;
		symbols.meshes[ i ].children[ 1 ].visible = false;
		symbols.lines.children[ i ].material.opacity = 0.2;

	}


	SHO.setOpaque = function( i ) {

		let tch;

		tch = symbols.touchables[ i ];

		tch.material.opacity = 0.85;
		tch.children[0].material.opacity = 1;
		tch.castShadow = true;
		tch.receiveShadow = true;
		symbols.meshes[ i ].children[ 1 ].visible = 1;
		symbols.lines.children[ i ].material.opacity = 1;

	}
