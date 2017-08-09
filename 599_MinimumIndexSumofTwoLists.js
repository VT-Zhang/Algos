// Suppose Andy and Doris want to choose a restaurant for dinner, 
// and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least 
// list index sum. If there is a choice tie between answers, output all 
// of them with no order requirement. You could assume there always exists
//  an answer.

// Example 1:
// Input:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".
// Example 2:
// Input:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["KFC", "Shogun", "Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index 
// sum is "Shogun" with index sum 1 (0+1).
// Note:
// The length of both lists will be in the range of [1, 1000].
// The length of strings in both lists will be in the range of [1, 30].
// The index is starting from 0 to the list length minus 1.
// No duplicates in both lists.

var findRestaurant = function(arr1, arr2) {
    var restaurant = [];
    var rank = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                restaurant.push(arr1[i]);
                rank.push(i+j);
            }
        }
    }
    console.log(restaurant);
    console.log(rank);
    for(let i = 0; i < rank.length; i++){
        var position = 0;
        var min = rank[i];
        if(rank[i] < min){
            min = rank[i];
            position = i;
        }
    }
    console.log(position);
    console.log(restaurant[position]);
    return [restaurant[position]];
};

findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"])
findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"],
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]);