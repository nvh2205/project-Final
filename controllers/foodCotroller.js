const express = require('express');
const fs = require('fs');


const foods = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/foods.json`)
)


exports.getAllFoods = (req,res)=>{
    res.status(200).json({
        status:"ok",
        data:foods
    })
};



exports.getFood = (req,res)=>{
    console.log(req.params);
    
    const food =  foods.data.find((e)=>e.id === req.params.id
    )
    res.status(200).json({
        status:"ok",
        data:food
    })
 
}


exports.createFood = (req,res)=>{
    const newId  = foods.data[foods.data.length-1].id*1 + 1;
    const newFood = Object.assign(
        {
            id:newId
        },
        req.body
    )
    foods.data.push(newFood);
    fs.writeFile(`${__dirname}/../data/foods.json`,JSON.stringify(foods),()=>{
        res.status(201).json({
            status:"ok",
            message:"Create suceess",
            food:newFood
        })
    })
  
    console.log('newId ',newId)
    if(req.body){
        res.status(200).json({
            status:"ok",
            data:"created food"
        })
    }
    else{
        res.status(404).send("error")
    }
}

exports.getChildFood = (req,res)=>{
    console.log(req.params);
    
    const food =  foods.data.find((e)=>e.id === req.params.id)
    const food2 = food.listStyle.find((e)=>e.id === req.params.id2)


    res.status(200).json({
        status:"ok",
        data:food2
    })
 
}