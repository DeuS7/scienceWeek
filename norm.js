function* normGen() {
	while (true) {
		yield randomIntFromInterval(0, 10);
	}
}

function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.gen = normGen();