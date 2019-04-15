const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')




router.post('/register', userController.newUser)

router.post('/login',userController.login)

router.get('/logout',userController.logout)

router.put('/update',userController.updatePassword)



module.exports = router;