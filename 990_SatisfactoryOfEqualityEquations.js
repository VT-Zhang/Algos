/**
 * @param {string[]} equations
 * @return {boolean}
 */
function equationsPossible(equations) {
    let map = {};
    for (let str of equations) {
        if (str[1] === '=') {
            let first = str[0];
            let second = str[3];
            map[helper(second)] = helper(first);
        }
    }

    for (let str of equations) {
        if (str[1] === "!") {
            let first = str[0];
            let second = str[3];
            if (helper(first) === helper(second)) {
                return false;
            }
        }
    }

    return true;

    function helper(a) {
        if (!map[a]) {
            map[a] = a;
        }
        if (map[a] === a) {
            return a;
        }
        return helper(map[a]);
    }
}

console.log(equationsPossible(["a==b","b!=a"]));
console.log(equationsPossible(["b==a","a==b"]));
console.log(equationsPossible(["a==b","b==c","a==c"]));
