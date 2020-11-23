let express = require('express');

let app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get('/', (req, res) => {
     res.sendFile(__dirname + '/newform.html')
});
 

app.post('/user',(req, res) => {
     res.json(req.body)
});


app.listen(3000, () => {
     console.log('running on server 3000')
})