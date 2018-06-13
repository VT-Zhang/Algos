// {
//   "timestamp": "2015-09-01T16:00:00.000Z",
//   "temperature": 27.1,
//   "dewPoint": 16.7,
//   "precipitation": 0
// }


// TEST FOR DELETE AND SHOW
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

// TEST FOR PATCH AND PUT
// let database = [
// 	{
// 		"timestamp": "2015-09-01T16:00:00.000Z",
// 		"temperature": 27.1,
// 		"dewPoint": 16.7,
// 		"precipitation": 0
// 	},
// 	{
// 		"timestamp": "2015-09-01T16:10:00.000Z",
// 		"temperature": 27.3,
// 		"dewPoint": 16.9,
// 		"precipitation": 0
// 	}
// ]

// TEST FOR STATS
let database = [
    {
        timestamp: "2015-09-01T16:00:00.000Z",
        temperature: 27.1,
        dewPoint: 16.9,
    },
    {
        timestamp: "2015-09-01T16:10:00.000Z",
        temperature: 27.3,
    },
    {
        timestamp: "2015-09-01T16:20:00.000Z",
        temperature: 27.5,
        dewPoint: 17.1,
    },
    {
        timestamp: "2015-09-01T16:30:00.000Z",
        temperature: 27.4,
        dewPoint: 17.3,
    },
    {
        timestamp: "2015-09-01T16:40:00.000Z",
        temperature: 27.2,
    },
    {
        timestamp: "2015-09-01T17:00:00.000Z",
        temperature: 28.1,
        dewPoint: 18.3,
    }
];

// let database = [];

function validateInput(obj) {
    const re = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    if (!obj.timestamp || !re.test(obj.timestamp)) {
        return false;
    }
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

function getMax(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    arr.forEach(function(item) {
        max = Math.max(max, item);
    });
    return max.toFixed(1);
}

function getMin(arr) {
    let min = Number.MAX_SAFE_INTEGER;
    arr.forEach(function(item) {
        min = Math.min(min, item);
    });
    return min.toFixed(1);
}

function getAvg(arr) {
    let sum = 0;
    arr.forEach(function(item) {
        sum += item;
    });
    return (sum / arr.length).toFixed(1);
}

module.exports = {

    showAll: function(req, res) {
        return res.status(200).send(database);
    },

    show: function(req, res) {
        const date = req.params.date;
        if (date.length === 10) {
            let result = [];
            database.forEach(function(item) {
                if (item.timestamp.includes(date)) {
                    result.push(item);
                }
            });
            if (result.length !== 0) {
                return res.status(200).send(result);
            }
            return res.sendStatus(404);
        } else {
            database.forEach(function(item) {
                if (item.timestamp === date) {
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
            const measurement = req.body;
            if (validateInput(measurement)) {
                database.push(measurement);
                return res.sendStatus(201);
            }
            return res.sendStatus(400);
        }
    },

    update: function(req, res) {
        const date = req.params.date;
        const measurement = req.body;
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
        if (date !== timestamp) {
            return res.sendStatus(409);
        }
        if (validateInput(req.body)) {
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
    },
// http://localhost:5000/stats?stat=min&stat=max&stat=average&metric=temperature&fromDateTime=2015-09-01T16:00:00.000Z&toDateTime=2015-09-01T17:00:00.000Z
// http://localhost:5000/stats?stat=min&stat=max&stat=average&metric=dewPoint&fromDateTime=2015-09-01T16:00:00.000Z&toDateTime=2015-09-01T17:00:00.000Z

    stats: function(req, res) {
        let result = [];
        let dateRange = [];
        console.log(req.query);

        var stats = [];
        var metrics = [];

        if (typeof(req.query.stat) === "string") {
            stats.push(req.query.stat);
        } else {
            stats = req.query.stat;
        }
        if (typeof(req.query.metric) === "string") {
            metrics.push(req.query.metric);
        } else {
            metrics = req.query.metric;
        }

        const left = new Date(req.query.fromDateTime);
        const right = new Date(req.query.toDateTime);

        database.forEach(function(item) {
            let date = new Date(item.timestamp);
            if (date >= left && date < right) {
                dateRange.push(item);
            }
        });
        // console.log(dateRange);
        
        metrics.forEach(function(metric) {
            stats.forEach(function(stat) {
                let temp = [];
                dateRange.forEach(function(date) {
                    if (metric === "temperature" && date.temperature) {
                        temp.push(date.temperature);
                    }
                    if (metric === "dewPoint" && date.dewPoint) {
                        temp.push(date.dewPoint);
                    }
                    if (metric === "precipitation" && date.precipitation) {
                        temp.push(date.precipitation);
                    }
                });
                console.log(temp);
                if (temp.length !== 0) {
                    if (stat === "min") {
                        let min = getMin(temp);
                        result.push({"metric": metric, "stat": stat, "value": min});
                    }
                    if (stat === "max") {
                        let max = getMax(temp);
                        result.push({"metric": metric, "stat": stat, "value": max});
                    }
                    if (stat === "average") {
                        let avg = getAvg(temp);
                        result.push({"metric": metric, "stat": stat, "value": avg});
                    }
                }
            });
        });
        return res.status(200).send(result);
    }

};

