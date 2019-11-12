let fs = require('fs');
let tech = require('./tech.js');
/*Change name*/
let currentAlgo = tech.currentAlgo;
let currentAlgoInfo = currentAlgo + "/" + currentAlgo + "_info.dat";
let currentAlgoBin = currentAlgo + "/" + currentAlgo + "_bin.dat";
let currentAlgoDec = currentAlgo + "/" + currentAlgo + "_dec.dat";
let currentAlgoSpaces = currentAlgo + "/" + currentAlgo + "_spc.dat";

try {
	fs.mkdirSync(currentAlgo);
} catch(e) {
	/*console.log("Already exists");*/
}
/*************/
let currentAlgoGen = require(`./${currentAlgo}.js`).gen;
let fileLength = 0;

function generateSequence(n) {
	fs.unlink(currentAlgoBin, ()=>"ok");
	fs.unlink(currentAlgoDec, ()=>"ok");

	let currentNum;
	let writeStreamBin = fs.createWriteStream(currentAlgoBin, {flags: 'a'});
	let writeStreamDec = fs.createWriteStream(currentAlgoDec, {flags: 'a'});

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



generateSequence(1000);