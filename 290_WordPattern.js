// Given a pattern and a string str, find if str follows the same pattern.
//
// Here follow means a full match, such that there is a bijection between a letter
// in pattern and a non-empty word in str.
//
// Examples:
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.
//
// Notes:
// You may assume pattern contains only lowercase letters, and str contains
// lowercase letters separated by a single space.

var wordPattern = function(pattern, str) {
    var p = pattern.split("");
    var s = str.split(" ");
    console.log(p);
    console.log(s);
    if(p.length !== s.length){
        console.log(false);
        return false;
    }
    var dict = [];
    for(let i=0;i<p.length;i++){
        dict.push({
            key: p[i],
            value: s[i]
        });
    }
    console.log(dict);
    for(let i=0;i<dict.length;i++){
        for(let j=0;j<dict.length;j++){
            if(dict[i].key === dict[j].key && dict[i].value !== dict[j].value){
                console.log(false);
                return false;
            }
            if(dict[i].value === dict[j].value && dict[i].key !== dict[j].key){
                console.log(false);
                return false;
            }
        }
    }
    console.log(true);
    return true;
};

wordPattern("abba", "dog cat cat dog");
wordPattern("aaaa", "dog dog dog dog");
wordPattern("abba", "dog dog dog dog");
