/*
* File with all global vars and funcs
* Change 'currentALgo' var to test different algorithm
* There should be .js file with that name, implementing that algorithm
* spcSize - size of the file for matlab.
* destFolder - where putFilesInPlaces should target
*/

let currentAlgo = "lca";
let spcSize = 1000000;
let sequenceLength = 1000000;

let currentAlgoInfo = currentAlgo + "/" + currentAlgo + "_info.dat";
let currentAlgoBin = currentAlgo + "/" + currentAlgo + "_bin.dat";
let currentAlgoDec = currentAlgo + "/" + currentAlgo + "_dec.dat";
let currentAlgoSpaces = currentAlgo + "/" + currentAlgo + "_spc.dat";

let destFolder = "../ScienceWeek";

function toBinary(num) {
	return num.toString().split("").reduce(function(accum, cur) {
		return accum += (cur < 5 ? 1 : 0);
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
	sequenceLength: sequenceLength
}