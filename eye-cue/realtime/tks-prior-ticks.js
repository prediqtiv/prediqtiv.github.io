
	let TKS = {}


	TKS.init = function() {

		symbols.index = 0;

		symbols.openTime = parseInt( '1490906965' + '000', 0 );

		symbols.date = new Date();
		symbols.date.setTime( symbols.openTime );

		getEnd = symbols.keys.length;

		getTicks()

	}

	function getDateObjFromEpochTime( epoch ) {

		var d, msecs;
		d = new Date();
		msecs = parseInt( epoch + '000' );
		d.setTime( msecs );
//		outTimestamp.value=d.toLocaleString();
		return d;

	}


	function getTicks() {

		if ( symbols.index < getEnd ) {

			requestFileYQL( symbols.keys[ symbols.index ].replace( '-', '.' ) );

			symbols.date.setTime( symbols[ 'MMM'].openTime );
			symbols.ticksCount = symbols[ 'MMM'].ticks.length;

		} else {

			symbols.ticksCount = symbols[ 'GOOG'].ticks.length;

console.timeEnd( 'time' );

		}

	}


	function requestFileYQL( symbol ) {

		let statement, encodedStatement, query;
		let xhr, txt, ticks, tck, tick;
		let period;

		period = '&p=1d';

// Symbols must be uppercase for Google
//		statement = 'select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fwww.google.com%2Ffinance%2Fgetprices%3Fq%3DGOOG%26i%3D60%22';
		statement =
			'select * from html where url="http://www.google.com/finance/getprices?q=' +
			symbol +
			'&i=60' +
			period +
		'"';

		encodedStatement = encodeURIComponent( statement );

		query =	'https://query.yahooapis.com/v1/public/yql?q=' + encodedStatement + '&format=json';

		xhr = new XMLHttpRequest();
		xhr.crossOrigin = 'anonymous';
		xhr.open( 'GET', query, true );
		xhr.onerror = function() { console.log( 'error', symbols.index, symbol  ); getTicks(); };
		xhr.onload = callbackQuery;
		xhr.send( null );

		function callbackQuery( xhr ) {
			sym = symbols[ symbol.replace( '.', '-') ];

if ( !sym ) { console.log( '', symbol );getTicks(); }

			sym.ticks = [];
			sym.vertices = [];

			txt = xhr.target.response;
			txt = JSON.parse( txt );

			if ( txt.query.results === null ) {

console.log( symbol, xhr.target.response );

				getTicks();
				return;

			}

// if ( symbols.index === 0 ) { /* console.log( '', txt.query.results.body.split( '\n' ).slice( 7 )[ 0 ]  );}

			ticks = txt.query.results.body.split( '\n' ).slice( 7 );

			if ( ticks.length === 0 ) {

console.log( symbol, ticks );

				tim = setTimeout( getTicks, 500 );
				return;

			}

			vol = 0;
			sym.open = parseFloat( ticks[ 0 ].split( ',')[ 1 ] );
			sym.openTime = parseInt( ticks[ 0 ].split( ',')[ 0 ].slice( 1 ) + '000', 10 );

if ( symbols.index === 0 ) { console.log( '', sym.open  );}

			for ( let i = 1; i < ticks.length - 1; i++ ) {

				tck = ticks[ i ].split( ',');
				tick = [ parseFloat (tck[ 1 ] ), parseInt( tck[ 5 ], 10 ) ];
				sym.ticks.push( tick );

				x = 1000 * ( tick[ 0 ] - sym.open ) / sym.open;;
				x = x > 150 ? 150 : x;
				x = x < -150 ? -150 : x;

				vol += tick[ 1 ];
				z = -200 * Math.log( 1 + vol / sym.volumeAvg );
				z = z < -400 ? -400 : z;

				vertex =  new THREE.Vector3( x, 0, z );
				sym.vertices.push( vertex );

			}

			symbols.index++;

			log1.innerHTML = 'loaded: ' + symbols.index + ' ' + sym.symbol;

			getTicks();

		}

	}

