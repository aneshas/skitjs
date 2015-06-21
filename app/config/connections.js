/*
 * skit connectins
 * @author Anes Hasicic
 */
var exports = module.exports = {};

/* Example mongo connection */
exports.mongo = {};

/* connection object (required) */
exports.mongo.connection = null;
/* connect function (required) */
exports.mongo.connect = function(app) {
    var self = this;
    var Promise = app.Promise;

    /* setup connection and set connect object */
    self.connection = null;

    return new Promise(function(resolve, reject) {
        resolve();
        // reject("err");
    });
};
/* disconnect function (required) */
exports.mongo.disconnect = function(app) {
    this.connection.close();

    // Return promise
};
