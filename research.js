let fs = require('fs');

function* genRes() {
	while (true) {
		yield 156;
	}
}


let gen = genRes();
/*let genBin = genMersBin();*/

exports.gen = gen;
/*exports.genBin = genBin;*/