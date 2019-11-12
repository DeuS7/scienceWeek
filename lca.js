function* lcaGen() {
	//Initially x equals to seconds since epoch
	let x = new Date() / 1;

	//Params from Java
	let m = 2 ** 48;
	let a = 25214903917;
	let c =  11;

	while(true) {
		x = (a*x+c) % m;
		yield x;
	}
}

exports.gen = lcaGen();