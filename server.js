const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Set up the basic properties for our express server

// Create an express server in node
const app = express();

// Initialize a port
const PORT = process.env.PORT || 8080;

// Initialize Express to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs

// require("./routes/htmlRoutes")(app);
// require("./routes/apiRoutes")(app);
app.use("/", apiRoutes);
app.use("/", htmlRoutes);
// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});
DEPENDANCIES
