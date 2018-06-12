let measurements = require("./measurements.js");

module.exports = function (app) {
    app.get('/', function (req, res) {
        measurements.index(req, res);
    });
    app.post('/measurements', function (req, res) {
        measurements.create(req, res);
    });
};