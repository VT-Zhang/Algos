/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
function numRescueBoats(people, limit) {
    people.sort((a, b) => a - b);
    let res = 0, light = 0, heavy = people.length - 1;
    while (light <= heavy) {
        let left = limit - people[heavy];
        if (left >= people[light]) {
            light += 1;
        }
        heavy -= 1;
        res += 1;
    }
    return res;
}

console.log(numRescueBoats([1,2], 3));
console.log(numRescueBoats([3,2,2,1], 3));
console.log(numRescueBoats([3,5,3,4], 5));
