const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("CI/CD Pipeline Working ✔ Version 2 Triggered by GitHub Webhook");
}).listen(3000, () => {
    console.log('Running on port 3000');
});
