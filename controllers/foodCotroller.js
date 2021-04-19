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





// exports.patchFood = (req,res)=>{
//     const currentId  = foods.data[foods.data.length-1].id*1;
//     const newFood = Object.assign(
//         {
//             id:currentId
//         },
//         req.body
//     )
//     foods.data.data[0].listStyle.map((item)=>{
//         if(item.data.listStyle)
//     })
//     foods.data.push(newFood);
//     fs.writeFile(`${__dirname}/../data/foods.json`,JSON.stringify(foods),()=>{
//         res.status(201).json({
//             status:"ok",
//             message:"Create suceess",
//             food:newFood
//         })
//     })
  
//     console.log('newId ',newId)
//     if(req.body){
//         res.status(200).json({
//             status:"ok",
//             data:"created food"
//         })
//     }
//     else{
//         res.status(404).send("error")
//     }
// }










//Get các title kiểu món
exports.getChildFood = (req,res)=>{
    console.log(req.params);
    
    const food =  foods.data.find((e)=>e.id === req.params.id)
    const food2 = food.listStyle.find((e)=>e.id === req.params.id2)


    res.status(200).json({
        status:"ok",
        data:food2
    })
 
}

//Truy cập các món trong cái menu
exports.getMenu = (req,res)=>{
    console.log(req.params);
    
    const food =  foods.data.find((e)=>e.id === req.params.id)
    const food2 = food.listStyle.find((e)=>e.id === req.params.id2)
    const food3 = food2.menu.find((e)=>e.id === req.params.id3)


    res.status(200).json({
        status:"ok",
        data:food3
    })
 
}


//Thêm vào menu
exports.createFood = (req,res)=>{

    const food =  foods.data.find((e)=>e.id === req.params.id)
    const food2 = food.listStyle.find((e)=>e.id === req.params.id2)


    const newId  = food2.menu[food2.menu.length-1].id*1 + 1;
    const newFood = Object.assign(
        {
            id:`${newId}`
        },
        req.body
    )
    food2.menu.push(newFood);
    fs.writeFile(`${__dirname}/../data/foods.json`,JSON.stringify(foods),()=>{
        res.status(201).json({
            status:"ok",
            message:"Create suceess",
            food2:newFood
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

//Thêm 1 kiểu mới
exports.createStyle = (req,res)=>{

    const food =  foods.data.find((e)=>e.id === req.params.id)
    


    const newId  = food.listStyle[food.listStyle.length-1].id*1 + 1;
    const newFood = Object.assign(
        {
            id:`${newId}`
        },
        req.body
    )


    food.listStyle.push(newFood);
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



//Put menu
exports.updateMenu = (req,res)=>{

    const food =  foods.data.find((e)=>e.id === req.params.id)
    const food2 = food.listStyle.find((e)=>e.id === req.params.id2)
    const food3 = food2.menu.find((e)=>e.id === req.params.id3)




   
    const newFood = Object.assign(
        {
            id:food3.id
        },
        req.body
    )


 food2.menu.map((items,index)=>{

        if(items.id===req.params.id3){
            food2.menu[index]=newFood;
        }
    })


    
    fs.writeFile(`${__dirname}/../data/foods.json`,JSON.stringify(foods),()=>{
        res.status(201).json({
            status:"ok",
            message:"Update suceess",
            food2:newFood
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



//Patch menu
exports.updatePatchMenu = (req,res)=>{

    const food =  foods.data.find((e)=>e.id === req.params.id)
    const food2 = food.listStyle.find((e)=>e.id === req.params.id2)
    const food3 = food2.menu.find((e)=>e.id === req.params.id3)




   
    const newFood = Object.assign(
        {
            id:food3.id
        },
        req.body
    )


    const property=[];
    for(let propertyE in newFood){
        for(let index in food3){
            if(index===propertyE){
                property.push(propertyE);
            }
        }
    }

    let count=0;
    for(let propertyE in newFood){
        count++;
    }

    if(count===property.length){

        
        for(let propertyE in newFood){
            for(let index in food3){
                if(index===propertyE){
                    food3[index]=newFood[propertyE];
                }
            }
        }
    
    
        
        fs.writeFile(`${__dirname}/../data/foods.json`,JSON.stringify(foods),()=>{
            res.status(201).json({
                status:"ok",
                message:"Update suceess",
                food3:newFood
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


//Patch kiểu đồ ăn 
exports.updatePatchStyle = (req,res)=>{

    const food =  foods.data.find((e)=>e.id === req.params.id)
    const food2 = food.listStyle.find((e)=>e.id === req.params.id2)
    




   
    const newFood = Object.assign(
        {
            id:food2.id
        },
        req.body
    )


    const property=[];
    for(let propertyE in newFood){
        for(let index in food2){
            if(index===propertyE){
                property.push(propertyE);
            }
        }
    }

    let count=0;
    for(let propertyE in newFood){
        count++;
    }

    if(count===property.length){

        
        for(let propertyE in newFood){
            for(let index in food2){
                if(index===propertyE){
                    food2[index]=newFood[propertyE];
                }
            }
        }
    
    
        
        fs.writeFile(`${__dirname}/../data/foods.json`,JSON.stringify(foods),()=>{
            res.status(201).json({
                status:"ok",
                message:"Update suceess",
                food2:newFood
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


//Delete Menu
exports.deleteMenu = (req,res)=>{

    const food =  foods.data.find((e)=>e.id === req.params.id)
    const food2 = food.listStyle.find((e)=>e.id === req.params.id2)
    const food3 = food2.menu.find((e)=>e.id === req.params.id3)


    food2.menu.map((items,index)=>{

        if(items.id===req.params.id3){
            for(let i=index;i<food2.menu.length;i++){
                let idNew= food2.menu[i].id * 1 -1;
                food2.menu[i].id=`${idNew}`;
            }
            food2.menu.splice(index,1);
        }
    })


    
    fs.writeFile(`${__dirname}/../data/foods.json`,JSON.stringify(foods),()=>{
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


//Delete stlyle kiểu đồ ăn và market
exports.deleteStyle = (req,res)=>{

    const food =  foods.data.find((e)=>e.id === req.params.id)
    const food2 = food.listStyle.find((e)=>e.id === req.params.id2)
    


    food.listStyle.map((items,index)=>{

        if(items.id===req.params.id2){
            for(let i=index;i<food.listStyle.length;i++){
                let idNew= food.listStyle[i].id * 1 -1;
                food.listStyle[i].id=`${idNew}`;
            }
            food.listStyle.splice(index,1);
        }
    })


    
    fs.writeFile(`${__dirname}/../data/foods.json`,JSON.stringify(foods),()=>{
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