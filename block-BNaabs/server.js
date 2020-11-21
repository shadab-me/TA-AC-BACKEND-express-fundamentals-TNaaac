let express = require('express');

let app = express();

app.get('/', (req, res) => {
     res.sendFile(__dirname + '/index.html');
})
app.get('/login', (req, res) => {
res.sendFile(__dirname + '/newform.html')
});

app.post('/login',(req, res) => {
console.log(req.body);
res.send('This from form')
});


app.listen(3000, () => {
     console.log('running on server 3000')
})