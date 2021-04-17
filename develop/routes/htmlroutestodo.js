const path = require("path");
const router = require('express').Router()


// GET /notes - return the notes.html file
router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})


// GET * - return the index.html file
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router
