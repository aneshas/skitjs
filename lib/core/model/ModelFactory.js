var fs = require('fs');

module.exports = function ModelFactory(app) {
    
    var cwd = process.cwd();
    var models = fs.readdirSync(cwd + "/app/model");

    for(var i in models) {
        file = models[i];

        if(file === "AppModel.js") continue;

        var Model = require(cwd + "/app/model/" + file);
        var modelName = file.slice(0, -3);

        Model.prototype.app = app;

        app.models[modelName]= new Model();
    }

};
