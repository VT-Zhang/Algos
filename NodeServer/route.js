let measurements = require("/measurements.js");

module.exports = function (app) {
    app.post('/measurements', function (req, res) {
        measurements.create(req, res);
    })
};