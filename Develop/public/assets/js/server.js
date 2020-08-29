// creating the server here
const express = require('express');
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./apiRoutes')(app);


app.listen(PORT, function () {
    console.log(`App listening on PORT:${PORT}`);
  });
 
  
  /*
  var path = require("path");

module.exports = function(app) {
    
    app.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
  
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  };
  */