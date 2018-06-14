let measurements = require("./measurements.js");

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('Weather tracker is up and running!\n');
    });
    app.get('/measurements', function(req, res) {
        measurements.showAll(req, res);
    });
    app.get('/measurements/:date', function(req, res) {
        measurements.show(req, res);
    });
    app.post('/measurements', function (req, res) {
        measurements.create(req, res);
    });
    app.put('/measurements/:date', function(req, res) {
        measurements.update(req, res);
    });
    app.patch('/measurements/:date', function(req, res) {
        measurements.patch(req, res);
    });
    app.delete('/measurements/:date', function(req, res) {
        measurements.destroy(req, res);
    });
    app.get('/stats', function(req, res) {
        measurements.stats(req, res);
    });
};