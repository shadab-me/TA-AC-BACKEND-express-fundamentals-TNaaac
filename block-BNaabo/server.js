let express = require('express');
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(__dirname + '/assets'))
app.get('/home', (req, res) => {
    console.log(__dirname);

    res.sendFile(__dirname + '/index.html')
    
})

 

app.get('/', (req, res) => {
    res.send('Welcome to express');
});

app.post('/json', (req, res) => {
    console.log(req.body);
      res.send(req.body);
});

app.post('/contact', (req, res) => {
    console.log(req.body);
    res.send(req.body)
});


app.listen(3000, () => console.log('Server is running on 3000'));

