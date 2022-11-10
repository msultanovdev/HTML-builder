const fs = require('fs'),
      path = require('path'),
      fsPromises = fs.promises;
let dirpath = path.join(__dirname, 'secret-folder');

fs.promises.readdir((dirpath), {
    withFileTypes: true
}).then(results => {
    results.map(item => {
        if(!item.isDirectory()) {
            const filePath = path.join(dirpath, item.name),
              fileName = path.basename(filePath),
              ext = path.extname(filePath);
              fsPromises.stat(filePath).then(res => {
                console.log(`${fileName.replace(ext, '')} | ${ext.replace('.', '')} | ${Number(res.size / 1000).toFixed(3)}kb`);
              });
        }
    });
})
