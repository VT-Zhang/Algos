// Given a word, you need to judge whether the usage of capitals in it is right or not.
//
// We define the usage of capitals in a word to be right when one of the following cases holds:
//
// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital if it has more than one letter, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.


var detectCapitalUse = function(word) {
    var counter = 0;
    for(var i=0; i<word.length; i++){
        if(word[i] === word[i].toUpperCase()){
            counter++;
        }
    }
    console.log(counter);
    if (counter === word.length || counter === 0){
        console.log(true);
        return true;
    }
    else if (counter !== word.length){
        for(var j=1; j<word.length; j++){
            if(word[j]===word[j].toUpperCase()){
                console.log(false);
                return false;
            }
        }
        if(word[0] === word[0].toUpperCase()){
            console.log(true);
            return true;
        }
    }
};

detectCapitalUse("USA");
detectCapitalUse("leetcode");
detectCapitalUse("Google");
detectCapitalUse("gIrl");
detectCapitalUse("miLL");
detectCapitalUse("FlaG");
