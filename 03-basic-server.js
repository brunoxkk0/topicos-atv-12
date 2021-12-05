const fs = require('fs');
const express = require('express');

const app = express();

async function readFile(res){

    await fs.readFile('./html/basic.html', 'utf-8', (err, data) => {

        if (err) {
            res.send(err);
            return;
        }

        res.send(data);
    });
}

app.get('/', (req, res) => {
    console.log('some request');
    readFile(res);
});

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});

console.log('End of the script')
