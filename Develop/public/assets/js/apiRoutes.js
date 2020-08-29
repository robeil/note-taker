// creating aoiroutes
const fs = require('fs');
const db = require('db');
const { v4: uuidv4 } = require('uuid');
var path = require("path");

module.exports = function (app) {

    app.get('/api/notes', function(req, res) {

        res.send(db);
      });

      app.post('/api/notes', function(req, res){

        const note = req.body;

        const givenKey = [{
            key: "title",
            // type: "string"
        }, "text"]

        for (const {
            key,
            type
        } of givenKey) {
            if (note[key] === null) {
                // || typeof notePayload[key] !== type
                res.status(400).json({
                    error: `Please provide a ${key} create a note.`
                })

                return;
            }
        }
        const {
            title,
            text
        } = note

        const newNote = {
            id: uuidv4(), 
            title,
            text
        }

        // TODO - USE FS TO WRITE NEW DB ARRAY INTO 'db.json'
        fs.appendFile("db.json", newNote, "utf8", function(err, data){
            if (err) throw err;
            res.send(JSON.parse(data));
        })


    })


    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
      });
    
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
      


};
