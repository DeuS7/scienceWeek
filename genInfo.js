let fs = require('fs');
let tech = require('./tech.js');
/*Change name*/
let currentAlgo = tech.currentAlgo;
let currentAlgoInfo = currentAlgo + "/" + currentAlgo + "_info.dat";
let currentAlgoBin = currentAlgo + "/" + currentAlgo + "_bin.dat";
let currentAlgoDec = currentAlgo + "/" + currentAlgo + "_dec.dat";
let currentAlgoSpaces = currentAlgo + "/" + currentAlgo + "_spc.dat";
/*************/

function generateInfo() {
	fs.unlink(currentAlgoInfo, ()=>"ok");
	fs.unlink(currentAlgoSpaces, ()=>"ok");

	let writeStreamInfo = fs.createWriteStream(currentAlgoInfo, {flags: 'a'});
	let writeStreamSpc = fs.createWriteStream(currentAlgoSpaces, {flags: 'a'});

	let dataBin = fs.readFileSync(currentAlgoBin, 'ascii');
	let dataDec = fs.readFileSync(currentAlgoDec, 'ascii');
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