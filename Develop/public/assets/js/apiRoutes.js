// creating aoiroutes
const fs = require("fs");
const db = require("../db/db.json");

module.exports = function (app) {


    app.get('/tables', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/tables.html'));
      });
    




};
