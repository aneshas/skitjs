var SkitApp = require("./lib/core/SkitApp.js");
var SetupRoutes = require("./app/config/routes.js");

var app = SkitApp();

app.run();

SetupRoutes(app);
