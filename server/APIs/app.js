const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const http = require('http');
// const machine = require('models/machine.model.js');

var app = express();

const server = http.createServer(app);
const io = require('socket.io')(server);
// var io = require("socket.io")(http, {
// 	cors: {
// 		origin: '*',
// 	}
// });

const Machine = require('../APIs/models/machine.model');

// const dotenv = require('dotenv');


io.on('connection', (socket) => {
    var data;

    setInterval(function(){
		// create a new user
		const resp = Machine.all(data, function(err,result){
			// console.log('result');
			//console.log(err);
	
			
			// if(resp === 2){
			// 	console.log("Error");
			// }else{
				socket.emit('machines', result);
			// }
	
		});
	}, 1000);
})



// Enables CORS
const cors = require('cors');
app.use(cors({ origin: true }));

//Configuring express server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // connection configurations
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: dotenv.config().parsed.DB_USER,
//     password: dotenv.config().parsed.DB_PASSWORD,
//     database: 'analysis_tool'
// });


// import routes
authRoute = require('./routes/auth.js');
machineRoute = require('./routes/machine.js');
moldRoute = require('./routes/mold.js');
initRoute = require('./routes/init.js');

// route middleware
app.use('/api/users', authRoute);
app.use('/api/init', initRoute);
app.use('/api/machines',machineRoute);
app.use('/api/molds',moldRoute);

	
// // Delete all entries 
// app.get("/api/del" , (req,res)=>{
// 	const sqlmachines = "delete from machines;"
// 	db.query(sqlmachines,(err,result)=>{
// 		res.send(result);
// 	})
	
// 	const sqlmolds = "delete from molds;"
// 	db.query(sqlmolds,(err,result)=>{
// 		res.send(result);
// 	})
// });


// //get selected machine details
// app.route("/api/machines/:machine_id")
// 	.post((req,res)=>{
// 		// var jsonstr = json.stringify(req.body);

// 		var machineID = req.body.machineID;
// 		var failedShots = req.body.failedShots;

// 		const updateMoldShots = "UPDATE machines SET moldShots = moldShots + 1 WHERE machineID = ? ;"
// 		db.query(updateMoldShots,[machineID],(err,result)=>{
// 			if(err)throw err;
// 			res.send(result);
// 			console.log(result);
// 			console.log("update");
// 		})

// 		if(failedShots==1){
// 			const updateFailedShots = "UPDATE machines SET failedShots = failedShots + 1 WHERE machineID = ? ;"
// 			db.query(updateFailedShots,[machineID],(err,result)=>{
// 				if(err)throw err;
// 				// res.send(result);
// 				console.log(result);
// 				console.log("update");
// 			})
// 		}
// 	});

// start the server and connect to the database in it
// server.listen(dotenv.config().parsed.SERVER_PORT, async () => {
server.listen(3001, async () => {
    console.log('Server started on port 3001');
});
