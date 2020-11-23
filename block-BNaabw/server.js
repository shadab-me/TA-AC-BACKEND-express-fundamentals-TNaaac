let express = require('express')
let app = express();
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    console.log(__dirname + '/public');
    res.sendFile(__dirname + '/index.html');
});

app.listen('3000', (req, res) => {
    console.log('Server is running port 3k')
})
