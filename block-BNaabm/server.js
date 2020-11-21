let express = require('express');

let app = express();
function logger(req,res, next){
    console.log(req.url, req.method)
    next();
}

app.use(logger);

app.get('/', (req, res) => {
    res.send('Welcome to express')
})

app.listen(4000, () => console.log('running on port 4000'));

