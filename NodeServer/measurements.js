// let database = [
//     {
//         timestamp: "2015-09-01T16:00:00.000Z",
//         temperature: 27.1,
//         dewPoint: 16.7,
//         precipitation: 0
//     },
//     {
//         timestamp: "2015-09-01T16:10:00.000Z",
//         temperature: 27.3,
//         dewPoint: 16.9,
//         precipitation: 0
//     },
//     {
//         timestamp: "2015-09-01T16:20:00.000Z",
//         temperature: 27.5,
//         dewPoint: 17.1,
//         precipitation: 0
//     },
//     {
//         timestamp: "2015-09-01T16:30:00.000Z",
//         temperature: 27.4,
//         dewPoint: 17.3,
//         precipitation: 0
//     },
//     {
//         timestamp: "2015-09-01T16:40:00.000Z",
//         temperature: 27.2,
//         dewPoint: 18.3,
//         precipitation: 0
//     },
//     {
//         timestamp: "2015-09-02T16:00:00.000Z",
//         temperature: 28.1,
//         dewPoint: 18.3,
//         precipitation: 0
//     }
// ];

// {
//   "timestamp": "2015-09-01T16:00:00.000Z",
//   "temperature": 27.1,
//   "dewPoint": 16.7,
//   "precipitation": 0
// }

let database = [
	{
		"timestamp": "2015-09-01T16:00:00.000Z",
		"temperature": 27.1,
		"dewPoint": 16.7,
		"precipitation": 0
	},
	{
		"timestamp": "2015-09-01T16:10:00.000Z",
		"temperature": 27.3,
		"dewPoint": 16.9,
		"precipitation": 0
	}
]

// let database = [];

function measurementConstructor(timestamp, temperature, dewPoint, precipitation) {
    let obj = {};
    obj.timestamp = timestamp;
    obj.temperature = temperature;
    obj.dewPoint = dewPoint;
    obj.precipitation = precipitation;
    return obj;
}

function validateInput(obj) {
    const re = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    if (!obj.timestamp ||
        !re.test(obj.timestamp) ||
        obj.temperature !== parseFloat(obj.temperature) ||
        obj.dewPoint !== parseFloat(obj.dewPoint) ||
        obj.precipitation !== parseFloat(obj.precipitation)) {
        return false;
    }
    return true;
}

function validatePatchInput(obj) {
    if (obj.temperature && obj.temperature !== parseFloat(obj.temperature)) {
        return false;
    }
    if (obj.dewPoint && obj.dewPoint !== parseFloat(obj.dewPoint)) {
        return false;
    }
    if (obj.precipitation && obj.precipitation !== parseFloat(obj.precipitation)) {
        return false;
    }
    return true;
}


module.exports = {

    showAll: function(req, res) {
        return res.status(200).send(database);
    },

    show: function(req, res) {
        const searchKey = req.params.date;
        if (searchKey.length === 10) {
            let result = [];
            database.forEach(function(item) {
                if (!item.timestamp.indexOf(searchKey)) {
                    result.push(item);
                }
            });
            if (result.length !== 0) {
                return res.status(200).send(result);
            }
            return res.sendStatus(404);
        } else {
            database.forEach(function(item) {
                if (item.timestamp === searchKey) {
                    return res.status(200).send(item);
                }
            });
            return res.sendStatus(404);
        }
    },

    create: function(req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        } else {
            const measurement = measurementConstructor(req.body.timestamp, req.body.temperature, req.body.dewPoint, req.body.precipitation);
            if (validateInput(measurement)) {
                database.push(measurement);
                return res.sendStatus(201);
            }
            return res.sendStatus(400);
        }
    },

    update: function(req, res) {
        const date = req.params.date;
        const measurement = measurementConstructor(req.body.timestamp, req.body.temperature, req.body.dewPoint, req.body.precipitation);
        if (date !== measurement.timestamp) {
            return res.sendStatus(409);
        }
        if (validateInput(measurement)) {
            database.forEach(function(item) {
                if (item.timestamp === date) {
                    item.temperature = measurement.temperature;
                    item.dewPoint = measurement.dewPoint;
                    item.precipitation = measurement.precipitation;
                    return res.sendStatus(204);
                }
            });
            return res.sendStatus(404);
        }
        return res.sendStatus(400);
    },

    patch: function(req, res) {
        const date = req.params.date;
        const timestamp = req.body.timestamp;
        console.log(date);
        console.log(timestamp);
        if (date !== timestamp) {
            return res.sendStatus(409);
        }
        if (validatePatchInput(req.body)) {
            database.forEach(function(item) {
                if (item.timestamp === date) {
                    if (req.body.temperature) {
                        item.temperature = req.body.temperature;
                    }
                    if (req.body.dewPoint) {
                        item.dewPoint = req.body.dewPoint;
                    }
                    if (req.body.precipitation) {
                        item.precipitation = req.body.precipitation;
                    }
                    return res.sendStatus(204);
                }
            });
            return res.sendStatus(404);
        }
        return res.sendStatus(400);
    },

    delete: function(req, res) {
        const date = req.params.date;
        for(let i = 0; i < database.length; i++) {
            if (date === database[i].timestamp) {
                database.splice(i, 1);
                return res.sendStatus(204);
            }
        }
        return res.sendStatus(404);
    }


};

// console.log(measurementConstructor("01-01-2018", 55, 35, 10));
// let obj = measurementConstructor("2012-10-06T04:13:00Z", 55.1, 35, 10);
// console.log(validateInput(obj));
