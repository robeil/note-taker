// creating the server here
const express = require('express');
const fs = require('fs');
const apiRoutes = require('./apiRoutes');
const htmlroutes = require('./htmlroutes');

const router = express.Router();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', apiRoutes, htmlroutes); // ????///////////


require('./apiRoutes')(app);
require('./htmlroutes')(app);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}/`);
  });
  
