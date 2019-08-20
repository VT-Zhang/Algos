/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
function corpFlightBookings(bookings, n) {
    let res = new Array(n).fill(0);
    bookings.forEach(([i, j, k]) => {
        for (let m = i; m <= j; m++) {
            res[m - 1] += k;
        }
    });
    return res;
}

console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5));
