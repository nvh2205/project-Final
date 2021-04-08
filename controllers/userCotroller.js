const express = require('express');
const fs = require('fs');

const users = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/users.json`)
)


exports.getAllUsers = (req,res)=>{
    res.status(200).json({
        status:"ok",
        data:users
    })
};



exports.getUser = (req,res)=>{
    console.log(req.params);
    
    const user =  users.data.find((e)=>e.id === req.params.id
    )

    res.status(200).json({
        status:"ok",
        data:user
    })
 
}


exports.createUser = (req,res)=>{
    const newId  = users.data[users.data.length-1].id*1 + 1;
    const newUser = Object.assign(
        {
            id:newId
        },
        req.body
    )
    users.data.push(newUser);
    fs.writeFile(`${__dirname}/../data/users.json`,JSON.stringify(users),()=>{
        res.status(201).json({
            status:"ok",
            message:"Create suceess",
            user:newUser
        })
    })
  
    console.log('newId ',newId)
    if(req.body){
        res.status(200).json({
            status:"ok",
            data:newUser
        })
    }
    else{
        res.status(404).send("error")
    }
}