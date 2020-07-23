const mongoose = require('mongoose')
const Schema = mongoose.Schema

const complaintSchema = new Schema({
	subject:  {
		type : String 
	},

	query: {
		type : String
	},

	priority : {
		enum : ['high','low','normal'], 
	},

	responsible_person : {
		type : String
	},

	status:{
		enum : ['open','Inprogress','resolve'],
	}
}, {timestamps: true })
