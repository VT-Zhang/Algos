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

/**
 * Function to check if all the fields in the input object are valid.
 * @param obj, the input object from the request.body.
 * @returns {boolean}, return true if all the input fields are valid, false otherwise.
 */
function isInputValid(obj) {
    const RE = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
    if (!obj.timestamp || !RE.test(obj.timestamp)) {
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

/**
 * Function to get the max value from an array.
 * @param arr, the array.
 * @returns {string}, return the max value with 1 decimal place.
 */
function getMax(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    arr.forEach(function (item) {
        max = Math.max(max, item);
    });
    return max.toFixed(1);
}

/**
 * Function to get the min value from an array.
 * @param arr, the array.
 * @returns {string}, return the min value with 1 decimal place.
 */
function getMin(arr) {
    let min = Number.MAX_SAFE_INTEGER;
    arr.forEach(function (item) {
        min = Math.min(min, item);
    });
    return min.toFixed(1);
}

/**
 * Function to get the average value from an array.
 * @param arr, the array.
 * @returns {string}, return the average value with 1 decimal place.
 */
function getAvg(arr) {
    let sum = 0;
    arr.forEach(function (item) {
        sum += item;
    });
    return (sum / arr.length).toFixed(1);
}

module.exports = {

    /**
     * Function to return all the measurements from the database.
     * @param req
     * @param res
     * @returns {*|void}
     */
    showAll: function (req, res) {
        return res.status(200).send(database);
    },

    /**
     * Function to return a specific measurement from a datetime
     * As well as to return an array of measurements from a certain date.
     * @param req
     * @param res
     * @returns {*}
     */
    show: function (req, res) {
        const DATE = req.params.date;
        if (DATE.length === 10) {
            let result = [];
            database.forEach(function (item) {
                if (item.timestamp.includes(DATE)) {
                    result.push(item);
                }
            });
            if (result.length !== 0) {
                return res.status(200).send(result);
            }
            return res.sendStatus(404);
        } else {
            database.forEach(function (item) {
                if (item.timestamp === DATE) {
                    return res.status(200).send(item);
                }
            });
            return res.sendStatus(404);
        }
    },

    /**
     * Function to create a new measurement and save it in the database.
     * @param req
     * @param res
     * @returns {*}
     */
    create: function (req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        } else {
            const MEASUREMENT = req.body;
            if (isInputValid(MEASUREMENT)) {
                database.push(MEASUREMENT);
                return res.sendStatus(201);
            }
            return res.sendStatus(400);
        }
    },

    /**
     * Function to update a measurement (to replace all the values in the object).
     * @param req
     * @param res
     * @returns {*}
     */
    update: function (req, res) {
        const DATE = req.params.date;
        const MEASUREMENT = req.body;
        if (DATE !== MEASUREMENT.timestamp) {
            return res.sendStatus(409);
        }
        if (isInputValid(MEASUREMENT)) {
            database.forEach(function (item) {
                if (item.timestamp === DATE) {
                    item.temperature = MEASUREMENT.temperature;
                    item.dewPoint = MEASUREMENT.dewPoint;
                    item.precipitation = MEASUREMENT.precipitation;
                    return res.sendStatus(204);
                }
            });
            return res.sendStatus(404);
        }
        return res.sendStatus(400);
    },

    /**
     * Function to partially update a measurement (to replace a certain values in the object).
     * @param req
     * @param res
     * @returns {*}
     */
    patch: function (req, res) {
        const DATE = req.params.date;
        const TIMESTAMP = req.body.timestamp;
        if (DATE !== TIMESTAMP) {
            return res.sendStatus(409);
        }
        if (isInputValid(req.body)) {
            database.forEach(function (item) {
                if (item.timestamp === DATE) {
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

    /**
     * Function to delete a measurement from the database.
     * @param req
     * @param res
     * @returns {*}
     */
    delete: function (req, res) {
        const DATE = req.params.date;
        for (let i = 0; i < database.length; i++) {
            if (DATE === database[i].timestamp) {
                database.splice(i, 1);
                return res.sendStatus(204);
            }
        }
        return res.sendStatus(404);
    },
// http://localhost:5000/stats?stat=min&stat=max&stat=average&metric=temperature&fromDateTime=2015-09-01T16:00:00.000Z&toDateTime=2015-09-01T17:00:00.000Z
// http://localhost:5000/stats?stat=min&stat=max&stat=average&metric=dewPoint&fromDateTime=2015-09-01T16:00:00.000Z&toDateTime=2015-09-01T17:00:00.000Z

    /**
     * Function to query the database and return a certain array of measurements
     * According to the query criteria.
     * @param req
     * @param res
     * @returns {*|void}
     */
    stats: function (req, res) {
        let result = [];
        let dateRange = [];
        // console.log(req.query);

        let stats = [];
        let metrics = [];

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

        const LEFT = new Date(req.query.fromDateTime);
        const RIGHT = new Date(req.query.toDateTime);

        database.forEach(function (item) {
            let date = new Date(item.timestamp);
            if (date >= LEFT && date < RIGHT) {
                dateRange.push(item);
            }
        });

        metrics.forEach(function (metric) {
            stats.forEach(function (stat) {
                let valueArray = [];
                dateRange.forEach(function (date) {
                    if (metric === "temperature" && date.temperature) {
                        valueArray.push(date.temperature);
                    }
                    if (metric === "dewPoint" && date.dewPoint) {
                        valueArray.push(date.dewPoint);
                    }
                    if (metric === "precipitation" && date.precipitation) {
                        valueArray.push(date.precipitation);
                    }
                });
                // console.log(valueArray);
                if (valueArray.length !== 0) {
                    if (stat === "min") {
                        result.push({"metric": metric, "stat": stat, "value": getMin(valueArray)});
                    }
                    if (stat === "max") {
                        result.push({"metric": metric, "stat": stat, "value": getMax(valueArray)});
                    }
                    if (stat === "average") {
                        result.push({"metric": metric, "stat": stat, "value": getAvg(valueArray)});
                    }
                }
            });
        });
        return res.status(200).send(result);
    }

};

