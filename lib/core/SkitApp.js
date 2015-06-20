var fs = require("fs");
var bs = require("../../app/config/bootstrap.js");

function SkitApp() {

    var connections = require("../../app/config/connections.js");
    var self = this;

    this.config = require("../../app/config/core.js");
    this.models = {};
    this.controllers = {};
    this.helpers = {};

    this.connections = connections;

    function bootstrap() {
        Object.keys(bs).forEach(function(module) {
            this[module] = bs[module];
        });
    }

    function preRun() {
        
        /* Connect to datasources */
        /* Move this section to lib/core/connections/core.js */
        var ConnectionFactory = require("./connection/ConnectionFactory.js");
        ConnectionFactory(self);

        /* Helper setup */
        /* Instantiate helpers */ 



        /* Model setup */
        /* Instantiate models and inject app */
        var ModelFactory = require("./model/ModelFactory.js");
        ModelFactory(self);

        /* Controller setup */
        /* Instantiate controllers and inject app */
        var ControllerFactory = require("./Controller/ControllerFactory.js");
        ControllerFactory(self);

    }

    function run() {
        bootstrap();
        preRun();
    }

    var public = {
        run: run
    };

    return public;

} 

module.exports = SkitApp;
