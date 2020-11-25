let express = require('express')
let app = express();
let path = require('path')

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
     res.sendFile(__dirname + '/index.html');
});

app.get('/schedule', (req, res) => {
    res.sendFile(__dirname + '/schedule.html')
})
app.get('/venue', (req, res) => {
    res.sendFile(__dirname + '/venue.html')
})
app.get('/register', (req, res) => {

    res.sendFile(__dirname + '/register.html')
})
app.listen('3000', (req, res) => {
    console.log('Server is running port 3k')
})
