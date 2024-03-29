/*
* Generates all additional stuff, namely:
* Exact length of generated sequence
* Sum of bits, where 1 is 1 and 0 is (-1)
* Inclusion stats
* Binary digits, separated with space
* The latter is for Runs test in Matlab
*/

let fs = require('fs');
let tech = require('./tech.js');

function generateInfo() {
	fs.unlink(tech.currentAlgoInfo, ()=>"ok");
	fs.unlink(tech.currentAlgoSpaces, ()=>"ok");

	let writeStreamInfo = fs.createWriteStream(tech.currentAlgoInfo, {flags: 'a'});
	let writeStreamSpc = fs.createWriteStream(tech.currentAlgoSpaces, {flags: 'a'});

	let dataBin = fs.readFileSync(tech.currentAlgoBin, 'ascii');
	let dataDec = fs.readFileSync(tech.currentAlgoDec, 'ascii');
	let bitsSum = 0;
	let counter = 0;
	let inclusionCounter = {};

	for (let i = 0;i<dataBin.length;i++) {
		if (i < tech.spcSize) {
			tech.addToFile(writeStreamSpc, dataBin[i] + " ");
		}

		if (dataBin[i] == "0") {
			bitsSum--;
		} else {
			bitsSum++;
		}

		counter++;
	}
	
	for (let i = 0;i<dataDec.length;i++) {
		if (inclusionCounter[dataDec[i]]) {
			inclusionCounter[dataDec[i]]++;
		} else {
			inclusionCounter[dataDec[i]] = 1;
		}
	}

	tech.addToFile(writeStreamInfo, `File length: ${counter} \n`);
	tech.addToFile(writeStreamInfo, `Bits sum: ${Math.abs(bitsSum)} \n`);
	tech.addToFile(writeStreamInfo, `NumbersInfo: ${JSON.stringify(inclusionCounter).replace(/,/g,'\n').replace('{', '\n')} \n`);

	console.log(`File length: ${counter} \n`);
	console.log(`Bits sum: ${Math.abs(bitsSum)} \n`);
	console.log(`NumbersInfo: ${JSON.stringify(inclusionCounter).replace(/,/g,'\n').replace('{', '\n')} \n`);
}

generateInfo();