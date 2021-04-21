// const express = require("express");
// const apiRoutes = require("./routes/apiRoutes.js");
// const htmlRoutes = require("./routes/htmlRoutes.js");

// // Set up the basic properties for our express server

// // Create an express server in node
// const app = express();

// // Initialize a port
// const PORT = process.env.PORT || 8080;

// // Initialize Express to handle data parsing
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// // ROUTER
// // The below points our server to a series of "route" files.
// // These routes give our server a "map" of how to respond when users visit or request data from various URLs

// // require("./routes/htmlRoutes")(app);
// // require("./routes/apiRoutes")(app);
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);
// // LISTENER
// // The below code effectively "starts" our server

// app.listen(PORT, () => {
//     console.log(`App listening on PORT: ${PORT}`);
// });


// Dependencies
// =============================================================
var express = require("express");
const apiroutes = require("./routes/apiroutes");
const htmlroutes = require("./routes/htmlroutes");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 4000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiroutes);
app.use("/", htmlroutes);
// Sets up the Express app to handle data parsing -MIDWARE


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
