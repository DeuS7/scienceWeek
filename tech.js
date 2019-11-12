let currentAlgo = "lca";

function toBinary(num) {
	return (""+num).split("").reduce(function(accum, cur) {
		return accum += (+cur).toString(2);
	}, "");
}

function addToFile(stream, data) {
	stream.write(data + '');
}

module.exports = {
	currentAlgo: currentAlgo, //Write it shorter!
	toBinary: toBinary,
	addToFile: addToFile
}