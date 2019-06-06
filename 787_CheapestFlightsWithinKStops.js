/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
function findCheapestPrice(n, flights, src, dst, K) {
    let map = new Map();
    for (let i = 0; i < flights.length; i++) {
        let [start, end, price] = flights[i];
        let edges = map.get(start) || [];
        edges.push([end, price]);
        map.set(start, edges);
    }

    let queue = [[0, src, K + 1]];

    while (queue.length) {
        let [price, city, stops] = queue.shift();
        if (city === dst) {
            return price;
        }
        if (stops > 0) {
            let nextFlight = map.get(city) || [];
            for (let i = 0; i < nextFlight.length; i++) {
                let [next, cost] = nextFlight[i];
                queue.push([cost + price, next, stops - 1]);
            }
            queue.sort((a, b) => a[0] - b[0]);
        }
    }

    return -1;
}

console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1))
