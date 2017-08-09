// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), 
// some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may 
// assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

var findDisappearedNumbers = function(nums) {
    var sorted = bubbleSort(nums);
    console.log(sorted);
    var length1 = sorted.length;
    var length2 = sorted.length - 1;
    for(let i = 0; i < length1; i++){
        if(sorted[i] == sorted[i+1] && sorted[i+1] != undefined){
            sorted.splice(i, 1);
            length1--;
            i--;
        }
    }
    console.log(sorted);
    var result = [];
    for(let i = 0; i < length2; i++){
        if(sorted[i] + 1 != sorted[i+1]){
            sorted.splice(i+1, 0, sorted[i]+1);
            result.push(sorted[i]+1);
            // console.log(sorted);
        }
    }
    console.log(result);
    return result;
};

function bubbleSort(arr){
    var counter = 0;
    while(counter < arr.length){
        for(var i=0; i<arr.length; i++){
            var temp;
            if(arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        counter++;
        i=0;
    }
    return arr;
}

findDisappearedNumbers([4,3,2,7,8,2,3,1]);