/*
* Creates folder for the tested algorithm
* Puts files to the folders, where testing will take place
* Puts info file, and file for matlab in the folder of the algorithm
*/

let fs = require('fs');
let tech = require('./tech.js');
let rimraf = require('rimraf');

try {
	fs.mkdirSync(`../ScienceWeek/${tech.currentAlgo}Results`);
} catch(e) {
	console.log("Already exists");
}

//The "split" part is required since I need the name of the file that contains decimals,
//but in 'tech' file it is stored as a path to the file, so I take only the last part after '/'
fs.copyFile(tech.currentAlgoDec, `${tech.destFolder}/ent/${tech.currentAlgoDec.split("/")[1]}`, (err) => {
	if (err) throw err;
});

fs.copyFile(tech.currentAlgoBin, `${tech.destFolder}/sts-2.1.2/${tech.currentAlgoBin.split("/")[1]}`, (err) => {
	if (err) throw err;
});

fs.copyFile(tech.currentAlgoInfo, `${tech.destFolder}/${tech.currentAlgo}Results/${tech.currentAlgoInfo.split("/")[1]}`, (err) => {
	if (err) throw err;
});

fs.copyFile(tech.currentAlgoSpaces, `${tech.destFolder}/${tech.currentAlgo}Results/${tech.currentAlgoSpaces.split("/")[1]}`, (err) => {
	if (err) throw err;
});