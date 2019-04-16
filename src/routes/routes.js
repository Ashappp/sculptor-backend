const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const goalController = require('../controllers/goalController');
const taskController = require('../controllers/taskController');



router.post('/register', userController.newUser)

router.post('/login',userController.login)

router.get('/logout',userController.logout)

router.put('/update',userController.updatePassword)

//Goal routers

router.post('/goal', goalController.createNewGoal)

router.get('/goals',goalController.getAllGoalsByUserId)

router.delete('/goals',goalController.deleteGoal);

router.put('/goals',goalController.updateGoal);

//Tasks routers

router.post('/task',taskController.addTask);

router.put('/task',taskController.updateTask);





module.exports = router;