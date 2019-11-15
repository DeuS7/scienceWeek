let fs = require('fs');
var Alea = require('alea')
var prng = new Alea()

function* genRes() {
	while (true) {
		yield prng().toString().split(".")[1].slice(0,12);
	}
}


let gen = genRes();

exports.gen = gen;