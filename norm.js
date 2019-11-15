function* normGen() {
	while (true) {
		yield randomIntFromInterval(0, 10);
	}
}
function* normGenBin() {
	while (true) {
		if (Math.random() > 0.5) {
			yield 1;
		} else {
			yield 0;
		}
	}
}

function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.gen = normGen();
exports.genBin = normGenBin();
