let express = require('express');
let morgan = require('morgan');
let cookieParser = require('cookie-parser')

let app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan({}));
app.use(cookieParser());


app.get('/', (req, res) => {
    let count = req.cookies.count;
    if(count){
        count = Number(count)+1
        res.cookie("count", count);
    }else{
        res.cookie("count", 1);

    }
    res.send(`<h2>Welcome to express </h2>`)
});

app.get('/about', (req, res) => {
    res.send('My name is qwerty')
});

app.get('/users/:username', (req, res) => {
    console.log(req.body);
    res.send('Heyyeye')
})

app.post('/form', (req, res) => {
     res.send(req.body)
});

app.post('/json', (req, res) => {
    res.send(req.body.name)
})

app.get('/*', (req, res) => {
    res.send('Page Not Found')
})

app.listen(3000, () => {
    console.log('running on port 3k')
})