// https://www.hackerrank.com/challenges/strange-advertising/problem

function viralAdvertising(n) {
    let people = 5;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        people = Math.floor(people / 2);
        sum += people;
        people *= 3;
    }
    return sum;
}

console.log(viralAdvertising(5));
console.log(viralAdvertising(3));
