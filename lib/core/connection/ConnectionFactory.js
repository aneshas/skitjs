module.exports = function ConnectionFactory(app) {

    var connections = app.connections;

    Object.keys(connections).forEach(function(provider) {
        console.log("Setting up " + provider + " connection...");

        connections[provider].connect(function(err, conn) {
            if(err) console.log(err);
            else
                console.log(provider + " connection successfull.");
        });
    });

};
