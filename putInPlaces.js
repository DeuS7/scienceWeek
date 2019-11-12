let fs = require('fs');
let tech = require('./tech.js');

let currentAlgo = tech.currentAlgo;
let currentAlgoInfo = currentAlgo + "_info.dat";
let currentAlgoBin = currentAlgo + "_bin.dat";
let currentAlgoDec = currentAlgo + "_dec.dat";
let currentAlgoSpaces = currentAlgo + "_spc.dat";

fs.mkdirSync(currentAlgo);


let writeStreamBin = fs.createWriteStream(currentAlgoBin, {flags: 'a'});

tech.addToFile(writeStreamBin, "100110");