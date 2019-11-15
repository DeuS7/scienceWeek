/*
* Main file. Generates sequence.
* Usage: node main, then genInfo, then putFilesInPlaces
* Creates two files: decimal and binary sequences of length, specified in tech.js
*/

let fs = require('fs');
let tech = require('./tech.js');

try {
	fs.mkdirSync(tech.currentAlgo);
} catch(e) {
	/*console.log("Already exists");*/
}

let currentAlgoGen = require(`./${tech.currentAlgo}.js`).gen;
let currentAlgoGenBin = require(`./${tech.currentAlgo}.js`).genBin;
let fileLength = 0;

function generateSequence(n) {
	fs.unlink(tech.currentAlgoBin, ()=>"ok");
	fs.unlink(tech.currentAlgoDec, ()=>"ok");

	let currentNum;
	let writeStreamBin = fs.createWriteStream(tech.currentAlgoBin, {flags: 'a'});
	let writeStreamDec = fs.createWriteStream(tech.currentAlgoDec, {flags: 'a'});

	while (fileLength < n) {
		currentNum = currentAlgoGen.next().value;
		fileLength += currentNum.toString().length;
		
		tech.addToFile(writeStreamBin, tech.toBinary(currentNum));
		tech.addToFile(writeStreamDec, currentNum);
	}

	writeStreamBin.end();
	writeStreamDec.end();
}



generateSequence(tech.sequenceLength);