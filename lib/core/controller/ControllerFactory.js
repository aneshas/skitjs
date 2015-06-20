var fs = require('fs');

module.exports = function ControllerFactory(app) {

    var cwd = process.cwd();
    var controllers = fs.readdirSync(cwd + "/app/controller");

    for(var i in controllers) {
        file = controllers[i];

        if(file === "AppController.js") continue;

        var Controller = require(cwd + "/app/controller/" + file);
        var controllerName = file.slice(0, -3);

        Controller.prototype.app = app;

        app.controllers[controllerName] = new Controller();
    }

};
