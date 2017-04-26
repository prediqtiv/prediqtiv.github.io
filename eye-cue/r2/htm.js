
	HTM = {};

	HTM.init = function()  {

		let container;
		const b = '<br>';

		container = document.body.appendChild( document.createElement( 'div' ) );
		container.id = 'container';
		container.innerHTML =

			'<div id=menu >' +

				'<h2>' +
					'<a href=https://prediqtiv.github.io/ title="invest smarter" ><img src=https://prediqtiv.github.io/images/predIQtiv.png height=48px ></a>' + b +
					'<a href="" title="Click here to refresh this page" >' + document.title.slice( 10 ) + '</a>' +
					' <a href=../../index.html#README.md onmouseover=popHelp.style.display=""; onmouseout=popHelp.style.display="none"; > &#x24D8; </a>' +
				'</h2>' +

				'<div class=popUp id=popHelp style=display:none; ><p>Hi there!</p>Click the i-in-circle, info icon for latest updates.</div>' +
				'<p><small><i>' + document.head.querySelector("[name=description]").content + '</i></small></p>' +

				'<div id=mnuSelect ></div>' +

				'<div id=mnuShow ></div>' +

				'<div id=mnuSettings ></div>' +

				'<details>' +

					'<summary><h3>About</h3></summary>' +

					'<p>' +
						'&bull; Rotate|Zoom|Pan => 1|2|3' + b +
						'&nbsp; fingers/buttons' + b +
						'&bull; Rotation => spacebar' + b +
						'&bull; Slide menu => \'hamburger\' icon' +
					'<p>' +

					'<p>Click the \'i in a circle\' icon for more <a href=index.html#readme.md title="Click here for help and information" >help</a>.</p>' +

					'<p>' +
						'Keywords:' + b +
						document.head.querySelector("[name=keywords]").content.replace( /,/g, ', ' ) + b + b +
						'Revision Date:' + b +
						document.head.querySelector("[name=date]").content + b + b +
						'File name:' + b +
						location.pathname.split( '/' ).pop() + b +
					'</p>' +

					'<p>Copyright &copy; ' + ( new Date() ).getFullYear() + ' pred<i>IQ</i>tiv authors. <a href=http://prediqtiv.github.io/index.html#license.md >MIT license</a>.</p>' +

				'</details>' +

				'<hr>' +

				'<center><a href=javascript:menu.scrollTop=0; style=text-decoration:none; onmouseover=pop2.style.display=""; onmouseout=pop2.style.display="none"; ><h1><img src=https://prediqtiv.github.io/images/five-boxes.png height=32 ><h1></a></center>' +
				'<div class=popUp id=pop2 style=display:none;bottom:100px; >pred<i>IQ</i>tiv - invest smarter.<br>Click here to return to the top of the page</div>' +

			'</div>' +

			'<div id=hamburger onclick=container.style.left=container.style.left===""?"-325px":""; >' +
				'<div id=bars title="Click this hamburger to slide the menu" > &#9776 </div>' +
			'</div>' +

			'<div id=home onclick=controls.reset();controls.target.set(0,20,-150); title="Click to return to home view" > &#8962;</div>' +

		'';

	}
