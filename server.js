// creating the server here
const express = require('express');
const fs = require('fs');
const apiRoutes = require('./Develop/routes/apiRoutes');
const htmlroutes = require('./Develop/routes/htmlroutes');

//const bodyParser = require('body-parser');
//const router = express.Router();

const app = express();
const PORT = process.env.PORT || 3000;

//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//app.use('/', apiRoutes, htmlroutes); // 
// adding to heroku later

require('./Develop/routes/apiRoutes')(app);
require('./Develop/routes/htmlroutes')(app);

app.listen(PORT, () => {
    console.log(`App listening at PORT:${PORT}`);
  });
  
