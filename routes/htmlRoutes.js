// const router = require("express").Router();
// const path = require("path");

// router.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/notes.html"));
// });

// // If no matching route is found default to home
// router.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// module.exports = router;

const path = require("path");
const router = require("express").Router();

//GET /notes - Should return the notes.html file.
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//GET * - Should return the index.html file
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
