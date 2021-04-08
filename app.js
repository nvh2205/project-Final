const express = require('express');
const app = express();
const foodRoute = require('./routes/foodRoute')
const cors = require('cors')

app.use(cors())
app.use(express.json());
const userRoute = require('./routes/userRoute')


app.use('/api/v1/foods',foodRoute)
app.use('/api/v1/users',userRoute)
module.exports = app;