const foodController = require('../controllers/foodCotroller')

const express = require('express');
const route = express.Router()
route.route('/').get(foodController.getAllFoods)
route.route('/:id').get(foodController.getFood)
route.route('/:id/:id2').get(foodController.getChildFood)

route.route('/:id/:id2/:id3').get(foodController.getMenu)

//Thêm món mơi
route.route('/:id/:id2').get(foodController.getChildFood).post(foodController.createFood)

//Thêm kiểu mới
route.route('/:id').get(foodController.getFood).post(foodController.createStyle)


//update món
route.route('/:id/:id2/:id3').get(foodController.getMenu).put(foodController.updateMenu)
route.route('/:id/:id2/:id3').get(foodController.getMenu).patch(foodController.updatePatchMenu)

//update style
route.route('/:id/:id2').get(foodController.getChildFood).patch(foodController.updatePatchStyle)


//delete menu
route.route('/:id/:id2/:id3').get(foodController.getMenu).delete(foodController.deleteMenu)
//delete style
route.route('/:id/:id2').get(foodController.getChildFood).delete(foodController.deleteStyle)

module.exports = route;

