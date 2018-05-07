// Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.
//
//     Note:
// Input contains only lowercase English letters.
//     Input is guaranteed to be valid and can be transformed to its original digits. That means invalid inputs such as "abc" or "zerone" are not permitted.
//     Input length is less than 50,000.
//     Example 1:
// Input: "owoztneoer"
//
// Output: "012"
// Example 2:
// Input: "fviefuro"
//
// Output: "45"

/**
 * @param {string} s
 * @return {string}
 */
function originalDigits(s) {
    var arr = Array(10);
    arr.fill(0);
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "z") { arr[0]++; } // z -> zero
        if (s[i] === "w") { arr[2]++; } // w -> two
        if (s[i] === "x") { arr[6]++; } // x -> six
        if (s[i] === "g") { arr[8]++; } // g -> eight
        if (s[i] === "u") { arr[4]++; } // u -> four
        if (s[i] === "s") { arr[7]++; } // s -> seven & six
        if (s[i] === "f") { arr[5]++; } // f -> five & four
        if (s[i] === "h") { arr[3]++; } // h -> three & eight
        if (s[i] === "i") { arr[9]++; } // i -> nine & eight & six & five
        if (s[i] === "o") { arr[1]++; } // o -> one & zero & two & four
    }

    arr[7] -= arr[6]; // 7 is double counted for six and seven, so need to minus 6's count
    arr[5] -= arr[4];
    arr[3] -= arr[8];
    arr[9] = arr[9] - arr[8] - arr[6] - arr[5];
    arr[1] = arr[1] - arr[0] - arr[2] - arr[4];
    console.log(arr);
    var res = "";
    for (var j = 0; j < 10; j++) {
        for (var k = 0; k < arr[j]; k++) {
            res += j;
        }
    }
    return res;
}

console.log(originalDigits("owoztneoer"));
console.log(originalDigits("fviefurovife"));

