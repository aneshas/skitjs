var SkitApp = require("./lib/core/SkitApp.js");
var Routes = require("./app/config/routes.js");
var logger = require("./app/config/logger.js");

var app = new SkitApp();

app.run();

app.logger.log("Configuring routes...");
Routes(app);
