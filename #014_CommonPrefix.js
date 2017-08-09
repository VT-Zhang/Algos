// Write a function to find the longest common prefix string amongst an array of strings.

var longestCommonPrefix = function(strs) {
    var length = strs[0].length;
    for(let i = 0; i < strs.length; i++){
        if(strs[i].length < length){
            length = strs[i].length;
        }
    }
    console.log(length);
    var prefix = '';
    var i = 0;
    var j = 0;
    var temp = strs[0][0];
    // for(var i = 0; i < strs.length; i++){
    //     var temp = strs[i][j];
    //     for(var j = 0; j < counter; j++){
    //         if(temp != strs[i][j]){
    //             continue;
    //         }
    //     }
    //     prefix += strs[i][j];
    //     counter++;
    // }
    while(j <= length){
        while(i < strs.length){
            if(temp != strs[i][j]){
                continue;
            }
            i++;
        }
        prefix += strs[i][j];
        j++;
    }
    console.log(prefix);
    return prefix;
};

longestCommonPrefix(['predetermine', 'predator', 'previous']);
longestCommonPrefix(['condo', 'congrats', 'convict']);