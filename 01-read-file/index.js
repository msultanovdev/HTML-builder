const fs = require('fs'),
      path = require('path'),
      { stdout } = require('process');
dirpath = path.join(__dirname, 'text.txt');
const input = fs.createReadStream(dirpath, 'utf-8');
input.on('data', data => stdout.write(data));