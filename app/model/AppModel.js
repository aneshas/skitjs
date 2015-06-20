var Model = require("../../lib/core/model/Model.js");

module.exports = function AppModel() {
    var model = new Model();

    model.class = "AppModel";

    return model;
};
