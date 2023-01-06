const { on } = require('events');
const fs = require('fs');

const readstream = fs.createReadStream('./docs/first.txt', { encoding: 'utf-8'});

readstream.on('data', (chunk) => {
    console.log('--------new chunk--------');
    console.log(chunk);
});
