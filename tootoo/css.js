	CSS = {};

	MNU = {};

	CSS.setCSS = function() {

		let css;

		css = document.body.appendChild( document.createElement('style') );
		css.innerHTML =

			'html, body { font: 12pt monospace; height: 100%; margin: 0; }' +
			'a { color: crimson; text-decoration: none; }' +
			'a:hover { text-decoration: underline; }' +
			'aside { font-style: oblique; }' +
			'button, input[type=button] { background-color: #ccc; border: 2px #fff solid; color: #322; }' +
			'pre, blockquote { background-color: #eee; padding: 10px; }' +
			'summary { outline: none; }' +
			'summary h3 { display: inline; }' +

			'.popUp { background-color: white; border: 1px solid red; left: 180px; opacity: 1.0; padding: 5px; position: absolute; width: 120px; z-index: 10; }' +

			'#bars { color: crimson; cursor: pointer; font-size: 24pt; text-decoration: none; }' +

			'#container {  height: 100%; left: 0; position: absolute; transition: left 1s; width: 100%; }' +

// let each type of contents decide its best width and placement
			'#contents { border: 0px #ccc solid; height: 100%; left: 325px; overflow-x: hidden; position: absolute; width: ' + ( window.innerWidth - 325 ) + 'px; }' +

			'#editButton { background-color: #555; color: #fff; opacity: 0.5; padding: 8px; position: fixed; right: 20px; top: 20px; }' +
			'#editButton a { text-decoration: none; color: #fff; }' +

			'#hamburger { background-color: #eee; left: 325px; position: absolute; top: 20px;  z-index: 1 }' +

			'#menu { background-color: #eee; border: 1px #ccc solid; box-sizing:border-box; height: 100%; overflow-y: auto; padding: 0 10px; position: fixed; width: 325px; }' +

			'#nextFile { color: #888; font-size: 36pt; opacity: 0.5; padding: 8px; position: fixed; right: 20px; top: ' + (0.5 * window.innerHeight ) + 'px; }' +

			'#previousFile { color: #888; font-size: 36pt; opacity: 0.5; padding: 8px; position: fixed; margin-left: 350px; top: ' + (0.5 * window.innerHeight ) + 'px; }' +

			'#hamburger h2, #menu h2, #menu h4 {margin: 0; }' +
			'#menuBreadcrumbs h2, #menuBreadcrumbs h3 { font-size: 14pt; margin: 0; }' +
			'#editButton:hover, #previousFile:hover, #nextFile:hover { cursor: pointer; opacity: 1; }' +
			'#nextFile a, #previousFile a { text-decoration: none; color: #888; }' +

		'';

	}
