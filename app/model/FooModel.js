var AppModel = require("./AppModel.js");

function FooModel() {
    var model = new AppModel();

    var app = this.app;

    model.bar = function bar() {

        console.log("Hello from bar.");
        console.log(app.foo);

    };

    return model;
}

module.exports = FooModel;
