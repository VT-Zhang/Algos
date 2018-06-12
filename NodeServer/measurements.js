let database = [
    {
        timestamp: "2015-09-01T16:00:00.000Z",
        temperature: 27.1,
        dewPoint: 16.7,
        precipitation: 0
    },
    {
        timestamp: "2015-09-01T16:10:00.000Z",
        temperature: 27.3,
        dewPoint: 16.9,
        precipitation: 0
    }
];

function measurementConstructor(timestamp, temperature, dewPoint, precipitation) {
    let obj = {};
    obj.timestamp = timestamp;
    obj.temperature = temperature;
    obj.dewPoint = dewPoint;
    obj.precipitation = precipitation;
    return obj;
}

function validateInput(obj) {
    let re = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    if (!obj.timestamp ||
        !re.test(obj.timestamp) ||
        obj.temperature !== parseFloat(obj.temperature) ||
        obj.dewPoint !== parseFloat(obj.dewPoint) ||
        obj.precipitation !== parseFloat(obj.precipitation)) {
        return false;
    }
    return true;
}


module.exports = {

    index: function(req, res) {
        return 'Weather tracker is up and running!\n';
    },

    showAll: function(req, res) {
        return res.status(200).send(database);
    },

    show: function(req, res) {
        let searchKey = req.params.date;
        database.forEach(function(item) {
            if(item.timestamp === searchKey) {
                return res.status(200).send(item);
            }
        });
        return res.sendStatus(404);
    },

    create: function(req, res) {
        console.log(req.body);
        if (!req.body) {
            return res.sendStatus(400);
        } else {
            let obj = measurementConstructor(res.body.timestamp, res.body.temperature, res.body.dewPoint, res.body.precipitation);
            if (validateInput(obj)) {
                database.push(obj);
                return res.sendStatus(201);
            } else {
                return res.sendStatus(400);
            }
        }
    },



};

// console.log(measurementConstructor("01-01-2018", 55, 35, 10));
// let obj = measurementConstructor("2012-10-06T04:13:00Z", 55.1, 35, 10);
// console.log(validateInput(obj));
