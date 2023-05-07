
const express = require ('express')
const user = require('../controller/user')

const router = express.Router()

router.route('/users')
.post(user.postData)
.get(user.getDate)

router.route('/users/:id')
.get(user.getUser)
.patch(user.updateUser)
.delete(user.deleteUser)

router.post('/login',user.login)

module.exports = router 
