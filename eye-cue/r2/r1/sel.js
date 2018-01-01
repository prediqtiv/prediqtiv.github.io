
	let SEL = {};


	SEL.init = function() {

		mnuSelect.innerHTML =

			'<details open>' +

				'<summary><h3>Trading Days</h3></summary>' +

				'<p>' +
					'<select id=selFiles onchange=TKS.requestFileTicks(this.value); size=10 style=width:100%; ></select>' +
				'</p>' +

				'<p><output id=outDate ><output> </p>' +

			'</details>' +


			'<details open>' +

				'<summary><h3>Replay</h3></summary>' +

				'<p id=menuReplay>&nbsp;</p>' +

				'<p>' +
					' <input type=range id=inpIndex min=0 max=390 step=1 value=0 oninput=PLA.index=inpIndex.value;PLA.updatePosition(); title="0 to 390: OK" style=width:100%;>' +
				'</p>' +

				'<p>' +
					'<button id=mnuControls onclick=PLA.replay(); style=width:100%; >Play</button>' +
				'</p>' +

			'<p>' +
				'Replay ' +
				'<input type=radio name=replay id=mnuReplay1 checked >next day ' +
				'<input type=radio name=replay id=mnuReplay2 >same day' +
			'</p>' +

			'</details>' +
		'';

	}
