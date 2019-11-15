var MersenneTwister = require('mersenne-twister');
var generator = new MersenneTwister();

function* genMers() {
	while(true) {
		yield generator.random_int();
	}
}

let gen = genMers();

exports.gen = gen;