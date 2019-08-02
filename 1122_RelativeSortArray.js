/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
    let max = 0;
    let map = Object.create(null);
    for (let i = 0; i < arr2.length; i++) {
        map[arr2[i]] = i + 1;
        if (arr2[i] > max) {
            max = arr2[i];
        }
    }
    arr1.sort((a, b) => {
        return (map[a] || a + max) - (map[b] || b + max);
    });
    return arr1;
}

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));
