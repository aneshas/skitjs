var fs = require('fs');

module.exports = function HelperFactory(app) {

    var cwd = process.cwd();
    var helpers = fs.readdirSync(cwd + "/app/helper");

    for(var i in helpers) {
        file = helpers[i];

        if(file === "AppHelper.js") continue;

        var helper = require(cwd + "/app/helper/" + file);
        var helperName = file.slice(0, -3);

        app.helpers[helperName] = Object.create(helper);
    }

};
