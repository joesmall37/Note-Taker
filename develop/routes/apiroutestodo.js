
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
let filePath = path.join(__dirname, "../../db/db.json");



// GET /api/notes - db.json file returns all saved notes as JSON
router.get('/', function (req, res) {
    fs.readFile(filePath, 'utf8', function (err, db) {
        if (err) throw err;
        db = JSON.parse(db)
        res.json(db)
    })
});


// POST /api/notes - receives a new note, saves, adds it to the db.json file
router.post('/', function (req, res) {
    var newEntry = req.body;

    fs.readFile(filePath, 'utf8', function (err, db) {
        if (err) throw err;
        db = JSON.parse(db)
        newEntry.id = db.length > 0 ? db[db.length - 1].id + 1 : 1;

        db.push(newEntry)

        fs.writeFile(filePath, JSON.stringify(db),
            err => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(db);
                }
            })
    })
});


// DELETE /api/notes/:id - receives a query parameter containing the id of a note to delete
router.delete('/:id', function (req, res) {
    fs.readFile(filePath, 'utf8', function (err, db) {
        if (err) throw err;
        db = JSON.parse(db)

        db = db.filter(post => post.id !== parseInt(req.params.id))

        fs.writeFile(filePath, JSON.stringify(db),
            err => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(db);
                }
            })
    })
});

module.exports = router
