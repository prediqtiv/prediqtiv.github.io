
	let THR = {};

	let stats, renderer, scene, camera, controls;

	THR.init = function() {

		stats = new Stats();
		stats.domElement.style.cssText = 'position: absolute; right: 0; top: 0;' ;
		document.body.appendChild( stats.domElement );
		stats.domElement.style.display = window.innerWidth < 500 ? 'none' : '';

		renderer = new THREE.WebGLRenderer( { alpha: 1, antialias: true }  );
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );

		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000 );
		camera.position.set( 130, 100, 150 );

// Controls

		controls = new THREE.OrbitControls( camera, renderer.domElement );
		controls.minDistance = 10;
		controls.maxDistance = 800;
		controls.target.set( 0, 20, -150 );
		controls.autoRotate = true;

		window.addEventListener( 'resize', onWindowResize, false );

		renderer.domElement.addEventListener( 'click', function() {  controls.autoRotate = false; }, false );
		renderer.domElement.addEventListener( 'touchstart', function() {  controls.autoRotate = false; chkRotate.checked = false; }, false );

		addLights();

		addShadows();

			function addLights() {

// 2016-02-21 ~ http://jaanga.github.io/cookbook-threejs/templates/add-lights/template-threejs-lights-r2.html

				let lightAmbient, lightPoint;

				lightAmbient = new THREE.AmbientLight( 0x444444 );
				scene.add( lightAmbient );

				THR.lightDirectional = new THREE.DirectionalLight( 0xffffff, 0.5 );
				THR.lightDirectional.position.set( -100, 100, 100 );
				THR.lightDirectional.shadow.camera.scale.set( 50, 50, 1 );

				THR.lightDirectional.shadow.mapSize.width = 2048;  // default 512
				THR.lightDirectional.shadow.mapSize.height = 2048;

				THR.lightDirectional.castShadow = true;
				scene.add( THR.lightDirectional );

				scene.add( new THREE.CameraHelper( THR.lightDirectional.shadow.camera ) );

				lightPoint = new THREE.PointLight( 0xffffff, 0.95 );
				camera.add( lightPoint );
				lightPoint.position = new THREE.Vector3( 0, 0, 1 );

				scene.add( camera );

			}


			function addShadows() {

// 2017-01-02 ~ http://jaanga.github.io/cookbook-threejs/templates/add-lights/template-threejs-lights-r3.html

				renderer.shadowMap.enabled = true;
				renderer.shadowMap.type = THREE.PCFSoftShadowMap;

				scene.traverse( function ( child ) {

					if ( child instanceof THREE.Mesh ) {

						child.castShadow = true
						child.receiveShadow = true;

					}

				} );

			}


			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				stats.domElement.style.display = window.innerWidth < 500 ? 'none' : '';

			}


	}

// See TKS, GND
	THR.drawSprite = function( text, scale, color, x, y, z ) {

		let texture, spritMaterial, sprite;

		texture = canvasText( text, color );
		spriteMaterial = new THREE.SpriteMaterial( { map: texture, opacity: 1 } );
		sprite = new THREE.Sprite( spriteMaterial );
		sprite.position.set( x, y, z ) ;
		sprite.scale.set( scale * texture.image.width, scale * texture.image.height );

		return sprite;


			function canvasText( textArray, color ) {

				let canvas = document.createElement( 'canvas' );
				let context = canvas.getContext( '2d' );
				let width = 0, texture;

				if ( typeof textArray === 'string' ) textArray = [ textArray ];

				context.font = '48px sans-serif';

				for ( let i = 0, len = textArray.length; i < len; i++) {

					width = context.measureText( textArray[i] ).width > width ? context.measureText( textArray[i] ).width : width;

				}

				canvas.width = width + 20; // 480
				canvas.height = textArray.length * 60;

				context.fillStyle = color;
				context.fillRect( 0, 0, canvas.width, canvas.height);

				context.lineWidth = 1 ;
				context.strokeStyle = '#000';
				context.strokeRect( 0, 0, canvas.width, canvas.height);

				context.fillStyle = '#000' ;
				context.font = '48px sans-serif';

				for ( i = 0, len = textArray.length; i < len; i++) {

					context.fillText( textArray[i], 10, 48  + i * 60 );

				}

				texture = new THREE.Texture( canvas );
				texture.minFilter = texture.magFilter = THREE.NearestFilter;
				texture.needsUpdate = true;

				return texture;

			}

	}


	THR.animate = function() {

		controls.update();
		stats.update();
		renderer.render( scene, camera );
		requestAnimationFrame( THR.animate );

	}
