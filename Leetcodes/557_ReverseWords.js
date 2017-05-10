var reverseWords = function(s) {
    var temp = '';
    var ns = '';
    for(var i = 0; i < s.length; i++){
        if (s[i] != ' '){
            temp += s[i];
            console.log(temp);
        }
        else {
            for (var j = temp.length-1; j>=0; j--){
                ns += temp[j];
            }
            ns += ' ';
            temp = '';
        }
    }
    for (var k = temp.length-1; k>=0; k--){
        ns += temp[k];
    }
    console.log(ns);
    return ns;
};

reverseWords("Let's take LeetCode contest");
