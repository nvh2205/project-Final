const express = require('express');
const app = express();
const foodRoute = require('./routes/foodRoute')
const cors = require('cors')

app.use(cors())
app.use(express.json());
const userRoute = require('./routes/userRoute')

app.get('/',function(req, res){
    var duongdanFile=path.join(__dirname,'../client/freshFood/index.html');
    req.sendfile(duongdanFile)
})

app.get('/home',function(req, res){
    res.json('HOME')
})

app.use('/api/v1/foods',foodRoute)
app.use('/api/v1/users',userRoute)
module.exports = app;