let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('Welcome to express');
})



app.listen(3000, () => {
    console.log('Ruining of Port 3000')
})