const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("🚀 Jenkins CI/CD Pipeline LIVE - Webhook Trigger Verified");
}).listen(3000, () => {
    console.log('Running on port 3000');
});
