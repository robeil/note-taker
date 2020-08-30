// creating the server here
const express = require('express');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const htmlroutes = require('./routes/htmlroutes');
//const bodyParser = require('body-parser');

//const router = express.Router();

const app = express();
const PORT = process.env.PORT || 3000;
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//app.use('/', apiRoutes, htmlroutes); // ????///////////


require('./routes/apiRoutes')(app);
require('./routes/htmlroutes')(app);

app.listen(PORT, () => {
    console.log(`App listening at PORT:${PORT}`);
  });
  
