const fs = require('fs'),
      path = require('path'),
      fsPromises = fs.promises;

copyFolder();

function copyFolder() {
    fs.mkdir(path.join(__dirname, 'files-copy'), {
        recursive: true,
    }, err => {
        if(err) {
           throw new Error('Папка с таким названием существует или что-то пошло не так!'); 
        }
        console.log('Папка успешно склонирована!');
    });
    fsPromises.readdir(path.join(__dirname, 'files')).then(items => {
        items.forEach(item => {
            const filePath = path.join(__dirname, 'files', item);
            fsPromises.copyFile(filePath, path.join(__dirname, 'files-copy', item));
            console.log(item);
        });
    });
};