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
    
    const user =  users.data.find((e)=>e.id === req.params.id)

    res.status(200).json({
        status:"ok get user",
        data:user
    })
 
}



exports.createUser = (req,res)=>{
    const newId  = users.data[users.data.length-1].id*1 + 1;
    const newUser = Object.assign(
        {
            id:`${newId}`
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


//put user
exports.updateUser = (req,res)=>{

    const user1 =  users.data.find((e)=>e.id === req.params.id)


    const newUser = Object.assign(
        {
            id:user1.id
        },
        req.body
    )


    users.data.map((items,index)=>{

        if(items.id===req.params.id){
            users.data[index]=newUser;
        }
    })


    
    fs.writeFile(`${__dirname}/../data/users.json`,JSON.stringify(users),()=>{
        res.status(201).json({
            status:"ok",
            message:"Update suceess",
            users:newUser
        })
    })
  
  
    if(req.body){
        res.status(200).json({
            status:"ok",
            data:'Success'
        })
    }
    else{
        res.status(404).send("error")
    }
}

//patch user
exports.updatePatchUser = (req,res)=>{

    const user1 =  users.data.find((e)=>e.id === req.params.id)


    const newUser = Object.assign(
        {
            id:user1.id
        },
        req.body
    )

    const property=[];
    for(let propertyE in newUser){
        for(let index in user1){
            if(index===propertyE){
                property.push(propertyE);
            }
        }
    }

    let count=0;
    for(let propertyE in newUser){
        count++;
    }

    if(count===property.length){

        
        for(let propertyE in newUser){
            for(let index in user1){
                if(index===propertyE){
                    user1[index]=newUser[propertyE];
                }
            }
        }
    
    
        
        fs.writeFile(`${__dirname}/../data/users.json`,JSON.stringify(users),()=>{
            res.status(201).json({
                status:"ok",
                message:"Update suceess",
                user1:newUser
            })
        })
      
      
        if(req.body){
            res.status(200).json({
                status:"ok",
                data:'success'
            })
        }
        else{
            res.status(404).send("error")
        }
    }
    else{
        res.status(404).send("error");
    }

 
}

//delete User
exports.deleteUser = (req,res)=>{

    const user1 =  users.data.find((e)=>e.id === req.params.id)
    
    


    users.data.map((items,index)=>{

        if(items.id===req.params.id){
            for(let i=index;i<users.data.length;i++){
                let idNew= users.data[i].id * 1 -1;
                users.data[i].id=`${idNew}`;
            }
            users.data.splice(index,1);
        }
    })


    
    fs.writeFile(`${__dirname}/../data/users.json`,JSON.stringify(users),()=>{
        res.status(201).json({
            status:"ok",
            message:"Delete suceess",
           
        })
    })
  
  
    if(req.body){
        res.status(200).json({
            status:"ok",
            data:"Success"
        })
    }
    else{
        res.status(404).send("error")
    }
}