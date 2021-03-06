const Employee = require('../models/Employee')

//show the list of employee
const index = (req, res, next) => {
	Employee.find()
	.then(response => {
		res.json({
			response
		})
	})
	.catch(error => {
		res.json({
			message: 'An error occured!'
		})
	})
}

const show = (req, res, next) => {
	let employeeID = req.body.employeeID
	Employee.findById(employeeID)
	.then(response => {
		res.json({
			response
		})
	})

	.catch(error => {
		res.json({
			message: 'An error occured!'
		})
	})
}

const store = (req, res, next) => {
	let employee = new Employee({
		name: req.body.name,
		designation : req.body.designation,
		email : req.body.email,
		phone : req.body.phone,
		age : req.body.age,
	})

	employee.save()

	.then(response => {
		res.json({
			message: 'Employee added successfully!'
		})
	})

	.catch(error => {
		res.json({
			message: 'An error occured!'
		})
	})
}

module.exports = {
	index,show,store
}