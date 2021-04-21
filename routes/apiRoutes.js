// const router = require('express').Router();
// const fs = require('fs');
// const path = require('path');
// let filePath = path.join(__dirname, "../../db/db.json");

// // GET /api/notes - db.json file returns all saved notes as JSON
// router.get('/', function (req, res) {
//     fs.readFile(filePath, 'utf8', function (err, db) {
//         if (err) throw err
//         db = JSON.parse(db)
//         res.json(db)
//     })
// });

// // POST /api/notes - receives a new note, saves, adds it to the db.json file
// router.post('/', function (req, res) {
//     var newEntry = req.body;

//     fs.readFile(filePath, 'utf8', function (err, db) {
//         if (err) throw err
//         db = JSON.parse(db)
//         newEntry.id = db.length > 0 ? db[db.length - 1].id + 1 : 1;

//         db.push(newEntry)

//         fs.writeFile(filePath, JSON.stringify(db),
//             err => {
//                 if (err) {
//                     res.json(err);
//                 } else {
//                     res.json(db);
//                 }
//             })
//     })
// });

// // DELETE /api/notes/:id - receives a query parameter containing the id of a note to delete
// router.delete('/:id', function (req, res) {
//     fs.readFile(filePath, 'utf8', function (err, db) {
//         if (err) throw err;
//         db = JSON.parse(db)

//         db = db.filter(post => post.id !== parseInt(req.params.id))

//         fs.writeFile(filePath, JSON.stringify(db),
//             err => {
//                 if (err) {
//                     res.json(err);
//                 } else {
//                     res.json(db);
//                 }
//             })
//     })
// });

// module.exports = router
const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');;
const filePath = path.join(__dirname, "../db/db.json");

//GET /api/notes - Should read the db.json file and return all saved notes as JSON.
router.get("/notes", function (req, res) {
    res.sendFile(filePath);
});

//POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
router.post("/notes", function (req, res) {
    const noteId = { ...req.body, id: uuidv4() };
    fs.readFile(filePath, "utf8", function (err, data) {
        if (err) throw err;
        const notes = JSON.parse(data);
        notes.push(noteId);

        fs.writeFile(filePath, JSON.stringify(notes), function (err) {
            if (err) throw err;
            res.json(true);
        });
    });
});

//DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. (UUID)
//In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
router.delete("/notes/:id", function (req, res) {
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        const savedNotes = notes.filter((item) => item.id !== req.params.id);
        fs.writeFile(
            filePath,
            JSON.stringify(savedNotes, null, 2),
            (err) => {
                if (err) throw err;
                res.send(req.body);
            }
        );
    });
});

module.exports = router;
