/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
function findRadius(houses, heaters) {
    heaters.sort((a, b) => a - b);
    return houses.reduce((prev, curr) => Math.max(prev, closestHeaterDistance(curr, heaters, 0, heaters.length - 1)), 0);
}

function closestHeaterDistance(house, heaters, left, right) {
    if (left === right) return Math.abs(house - heaters[left]);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (house === heaters[mid]) return 0;
        else if (house < heaters[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    if (left === right && left > 0) left --;
    return Math.min(Math.abs(house - heaters[left]), Math.abs(house - heaters[right]));
}
