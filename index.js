const path = require('path');
var mysql = require("mysql");
var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

// app.use(express.static(__dirname + '/public'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//   });

  var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mydawson84",
    database: "sign_in_log",
    multipleStatements: true
});


db.connect((err) =>{
    if(!err){
        console.log("Connected to database");
    } else {
        console.log("Connection Failed");
        console.error(err);
    }
});


app.listen(port, function () {
    console.log('Example app listening on port', port);
});

//get all events from the events table in the database
events = app.get('/events', function(req, res){
  db.query('SELECT * FROM the_events', function(err, rows, fields){
      if(!err)
      res.send(rows);
      else
      console.log(err);
  })
});

//get an event from the events table in the database
app.get('/events/:id', function(req, res){
  db.query('SELECT * FROM the_events WHERE event_id = ?',[req.params.id], function(err, rows, fields){
      if(!err)
      res.send(rows);
      else
      console.log(err);
  })
});
