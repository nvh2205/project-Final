const foodController = require('../controllers/foodCotroller')

const express = require('express');
const route = express.Router()
route.route('/').get(foodController.getAllFoods).post(foodController.createFood)
route.route('/:id').get(foodController.getFood)
route.route('/:id/:id2').get(foodController.getChildFood)



module.exports = route;

