// Given a string which consists of lowercase or uppercase letters, find the
// length of the longest palindromes that can be built with those letters.
//
// This is case sensitive, for example "Aa" is not considered a palindrome here.
//
// Note:
// Assume the length of given string will not exceed 1,010.
//
// Example:
//
// Input:
// "abccccdd"
//
// Output:
// 7
//
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

var longestPalindrome = function(s) {
    //create dictionary and add all character into the dict.
    //keep the occuccence of each char.
    var dict = {};
    for(let i=0;i<s.length;i++){
        if(!dict[s[i]]){
            dict[s[i]] = 1;
        }
        else{
            dict[s[i]] += 1;
        }
    }
    console.log(dict);

    var single_counter = 0;
    var total_counter = 0;
    for(var key in dict){
        if(dict[key] % 2 === 0){ //even numbers of chars will be counted all.
            total_counter += dict[key];
        }
        if(dict[key] % 2 === 1 && dict[key] !== 1){ //odd numbers of char except for 1
            total_counter += dict[key];             //will be counted all
            single_counter += 1;                    //single-counter is for odd numbers occuccence
        }
        if(dict[key]===1){     //char of occurrence of only 1 time will be counted
            total_counter += 1;
            single_counter += 1; //1 also will be counted for odd number occurrence
        }
    }
    console.log(single_counter);
    
    if(single_counter <= 1){
        var result = total_counter;
    }
    else if(single_counter > 1){
        result = total_counter - single_counter + 1;
    }
    console.log(result);
    return result;
};

longestPalindrome("dccaccd");
longestPalindrome("dccaeyccdaae");
longestPalindrome("bb");
