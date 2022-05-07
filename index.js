const chalk = require('chalk');
const text = require('./data.js');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Служебные переменные
// console.log(exports);
// console.log(require);
// console.log(module);
// console.log(__dirname);
// console.log(__filename);

// console.log(chalk.blue('Hello NodeJS'));
// console.log(text);

server = http.createServer(function (request, response) {
    // if (request.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf-8', function (err, content) {
    //         if (err)
    //             throw(err);
    //         response.writeHead(200, {
    //             'Content-type': 'text/html',
    //         });
    //         response.end(content);
    //     });
    // } else if (request.url === '/contacts') {
    //     fs.readFile(path.join(__dirname, 'public', 'contacts.html'), 'utf-8', function (err, content) {
    //         if (err)
    //             throw(err)
    //         response.writeHead(200, {
    //             'Content-type': 'text/html',
    //         });
    //         response.end(content);
    //     });
    // };
    let filename = request.url === '/' ? 'index' : request.url.split('/')[1];
    const ext = path.extname(filename);
    filename = ext ? filename : filename + '.html';
    let contentType;
    switch (ext) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        default:
            contentType = 'text/html';
            break;
    }

    const filepath = path.join(__dirname, 'public', filename);
    fs.readFile(filepath, 'utf-8', function (err, content) {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), 'utf-8', function (err, data) {
                if (err) {
                    response.writeHead(500);
                    response.end('Error');
                } else {
                    response.writeHead(404, {
                        'Content-type': contentType,
                    });
                    response.end(data);
                }
            });
        } else {
            response.writeHead(200, {
                'Content-type': contentType,
            });
            response.end(content);
        }
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
    console.log(`Server has been started on ${PORT}...`);
});
