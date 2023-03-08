const http = require('http');

const PORT = 3000;
const server = http.createServer();

const friends = [
    { id:0,
    name: 'Onuh Oche',},
    { id:1,
        name: 'Onuh Becky',},
    { id:2,
    name: 'Onuh Sunday',},
    { id:3,
        name: 'Onuh Grace',},

]
server.on('request',(req, res) => {
    const items = req.url.split('/');
    // /friends/2 => ['', 'friends', '2']
    if(req.method === 'POST' && items[1] === 'friends'){
req.on('data', (data) => {
    const friend = data.toString();
    console.log('Request:', friend);
    friends.push(JSON.parse(friend));
});
    req.pipe(res);

    }
    else if(req.method === 'POST' && items[1] === 'friends'){
    // if(req.url === '/friends'){
        // res.writeHead(200, {
    //     'Content-Type': 'application/json',
    // });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if(items.length === 3){
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        }else{
            res.end(JSON.stringify(friends));
        }
       
            // id:1,
            // name: 'My name is Onuh Oche',
            // message: 'I Love YOU'
        
    // } else if (req.url === '/messages'){
    } else if (req.method === 'GET' && items[1] === 'messages'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ol>');
        res.write('<li>Hello beautiful</li>');
        res.write('<li>I love you with all of my heart</li>');
        res.write('</ol>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
