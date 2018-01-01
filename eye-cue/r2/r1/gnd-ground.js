
	let GND = {};

	GND.init = function() {

		function v( x, y, z ){ return new THREE.Vector3( x, y, z ); }

		let geometry, material, mesh;
		let edgesGeometry, edgesMaterial, edges;

// Ground Plane
		GND.ground = new THREE.Object3D();

		geometry = new THREE.BoxGeometry( 150, 5, 400 );

		material = new THREE.MeshPhongMaterial( {
			color: 0x22cc55,
			opacity: 0.85,
			specular: 0xffffff * Math.random(),
			shininess: 10,
			transparent: true
		} );

		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 75, -2.6, -200 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		GND.ground.add( mesh );

		edgesGeometry = new THREE.EdgesGeometry( mesh.geometry ); // or WireframeGeometry
		edgesMaterial = new THREE.LineBasicMaterial();
		edgesMaterial.color.setRGB( 0.3, 0.3, 0.3 );
		edges = new THREE.LineSegments( edgesGeometry, edgesMaterial );
		mesh.add( edges ); // add wireframe as a child of the parent mesh


		material = new THREE.MeshPhongMaterial( {
			color: 0x992222,
			opacity: 0.85,
			specular: 0xffffff * Math.random(),
			shininess: 10,
			transparent: true
		} );

		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( -75, -2.51, -200 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		GND.ground.add( mesh );

		edgesGeometry = new THREE.EdgesGeometry( mesh.geometry ); // or WireframeGeometry
		edgesMaterial = new THREE.LineBasicMaterial();
		edgesMaterial.color.setRGB( 0.3, 0.3, 0.3 );
		edges = new THREE.LineSegments( edgesGeometry, edgesMaterial );
		mesh.add( edges ); // add wireframe as a child of the parent mesh

// Bar
		geometry = new THREE.BoxGeometry( 300, 1, 5 );

		material = new THREE.MeshPhongMaterial( {
			color: 0xaaaaaa,
			specular: 0xffffff * Math.random(),
			shininess: 10
		} );

		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, 0.5, -200 * Math.log( 2 ) );
		mesh.position.set( 0, 0.5, -200 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		GND.ground.add( mesh );


		edgesGeometry = new THREE.EdgesGeometry( mesh.geometry ); // or WireframeGeometry
		edgesMaterial = new THREE.LineBasicMaterial();
		edgesMaterial.color.setRGB( 0.3, 0.3, 0.3 );
		edges = new THREE.LineSegments( edgesGeometry, edgesMaterial );
		mesh.add( edges ); // add wireframe as a child of the parent mesh

// Labels
		let sp, ar, axis;

		sp = THR.drawSprite( '0% vol avg', 0.1, '#ff00ff', -150, 12 , 0 );
		sp.material.opacity = 0.5;
		scene.add( sp );

		ar = new THREE.ArrowHelper( v( 0, 1, 0 ), v( -150, 0, 0 ), 8, 0xff8888, 4, 3 );
		GND.ground.add( ar );

		sp = THR.drawSprite( '100% vol avg', 0.1, '#ff00ff', -150, 12 , mesh.position.z );
		sp.material.opacity = 0.5;
		GND.ground.add( sp );

		sp = THR.drawSprite( '>600% vol avg', 0.1, '#ff00ff', -150, 12 , -200 * Math.log( 7 ) );
		sp.material.opacity = 0.5;
		GND.ground.add( sp );

		GND.axisHelper = new THREE.AxisHelper( 50 );
		GND.ground.add( GND.axisHelper );

		scene.add( GND.ground );

	}

