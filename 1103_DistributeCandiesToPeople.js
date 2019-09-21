/**
 * @parlet res = new Array(num_people).fill(0);
 for (let i = 0; candies > 0; i++) {
        res[i % num_people] += Math.min(candies, i + 1);
        candies -= i + 1;
    }
 return res;am {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
function distributeCandies(candies, num_people) {

}

console.log(distributeCandies(7, 4));
console.log(distributeCandies(10, 3));
