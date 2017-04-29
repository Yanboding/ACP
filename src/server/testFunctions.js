var num_invokes = 1;

function testPrintWithCallback(req, res, next) {
	console.log('[routing]: test function! (invoked %d times)', num_invokes);
	num_invokes++;
	console.log('[routing]: Testing... from front end:\n');
	console.log(req.body);
	console.log('\n' + 'num_invokes will be wrapped and send back.');

	res.send({
		num: num_invokes
	});
}

function testFunc(req, res, next) {
	console.log('[routing]: test function! (invoked %d times)', num_invokes);
	num_invokes++;
	let oResTestResponse = {
		number: num_invokes,
		message: '_(:з」∠)_'
	};
	res.send(oResTestResponse)
}

function fakeProduct(req, res, next) {
	console.log('[testFunctions]: Invoking fakeProduct...');
	let pID = req.body.id;
	let oDateDefaultDate = new Date(1997, 12, 15);
	let oDefaultRes = {
		pID: pID,
		name: "",
		root: pID,
		parent: undefined,
		dateIssued: oDateDefaultDate,
		imageURL: "",
		admin: "",
		artist: ""
	};
	let oErrRes = {
		err: true
	};

	if (isNaN(pID) || pID>3 || pID<1) {
		res.send(oErrRes);
		return;
	} else if (pID == 1) {
		oDefaultRes.imageURL = "http://more-sky.com/data/out/12/IMG_521547.jpg";
		oDefaultRes.name = "YuGiOh";
		oDefaultRes.admin = "Teemo";
		oDefaultRes.artist = "Alice";
	} else if (pID == 2) {
		oDefaultRes.imageURL = "http://img.bizhi.sogou.com/images/2012/04/18/26622.jpg";
		oDefaultRes.name = "Vocaloid";
		oDefaultRes.admin = "Teemo";
		oDefaultRes.artist = "Bob";
	} else {
		oDefaultRes.imageURL = "http://www.imgbase.info/images/safe-wallpapers/anime/touhou/48375_touhou.jpg";
		oDefaultRes.name = "Touhou";
		oDefaultRes.admin = "Teemo";
		oDefaultRes.artist = "Charlie";
	}

	res.send(oDefaultRes);

}


function fakeSearch(req, res, next) {
	console.log('[testFunctions]: Invoking fakeSearch...');
	let queryString = req.body.queryString;

	/* On success, return an array of ... tuples. */
	
	let tuple1 = {
		type: 'product',
		title: 'No Title',
		imageSource: 'https://i.ytimg.com/vi/E8aE4nmJjX4/maxresdefault.jpg',
		description: 'No description',
		id: '1'
	};

	let tuple2 = {
		type: 'product',
		title: 'Vocaloid',
		imageSource: 'http://img.bizhi.sogou.com/images/2012/04/18/26622.jpg',
		description: 'No description',
		id: '2'
	};

	let tuple3 = {
		type: 'project',
		title: 'Dummy hand project',
		imageSource: undefined,
		description: 'Dummy hand project for CSC301 demo #1 and #2',
		id: 'dummy_old'
	};
	
	let tuple4 = {
		type: 'product',
		title: 'Madoka Magica',
		imageSource: 'http://cdn.wallpapersafari.com/96/14/ZOnTYx.jpg',
		description: 'Lao xu de hei bang pian',
		id: '3'
	};

	queryString = queryString.trim();
	if (!queryString || queryString=='no result') {
		res.send({results: []});
	} else if (queryString=='madoka') {
		res.send({results: [tuple4]});
	} else {
		res.send({results: [tuple1, tuple2, tuple3, tuple4]});
	}
}


function fakeHistree(req, res, next) {
	/* This should be the pID of ROOT ie the id of this project*/
	let pID = req.params.pID
	console.log("[fakeHistree] pID = " + pID)
	console.log(typeof pID)

	var resJson = {
		error: true,
		massage: "",
		isroot: false,
		root: undefined,
		nodes: []
	}

	/* Seriously why do we even need IS_ROOT? No, we don't need that field. */
	/* Assuming root is one of the elements inside the nodes array. */
	/* Assuming each element in the nodes array is of the form:
		{
			pID: "S12345",
			imageSource: "http://example.com/image.jpg",
			parent: "S12344"
		}
	*/

	let rootNode = {
		pID: "ROOT1",
		imageSource: "http://pre05.deviantart.net/4f7c/th/pre/f/2017/090/f/3/running_from_a_pear_by_spitfiresonice-db473hd.jpg",
		parent: undefined
	}

	let level1Node = {
		pID: "LEVEL1NODE1",
		imageSource: "http://pre05.deviantart.net/241c/th/pre/f/2017/037/d/9/light_and_life_by_antifan_real-dalnbng.jpg",
		parent: "ROOT1"
	}

	let level2Node11 = {
		pID: "LEVEL2NODE11",
		imageSource: "http://pre05.deviantart.net/241c/th/pre/f/2017/037/d/9/light_and_life_by_antifan_real-dalnbng.jpg",
		parent: "LEVEL1NODE1"
	}

	let level2Node12 = {
		pID: "LEVEL2NODE12",
		imageSource: "http://pre05.deviantart.net/241c/th/pre/f/2017/037/d/9/light_and_life_by_antifan_real-dalnbng.jpg",
		parent: "LEVEL1NODE1"
	}

	let level2Node2 = {
		pID: "LEVEL2NODE2",
		imageSource: "http://pre05.deviantart.net/241c/th/pre/f/2017/037/d/9/light_and_life_by_antifan_real-dalnbng.jpg",
		parent: "LEVEL1NODE1"
	}

	let level3Node3 = {
		pID: "LEVEL3NODE3",
		imageSource: "http://pre05.deviantart.net/241c/th/pre/f/2017/037/d/9/light_and_life_by_antifan_real-dalnbng.jpg",
		parent: "LEVEL2NODE2"
	}

	if (pID.trim() == "ROOT1") {
		console.log('[fakeHistree] INSIDE BRANCH 1')
		resJson.error = false
		resJson.root = rootNode
		resJson.nodes.push(rootNode)
		resJson.nodes.push(level1Node)
		resJson.nodes.push(level2Node11)
		resJson.nodes.push(level2Node12)
		resJson.nodes.push(level2Node2)
		resJson.nodes.push(level3Node3)
		console.log(resJson)
		res.send(resJson)
	} else {
		console.log('[fakeHistree] INSIDE BRANCH 2')
		res.send(resJson)
	}

}


module.exports = {
	testPrintWithCallback: testPrintWithCallback,
	testFunc: testFunc,
	fakeProduct: fakeProduct,
	fakeSearch: fakeSearch,
	fakeHistree: fakeHistree
};
