let fs = require('fs');
var Alea = require('alea')
var prng = new Alea()

function* genRes() {
	while (true) {
		yield prng().toString().split(".")[1];
	}
}


let gen = genRes();
/*let genBin = genMersBin();*/

exports.gen = gen;
/*exports.genBin = genBin;*/