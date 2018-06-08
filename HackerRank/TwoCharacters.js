// https://www.hackerrank.com/challenges/two-characters/problem

function twoCharaters(s) {
    let set = new Set();
    let min = 1e4;
    for (let i = 0; i < s.length; i++) {
        set.add(s[i]);
    }
    // console.log(set);
    set.forEach(function(item) {
        set.forEach(function(value) {
            if (item !== value) {
                let str = "";
                let count = 0;
                for (let i = 0; i < s.length; i++) {
                    if (s[i] === item || s[i] === value) {
                        str += s[i];
                    }
                }
                // console.log(str);
                for (let i = 0; i < str.length - 1; i++) {
                    count++;
                    if (str[i] === str[i+1]) {
                        break;
                    }
                }

                if (count === str.length - 1) {
                    min = Math.min(min, (s.length - str.length));
                }
            }
        })
    });
    if (min === 1e4) {
        return 0;
    }
    return min;
}

console.log(twoCharaters("beabeefeab"));
console.log(twoCharaters("a"));
console.log(twoCharaters("ab"));