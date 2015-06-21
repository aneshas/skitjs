var cwd = process.cwd();
var fs = require("fs");
var bs = require(cwd + "/app/config/bootstrap.js");

function SkitApp() {

    var self = this;

    // TODO use Object.defineProperties
    this.config = {};
    this.connections = {};
    this.models = {};
    this.controllers = {};
    this.helpers = {};

    var public = {
        run: run
    };

    function bootstrap() {
        Object.keys(bs).forEach(function(module) {
            public[module] = self[module] = bs[module];
        });
    }

    function preRun() {
        
        self.config = require("../../app/config/core.js");
        self.connections = require("../../app/config/connections.js");

        /* Connect to datasources */
        /* Move this section to lib/core/connections/core.js */
        self.logger.log("Setting up connections...");
        var ConnectionFactory = require("./connection/ConnectionFactory.js");
        ConnectionFactory(self);

        /* Helper setup */
        /* Instantiate helpers */ 
        self.logger.log("Instantiating helpers...");
        var HelperFactory = require("./helper/HelperFactory.js");
        HelperFactory(self);

        /* Model setup */
        /* Instantiate models and inject app */
        self.logger.log("Instantiating models...");
        var ModelFactory = require("./model/ModelFactory.js");
        ModelFactory(self);

        /* Controller setup */
        /* Instantiate controllers and inject app */
        self.logger.log("Instantiating controllers...");
        var ControllerFactory = require("./Controller/ControllerFactory.js");
        ControllerFactory(self);

    }

    function run() {
        bootstrap();
        self.logger.log("Creating skit app...");
        preRun();
    }

    return public;

} 

module.exports = SkitApp;
