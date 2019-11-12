/*
* Main file. Generates sequence.
* Usage: node main, then genInfo, then putFilesInPlaces
* Creates two files: decimal and binary representation of generated sequence
*/

let fs = require('fs');
let tech = require('./tech.js');

try {
	fs.mkdirSync(tech.currentAlgo);
} catch(e) {
	/*console.log("Already exists");*/
}

let currentAlgoGen = require(`./${tech.currentAlgo}.js`).gen;
let fileLength = 0;

function generateSequence(n) {
	fs.unlink(tech.currentAlgoBin, ()=>"ok");
	fs.unlink(tech.currentAlgoDec, ()=>"ok");

	let currentNum;
	let writeStreamBin = fs.createWriteStream(tech.currentAlgoBin, {flags: 'a'});
	let writeStreamDec = fs.createWriteStream(tech.currentAlgoDec, {flags: 'a'});

	//Plus 10% just in case :D
	while (fileLength < n*1.1) {
		currentNum = currentAlgoGen.next().value;
		currentNumBin = tech.toBinary(currentNum);
		fileLength += currentNumBin.length;

		tech.addToFile(writeStreamDec, currentNum);
		tech.addToFile(writeStreamBin, currentNumBin);
	}

	writeStreamBin.end();
	writeStreamDec.end();
}



generateSequence(1000000);