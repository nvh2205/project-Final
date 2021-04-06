const express = require('express');
const fs = require('fs');

const app = express();


// Request body from client
app.use(express.json());

//Read data from json file (db.json)
const foods = JSON.parse(
    fs.readFileSync(`${__dirname}/db.json`)
)





//Function
const getAllFoods = (req,res)=>{
    res.status(200).json({
        status:"ok",
        data:foods
    })
};



//GET ALL FOOLDS
app.get('/api/v1/getAllFoods',getAllFoods)
//FIND A FOOD BY ID
app.get('/api/v1/getAllFoods/:id/:x?',(req,res)=>{
   console.log(req.params);
   
   const food =  foods.data.find((e)=>e.id === req.params.id*1
   )
   res.status(200).json({
       status:"ok",
       data:food
   })

})




//POST (create new food)
app.post('/api/v1/createFood',(req,res)=>{
    console.log(req.body);
    if(req.body){
        res.status(200).json({
            status:"ok",
            data:"created food"
        })
    }
    else{
        res.status(404).send("erro")
    }
})



const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`server is runing port ${port}...`)
})