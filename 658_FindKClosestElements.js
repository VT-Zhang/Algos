/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements(arr, k, x) {
    let low = 0;
    let high = arr.length - k;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (x - arr[mid] > arr[mid + k] - x) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return arr.slice(low, low + k);
}

console.log(findClosestElements([1,2,3,4,5], 4, 3));
console.log(findClosestElements([1,2,3,4,5], 4, -1));
