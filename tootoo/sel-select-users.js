
	let SEL = {};
	let users = {};


	users.d3 = {
		user : 'd3',
		logo : '<img src=https://d3js.org/logo.svg height=32 >',
		repo : 'd3',
		branch : 'master',
		folder : '',
		rawgit: true
//		noIndex: true
	};
	users.d3GH = {
		user : 'd3',
		logo : '<img src=https://d3js.org/logo.svg height=32 >',
		repo : 'd3.github.com',
		branch : 'master',
		folder : '',
		rawgit: true
	};
	users.jDemo = {
		user: 'jaanga',
		logo : '<img src=https://jaanga.github.io/j.png height=32 >',
		repo: 'jaanga.github.io',
		branch: 'master',
		folder: 'demo'
	};
	users.jTerrain = {
		user: 'jaanga',
		logo : '<img src=https://jaanga.github.io/j.png height=32 >',
		repo: 'terrain3',
		branch: 'gh-pages',
		folder: ''
	};
	users.jaanga = {
		user : 'jaanga',
		logo : '<img src=https://jaanga.github.io/j.png height=32 >',
		repo : 'jaanga.github.io',
		branch : 'master',
		folder : ''
	};
	users.jupyter = {
		user : 'jupyter',
		logo : '<img src=https://blog.jupyter.org/content/images/2015/02/jupyter-sq-text.png height=32 >',
		repo : 'jupyter.github.io',
		branch : 'master',
		folder : '',
		rawgit: true
	};
	users.jupyterNotebook = {
		user : 'jupyter',
		logo : '<img src=https://blog.jupyter.org/content/images/2015/02/jupyter-sq-text.png height=32 >',
		repo : 'notebook',
		branch : 'master',
		folder : '',
		rawgit: true
	};
	users.ladybugDynamo = {
		user : 'ladybug-tools',
		repo : 'ladybug-dynamo',
		branch : 'gh-pages',
		folder : '',
		rawgit: true
	};
	users.ladybugWeb = {
		user : 'ladybug-tools',
		repo : 'ladybug-web',
		branch : 'gh-pages',
		folder : ''
	};
	users.leader = {
		user : 'leaderphotos',
		repo : 'leaderphotos.github.io',
		branch : 'master',
		folder :''
	};
	users.mrdoob = {
		user : 'mrdoob',
		repo : 'three.js',
		branch : 'dev',
		folder : '',
		rawgit: true
	};
	users.paulmasson = {
		user : 'paulmasson',
		logo : '<img src=http://paulmasson.github.io/apple-touch-icon.png height=32 >',
		repo : 'paulmasson.github.io',
		branch : 'master',
		folder : ''
	};
	users.pushmePullyou = {
		user : 'pushme-pullyou',
		repo : 'pushme-pullyou.github.io',
		branch : 'master',
		folder : '',
		noIndex: true,
		rawgit: null
	};
	users.pushmePullyouTooTo = {
		user : 'pushme-pullyou',
		repo : 'pushme-pullyou.github.io',
		branch : 'master',
		folder : 'tootoo',
		noIndex: true,
		rawgit: null
	};
	users.sagemathGH = {
		user : 'sagemath',
		repo : 'sagemath.github.io',
		branch : 'master',
		folder : ''
	};
	users.sagemathCell = {
		user : 'sagemath',
		repo : 'sagecell',
		branch : 'gh-pages',
		folder : '',
		rawgit: true
	};
	users.sagemathSageDev = {
		user : 'sagemath',
		repo : 'sage',
		branch : 'develop',
		folder : '',
		rawgit: true
	};
	users.sagemathDocs = {
		user : 'sagemath',
		repo : 'documentation',
		branch : 'gh-pages',
		folder : 'html'
	};
	users.sagemathPlanet = {
		user : 'sagemath',
		repo : 'planet',
		branch : 'gh-pages',
		folder : ''
	};
	users.theoArmour = {
		user : 'theo-armour',
		repo : 'drawing',
		branch : 'master',
		folder : '',
		noIndex: true
	};
	users.prediqtiv = {
		user : 'prediqtiv',
		subText : 'Invest smarter',
		repo : 'prediqtiv.github.io',
		branch : 'master',
		folder : '',
		defaultFile : 'README.md'
	};

/*
	users. = {
		user : '',
		repo : '',
		branch : '',
		folder : ''
	};
*/


	 SEL.initSelectUsers = function() {

		selSelectUsers.innerHTML =

				'<details open>' +

					'<summary><h3>Select User/ Repo/ Branch </h3></summary>' +

						'<select id=selUser onchange=TOO.initUser(users[this.value]); title="Select user" size=15 style=width:100%;  >' +

						'</select>' + b +
					b +

				'</details>' +

		'';

		SEL.getMenuSelectUserOptions();

	}


	SEL.getMenuSelectUserOptions = function(){

		let user;

		users.keys = Object.keys( users );

		for ( let i = 0; i < users.keys.length; i++ ) {

			user = users[ users.keys[ i ] ];

			selUser[ i ] = new Option( user.user + ' ' + user.repo + ' ' + user.folder + ' ' + user.branch, users.keys[ i ] );

		}

		selUser.selectedIndex = users.keys.indexOf( user.user );

	}
