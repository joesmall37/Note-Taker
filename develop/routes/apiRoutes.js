const router = require("express").Router();
const noteTakerDB = require("../db/db.json");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const uuid = require("uuid");

var stringDB = JSON.stringify(noteTakerDB);

router.get("/api/notes", function (req, res) {
    fs.readFile(
        path.join(__dirname, "../db/db.json"),
        "utf8",
        function (err, data) {
            if (err) {
                return console.log(err);
            }

            console.log("hello");
            console.log(data);

            var notes = JSON.parse(data);

            res.json(notes);
        }
    );
});
router.post("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        const newNote = req.body;
        newNote.id = uuid.v4();
        notes.push(newNote);

        const createNote = JSON.stringify(notes);
        fs.writeFile(path.join(__dirname, "../db/db.json"), createNote, (err) => {
            if (err) throw err;
        });
        res.json(newNote);
    });
});
router.delete("/api/notes/:id", function (req, res) {
    fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);

        //
        var id = req.params.id;
        notes = notes.filter((item) => item.id !== id);

        const createNote = JSON.stringify(notes);
        fs.writeFile(path.join(__dirname, "../db/db.json"), createNote, (err) => {
            if (err) throw err;
        });
        res.json(notes);
    });
});

console.log(noteTakerDB);

module.exports = router;
