//npm uuid module used 
const fs = require("fs");
const db = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        res.json(db);
    })

    app.post("/api/notes", (req, res) => {

        const notePayload = req.body;

        const acceptedKeys = [{
            key: "title",
        }, "text"]

        for (const {
            key,
            type
        } of acceptedKeys) {
            
            if (notePayload[key] === null) {

                res.status(400).json({
                    error: `Please provide a ${key} create a note.`
                })

                return;
            }
        }
        const {
            title,
            text
        } = notePayload

        const newNote = {
            "id": uuidv4(),
            "title": title,
            "text": text
        }
        db.push(newNote);

        fs.writeFile("./db/db.json", JSON.stringify(db), "utf8", (err, data) => {

            if (err) throw err;
            res.status(200).send("new note added");
            res.json(data);
        })
    })

    app.delete(`/api/notes/:id`, (req, res) => {

        const userId = req.params.id;

        for (i=0; i<db.length; i++) {

            if (db[i].id === userId) {

                 db.splice(i, 1);
                 break;
            } 
        }
        fs.writeFile("./db/db.json", JSON.stringify(db), "utf8", (err, data) => {

            if (err) throw err;
            res.status(200).send("new note deleted.");
            res.json(data);
        })
    })

};




