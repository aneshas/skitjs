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
exports.mongo.connect = function(callback) {
    var self = this;

    callback(null, self.connection);
    /* setup connection and set connect object */
    self.connection = null;
};
