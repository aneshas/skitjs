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

        Object.keys(connections).forEach(function(provider) {
            console.log("Setting up " + provider + " connection...");

            connections[provider].connect(function(err, conn) {
                if(err) console.log(err);
                else
                    console.log(provider + " connection successfull.");
            });
        });

        /* Helper setup */
        /* Instantiate helpers */ 
        
        /* Model setup */
        /* Instantiate models and inject app */

        var FooModel = require("../../app/model/FooModel.js");
        FooModel.prototype.app = this;
        var fooModel = new FooModel();

        fooModel.bar();

        /* Controller setup */
        /* Instantiate controllers and inject app */

        /* Router setup */
        /* Instantiate router and inject controllers */

        // setup domains for controllers, models

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