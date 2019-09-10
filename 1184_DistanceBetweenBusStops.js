/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
function distanceBetweenBusStops(distance, start, destination) {
    let index = start, sum = 0, distanceSum;
    do {
        if (index === destination) {
            distanceSum = sum;
            sum = 0;
        }
        sum += distance[index];
        index = (index + 1) % distance.length;
    }
    while (index !== start);

    return Math.min(distanceSum, sum);
}

console.log(distanceBetweenBusStops([1,2,3,4], 0, 1));
console.log(distanceBetweenBusStops([1,2,3,4], 0, 2));
console.log(distanceBetweenBusStops([1,2,3,4], 0, 3));
