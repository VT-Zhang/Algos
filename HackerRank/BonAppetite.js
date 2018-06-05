// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(n, k, bill, b) {
    let sum = 0;
    bill.forEach(function(item) {
        sum += item;
    });
    console.log(sum);
    let charge = (sum - bill[k])  / 2;
    console.log(charge);
    if (charge === b) {
        return "Bon Appetit";
    } else {
        return Math.abs(charge - b);
    }
}

console.log(bonAppetit(4, 1, [3,10,2,9],12));
console.log(bonAppetit(4, 1, [3,10,2,9],7));
