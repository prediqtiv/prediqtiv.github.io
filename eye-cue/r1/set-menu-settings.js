
	let SET = {};

	SET.init = function() {

		mnuSettings.innerHTML =

			'<details>' +
				'<summary><h3>Settings</h3></summary>' +
				'<p><input type=checkbox onchange=symbols.lines.visible=!symbols.lines.visible; checked > Snail Slime</p>' +
				'<p><input type=checkbox id=chkWire onchange=SET.toggleWireframe(); > Wireframe</p>' +
				'<p><input type=checkbox onchange=GND.ground.visible=!GND.ground.visible; checked > Ground plane</p>' +
				'<p><input type=checkbox onchange=GND.axisHelper.visible=!GND.axisHelper.visible; checked > Axes</p>' +
				'<p><input type=checkbox onchange=THR.lightDirectional.shadow.camera.visible=!THR.lightDirectional.shadow.camera.visible; checked > lightbox</p>' +
				'<p><input type=checkbox id=chkBackground onchange=SET.toggleBackgroundGradient(); checked > Gradient background</p>' +
				'<p title="Press spacebar or click in window to stop." >' +
					'<input type=checkbox id=chkRotate onchange=controls.autoRotate=!controls.autoRotate checked > Rotation ' +
				'</p>'  +
			'</details>' +
		'';

		SET.toggleBackgroundGradient();

		window.addEventListener( 'keyup', onKeyUp, false );

			function onKeyUp ( event ) {

		//console.log( 'key', event.keyCode );

				controls.enableKeys = false;
				event.preventDefault();

				switch( event.keyCode ) {

					case 32:
						controls.autoRotate = !controls.autoRotate;
						PLA.playing = !PLA.playing;
						mnuControls.innerHTML = 'Pause';
						PLA.updatePosition();
						break; // space bar

				}

			}

	}


	SET.toggleWireframe = function() {

		scene.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh ) {

				child.material.wireframe = chkWire.checked;

			}

		} );

	}


	SET.toggleBackgroundGradient = function() {

// 2016-07-18

		let col = function() { return ( 0.5 + 0.5 * Math.random() ).toString( 16 ).slice( 2, 8 ); };
		let pt = function() { return ( Math.random() * window.innerWidth ).toFixed( 0 ); }
		let image = document.body.style.backgroundImage;

		document.body.style.backgroundImage = image ? '' : 'radial-gradient( circle farthest-corner at ' +
				pt() + 'px ' + pt() + 'px, #' + col() + ' 0%, #' + col() + ' 50%, #' + col() + ' 100% ) ';

	}
