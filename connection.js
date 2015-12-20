var mysql = require('mysql');
 
var connection = mysql.createConnection
(
	{
 		host: 'localhost',
		user: 'root',
		password :'nidhi123',
		database : 'db',
	}
)
var log = 
{
	username : "charmy123",
	pass : "hello"
}
connection.query('INSERT INTO login SET ?', log, function(err,res)
{
  	if(err) throw err;
 	console.log('Last insert ID:', res.insertId);
}
);