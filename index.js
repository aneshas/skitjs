var SkitApp = require("./lib/core/SkitApp.js");
var SetupRoutes = require("./app/config/routes.js");

var app = new SkitApp();

app.run();

SetupRoutes(app);
