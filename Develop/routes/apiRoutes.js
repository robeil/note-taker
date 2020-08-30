// creating aoiroutes
const fs = require('fs');
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
var path = require('path');
const bodyParser = require('body-parser');



module.exports = function (app) {

    //app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/notes', function(req, res) {
        console.log("----", db)
        res.send(db);
        console.log("db is listeing")  // ???
      });

      app.post('/api/notes', function(req, res){

        const note = req.body;
 
       //console.log("post is listenning") // ???

       /* const givenKey = [{
     // need to make a change for this key in the json file npm init
            key: 'keen', // 'title'
            // type: 'string'
        }, 'text']

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
*/
        const {
            title,
            text
        } = note

        const newNote = {
            id: uuidv4(), 
            title,
            text
        }
        db.push(newNote)

        // TODO - USE FS TO WRITE NEW DB ARRAY INTO 'db.json'
        fs.writeFile('./db/db.json', JSON.stringify(db), 'utf8', function(err, data){
            if (err) throw err;
            res.send("done");
        })


    })


};


/*
    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
      });
    
      app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

*/