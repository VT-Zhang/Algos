// Given a non-empty array of integers, return the k most frequent elements.

// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].

// Note: 
// You may assume k is always valid, 1 ? k ? number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), 
// where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var dict = {};
    for(var i = 0; i < nums.length; i++){
        if(!dict[nums[i]]){
            dict[nums[i]] = 1;
        }
        else{
            dict[nums[i]] += 1;
        }
    }
    console.log(dict);
    var sortable = [];
    for(var key in dict){
        sortable.push([key, dict[key]]);
    }
    console.log(sortable);
    var sorted = sortable.sort(function(a, b){
        return a[1] - b[1];
    });
    console.log(sorted);
    var result = [];
    for(var j = sorted.length - 1; j >= sorted.length - k; j--){
        result.push(parseInt(sorted[j][0]));
    }
    console.log(result);
    return result;
};

topKFrequent([4,4,4,5,5,6], 2);