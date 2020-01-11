var http = require('http'),
    fs = require('fs');

http.createServer(function (req, res) {

    if (req.url == '/pages/game.html') {
        fs.readFile('pages/game.html', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else {
        // console.log(req.url)
        fs.readFile('pages/index.html', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    }
}).listen(8080);