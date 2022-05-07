const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'test', 'text.txt');
// fs.mkdir(path.join(__dirname, 'test'), function (err) {
//     if (err) {
//         throw err;
//     }
//     console.log('Directory created');
// });

fs.writeFile(filepath, 'Hello Again NodeJS', function (err) {
    if (err)
        throw (err);
    console.log('File has been created');
});fs.appendFile(filepath, '\nHello NodeJS', function (err) {
    if (err)
        throw (err);
    console.log('Content has been added to file');
});

fs.readFile(filepath, 'utf-8',function(err, content){
    if (err)
        throw(err);
    console.log(content); // можно использовать сразу если указали кодировку
    const data = Buffer.from(content); // если данные возвращаются в виде буфера
    console.log(data.toString());
});