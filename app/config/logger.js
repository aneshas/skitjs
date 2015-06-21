var logger = require("winston");

logger.add(logger.transports.File, { filename: './var/skit.log' });

exports = module.exports = {};

var defaults = {
    timestamp: null,
    pid: process.pid,
};

function uTime() {
    defaults.timestamp = Date.now();
}

exports.log = function(message, extra) {
    logger.info(message, defaults);
};

exports.info = function(message, extra) {
    uTime();

    if(extra) {
        Object.keys(extra).forEach(function(key) {
            defaults[key] = extra[key];
        });
    }

    logger.info(message, defaults);
};

exports.warn = function(message) {
    logger.warn(message, defaults);
};

exports.error = function(message) {
    logger.warn(message, defaults);
};
