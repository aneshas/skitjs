var cwd = process.cwd();

module.exports = function ConnectionFactory(app) {

    var connections = app.connections;
    var logger = app.logger;
    
    Object.keys(connections).forEach(function(provider) {
        logger.info("Setting up " + provider + " connection...");

        function error(err) {
            logger.error("Error creating " + provider + " connection.");
            logger.error(err);
        }

        function success() {
            logger.info(provider + " connection successfull.");
        }

        connections[provider].connect(app)
            .then(success, error);
    });

};
