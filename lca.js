function* lcaGen() {
	//Initially x equals to seconds since epoch
	let x = new Date() / 1;

	//Params from Java
	let m = 2 ** 48 - 1;
	let a = 25214903917;
	let c =  11;

	while(true) {
		x = (a*x+c) % m;
		yield x;
	}
}

function* lcaGenBin() {
	//Initially x equals to seconds since epoch
	let x = new Date() / 1;

	//Params from Java
	let m = 2 ** 48 - 1;
	let a = 25214903917;
	let c =  11;

	let lastDigits = "";

	while(true) {
		x = (a*x+c) % m;
		lastDigits = (x+"").slice(-2);

		if (lastDigits > 50) {
			yield 1;
		} else {
			yield 0;
		}
	}
}

exports.gen = lcaGen();
exports.genBin = lcaGenBin();