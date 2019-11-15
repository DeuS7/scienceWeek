/*
* File with all global vars and funcs
* Change 'currentALgo' var to test different algorithm
* There should be .js file with that name, implementing that algorithm
*/

let currentAlgo = "research";
let spcSize = 1000000;
let spcDigits = 2;
let sequenceLength = 1000000;

let currentAlgoInfo = currentAlgo + "/" + currentAlgo + "_info.dat";
let currentAlgoBin = currentAlgo + "/" + currentAlgo + "_bin.dat";
let currentAlgoDec = currentAlgo + "/" + currentAlgo + "_dec.dat";
let currentAlgoSpaces = currentAlgo + "/" + currentAlgo + "_spc.dat";

let destFolder = "../ScienceWeek";

function toBinary(num) {
	return (""+num).split("").reduce(function(accum, cur) {
		return accum += (+cur).toString(2);
	}, "");
}

function addToFile(stream, data) {
	stream.write(data + '');
}

module.exports = {
	currentAlgo: currentAlgo,
	toBinary: toBinary,
	addToFile: addToFile,
	currentAlgoInfo: currentAlgoInfo,
	currentAlgoBin: currentAlgoBin,
	currentAlgoDec: currentAlgoDec,
	currentAlgoSpaces: currentAlgoSpaces,
	destFolder: destFolder,
	spcSize: spcSize,
	spcDigits: spcDigits,
	sequenceLength: sequenceLength
}