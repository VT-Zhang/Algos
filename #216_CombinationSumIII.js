// Find all possible combinations of k numbers that add up to a number n, 
// given that only numbers from 1 to 9 can be used and each combination 
// should be a unique set of numbers.


// Example 1:

// Input: k = 3, n = 7

// Output:

// [[1,2,4]]

// Example 2:

// Input: k = 3, n = 9

// Output:

// [[1,2,6], [1,3,5], [2,3,4]]

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function( n) {
    var dict = {};
    var set = [1,2,3,4,5,6,7,8,9];
    for(let i=0; i<set.length; i++){
        for(let j=0; j<set.length-1; j++){
            for(let l=0; l<set.length-3; l++){
                if(set[i]+set[j]+set[l]===n && set[i] != set[j] != set[l]){
                    if(!dict[[set[i], set[j], set[l]]]){
                        dict[[set[i], set[j], set[l]]] = 1;
                    }
                    else{
                        dict[[set[i], set[j], set[l]]] += 1;
                    }
                }
            }
        }
    }
    console.log(dict);
};

combinationSum3(9);