/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
function shipWithinDays(weights, D) {
   if (!weights || weights.length === 0 || D === 0) {
       return 0;
   }
   let totalWeight = 0;
   let maxWeight = weights[0];
   for (let i = 0; i < weights.length; i++) {
       if (weights[i] > maxWeight) {
           maxWeight = weights[i];
       }
       totalWeight += weights[i];
   }
   let start = maxWeight;
   let end = totalWeight;

   while (start < end) {
       let mid = start + Math.floor((end - start) / 2);
       let numsOfDaysNeeded = 1;
       let currentDayWeightTotal = 0;
       for (let i = 0; i < weights.length; i++) {
           let weight = weights[i];
           if (weight + currentDayWeightTotal > mid) {
               numsOfDaysNeeded++;
               currentDayWeightTotal = 0;
           }
           currentDayWeightTotal += weight;
       }
       if (numsOfDaysNeeded > D) {
           start = mid + 1;
       } else {
           end = mid;
       }
   }
   return start;
}

console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5));
console.log(shipWithinDays([3,2,2,4,1,4], 3));
console.log(shipWithinDays([1,2,3,1,1], 4));
