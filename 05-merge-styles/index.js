const fs = require('fs'),
      fsPromises = fs.promises,
      path = require('path'),
      stylePath = path.join(__dirname, 'styles'),
      distPath = path.join(__dirname, 'project-dist/bundle.css'),
      output = fs.createWriteStream(distPath);

fsPromises.readdir(stylePath).then(async (files) => {
    for(let i = 0; i < files.length; i++) {
        const filePath = path.join(path.join(stylePath, files[i]));
        const name = path.basename(filePath);
        const ext = path.extname(filePath);
        if(ext === ".css") {
            const input = fs.createReadStream(path.join(stylePath, name));
            input.on('data', data => {
                output.write(data.toString() + '\n');
            });
        }
    }
})
