/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
function carPooling(trips, capacity) {
    trips.sort(((a, b) => a[1] - b[1]));
    let trip = Array(1000).fill(0);
    for (let i = 0; i < trips.length; i++) {
        for (let j = trips[i][1]; j < trips[i][2]; j++) {
            trip[j] += trips[i][0];
            if (trip[j] > capacity) {
                return false;
            }
        }
    }
    return true;
}

console.log(carPooling([[2,1,5],[3,3,7]], 4));
console.log(carPooling([[2,1,5],[3,3,7]], 5));
console.log(carPooling([[2,1,5],[3,5,7]], 3));
console.log(carPooling([[3,2,7],[3,7,9],[8,3,9]], 11));
