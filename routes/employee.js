const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController')

router.get('/',EmployeeController.index)
router.post('/show', EmployeeController.show)
router.post('/store', EmployeeController.store)

module.exports = router 
