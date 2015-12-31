var express = require('express');
var app = express();
var http  = require('http');
var Measured = require('measured')

var activeUploads = new Measured.Counter();

http.createServer(function(req, res) 
{
  activeUploads.inc();
  req.on('end', function() 
  {
    activeUploads.dec();
  });
});


app.use(express.static('public'));

app.get('/index.htm', function (req, res) 
{
   res.sendFile( __dirname + "/" + "index.htm" );
}
)

app.get('/process_get', function (req, res)
 {

   // Prepare output in JSON format
   response = 

   {
       first_name:req.query.first_name,
       pass:req.query.pass
       
   };
   console.log(response);
   res.end(JSON.stringify(response));
  }
)

var server = app.listen(8081, function () 
{

  var host = server.address().address
  var port = server.address().port

  console.log("listening at http://%s:%s", host, port)

}
)



