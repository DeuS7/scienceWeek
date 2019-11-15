let fs = require('fs');
var Alea = require('alea')


let randomData = fs.readFileSync('pi.txt', 'ascii');

function* genRes() {
	let prng;

	for (let i = 0;i<Infinity;i+=10) {
		prng = Alea(randomData.slice(i, i+10));

		for (let j = 0;j<25;j++) {
			yield prng().toString().split(".")[1].slice(0,12);
		}
	}
}


let gen = genRes();

exports.gen = gen;