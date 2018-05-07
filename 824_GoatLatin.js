// A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.
//
//     We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)
//
// The rules of Goat Latin are as follows:
//
// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
//     For example, the word 'apple' becomes 'applema'.
//
//     If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
//     For example, the word "goat" becomes "oatgma".
//
//     Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
//     For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
//     Return the final sentence representing the conversion from S to Goat Latin.
//
//
//
//     Example 1:
//
// Input: "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
// Example 2:
//
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
//
//
// Notes:
//
//     S contains only uppercase, lowercase and spaces. Exactly one space between each word.
// 1 <= S.length <= 150.

/**
 * @param {string} S
 * @return {string}
 */
function toGoatLatin(S) {
    S += " ";
    var vowels = ["a", "e", "i", "o", "u"];
    var arr = [];
    var str = "";
    var res = "";
    for (var i = 0; i < S.length; i++) {
        if (S[i] !== " ") {
            str += S[i];
        } else {
            arr.push(str);
            str = "";
        }
    }
    console.log(arr);
    for (var j = 0; j < arr.length; j++) {
        if (vowels.includes(arr[j][0].toLowerCase())) {
            arr[j] += "ma";
        } else {
            var tempLetter = arr[j][0];
            var tempWord = "";
            for (var k = 1; k < arr[j].length; k++) {
                tempWord += arr[j][k];
            }
            arr[j] = tempWord + tempLetter + "ma";
        }
    }
    console.log(arr);
    for (var l = 0; l < arr.length; l++) {
        var count = l;
        while (count > -1) {
            arr[l] += "a";
            count--;
        }
        res += arr[l] + " ";
    }
    console.log(arr);
    return res.substring(0, res.length-1);
}

console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));
console.log(toGoatLatin("I speak Goat Latin"));
