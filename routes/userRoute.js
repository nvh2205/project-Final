const userController = require('../controllers/userCotroller')

const express = require('express');
const route = express.Router()
route.route('/').get(userController.getAllUsers).post(userController.createUser)
route.route('/:id').get(userController.getUser)

//putUser
route.route('/:id').get(userController.getUser).put(userController.updateUser)

//patchUser
route.route('/:id').get(userController.getUser).patch(userController.updatePatchUser)


//deleteUser
route.route('/:id').get(userController.getUser).delete(userController.deleteUser)
module.exports = route;