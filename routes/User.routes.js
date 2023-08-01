const express = require('express')
const router = express.Router()
const {signup, getUsers} = require('../controlers/User.controlers')


router.get('/', getUsers)
router.post('/', signup)

module.exports = router