var mongoose = require('mongoose');

const mlabURI = 'mongodb+srv://admin:admin@cluster0-fuc03.gcp.mongodb.net/Database?retryWrites=true&w=majority' 
const connection = mongoose.connect(mlabURI,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, }, (error) => {
	if (error) {
		console.log("Error " + error);
	} else {
		console.log("Connected successfully to mongodb server")
	}
});
mongoose.Promise = global.Promise;

module.exports = connection;