/**
 * @param {number[]} ages
 * @return {number}
 */
function numFriendRequests(ages) {
    let res = 0, sum = 0, min = 15;
    let array = new Array(121).fill(0);
    for (let age of ages) {
        array[age]++;
    }
    for (let i = 15; i < 121; res += array[i++] * (sum - 1)) {
        sum += array[i];
        while (min <= 0.5 * i + 7) {
            sum -= array[min++];
        }
    }
    return res;
}

console.log(numFriendRequests([16,16]));
console.log(numFriendRequests([16,17,18]));
console.log(numFriendRequests([20,30,100,110,120]));
