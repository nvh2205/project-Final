const userController = require('../controllers/userCotroller')

const express = require('express');
const route = express.Router()
route.route('/').get(userController.getAllUsers).post(userController.createUser)
route.route('/:id').get(userController.getUser)

module.exports = route;