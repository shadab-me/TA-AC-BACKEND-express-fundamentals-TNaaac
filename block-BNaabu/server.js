let express = require('express');

let app = express();


app.get('/', (req, res) => {
   res.send('Welcome to nodeAPP')
   console.log('Welcome')
})
app.get('/home', (req, res) => {
   res.send('Home')
})
app.get('/about', (req, res) => {
   res.send('about')
})

app.get('/*', (req, res) => {
    res.status(404).send('Not Found')
});
app.listen(3000, () => {
   console.log('Server is running on port 3000')
})