/*
* Generates all additional stuff, namely:
* Exact length of generated sequence
* Sum of bits, where 1 is 1 and 0 is (-1)
* First 1000 digits of sequence separated by space
* The latter is for Matlab
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

	for (let i = 0;i<dataBin.length;i++) {
		if (dataBin[i] == "0") {
			bitsSum--;
		} else {
			bitsSum++;
		}

		counter++;
	}
	for (let i = 0;i<(dataDec.length > 1000 ? 1000 : dataDec.length);i++) {
		tech.addToFile(writeStreamSpc, dataDec[i] + " ");
	}

	tech.addToFile(writeStreamInfo, `File length: ${counter} \n`);
	tech.addToFile(writeStreamInfo, `Bits sum: ${Math.abs(bitsSum)} \n`);
}

generateInfo();