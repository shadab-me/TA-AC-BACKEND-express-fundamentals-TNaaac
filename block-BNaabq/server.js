let express = require('express');
let cookieParser = require('cookie-parser')


let app = express();


app.use(cookieParser())


app.get('/', (req, res) => {
let count  = req.cookies.count;

if(count){
    count = Number(count) + 1
    res.cookie("count", count);

}else{
res.cookie("count", 1);
console.log(count)
}
res.send(`${count}`)

})


app.listen(4000, () => {
    console.log('Server is running on port number 4000')
})


