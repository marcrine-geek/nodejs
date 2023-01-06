const fs = require('fs');
// read files
fs.readFile('./docs/first.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

// write files
fs.writeFile('./docs/first1.txt', 'hello world', () => {
    console.log('file was written');
})

//  directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('created')
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder is deleted');
    })
}


// delete files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}