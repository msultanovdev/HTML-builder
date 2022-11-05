const fs = require('fs'),
      path = require('path'),
      {stdin, stdout, exit} = require('process');
const dirpath = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(dirpath);
stdout.write('Введите текст: ');
stdin.on('data', data => {
    data.toString().trim() === 'exit' ? goodLuck() : output.write(data);
});
process.on('SIGINT', goodLuck);
function goodLuck() {
    stdout.write(`\nДо встречи. Удачи!`);
    exit();
}