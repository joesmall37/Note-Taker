const express = require("express");
const apiroutes = require("./routes/apiRoutes");
const htmlroutes = require("./routes/htmlRoutes");

const app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiroutes);
app.use("/", htmlroutes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
