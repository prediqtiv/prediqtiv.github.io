
// having css here allows for inserting JavaScript

	let CSS = {};

	CSS.init = function() {

		document.head.innerHTML +=

			'<style>' +

			'body { font: 12pt monospace; margin: 0; overflow: hidden; }' +

			'a { color: crimson; text-decoration: none; }' +
			'a:hover { text-decoration: underline; }' +

			'button, input[type=button] { background-color: #ccc; border: 2px #fff solid; color: #322; }' +

			'input[type=range] { -webkit-appearance: none; -moz-appearance: none; background-color: #ddd; width: 160px; }' +
			'input[type=range]::-moz-range-thumb { background-color: #888; border-radius: 0; width: 10px; }' +
			'input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; background-color: #888; height: 20px; width: 10px; }' +

			'summary { outline: none; }' +
			'summary h3 { display:inline; }' +

			'.popUp { background-color: white; left: 180px; border: 1px solid red; opacity: 1.0; padding: 5px; position: absolute; width: 120px; z-index: 10; }' +

			'#bars { color: crimson; cursor: pointer; font-size: 24pt; text-decoration: none; }' +

			'#container { left: 0; position: absolute; transition: left 1s; }' +

			'#hamburger { background-color: #eee; left: 325px; position: absolute; top: 20px; }' +
			'#home { background-color: #eee; cursor: pointer; font-size: 40pt; left: 325px; line-height: 30pt; position: absolute; top: 80px; }' +

			'#menu { background-color: #eee; border: 1px #ccc solid; max-height: ' + window.innerHeight + 'px; overflow-x: hidden; overflow-y: auto; padding: 0 10px; position: absolute; width: 300px; }' +
			'#menu h2 { margin: 0; }' +

		'</style>';

	}
