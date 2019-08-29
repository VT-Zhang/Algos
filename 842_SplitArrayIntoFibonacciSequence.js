/**
 * @param {string} S
 * @return {number[]}
 */
function splitIntoFibonacci(S) {
    let len = S.length, result = [];
    dfs([], 0);
    return result;

    function dfs(res, index) {
        if (index === len && res.length > 2) {
            result = [...res];
            return;
        }
        let num = 0;
        for (let i = index; i < len; i++) {
            num = num * 10 + parseInt(S.charAt(i));
            if (S.charAt(index) === "0" && i > index) {
                return;
            }
            if (num > Math.pow(2,31) - 1) {
                return;
            }
            if (res.length < 2 || num === (res[res.length - 1] + res[res.length - 2])) {
                res.push(num);
                dfs(res, i + 1);
                res.pop();
            }
        }
    }
}

console.log(splitIntoFibonacci("123456579"));
console.log(splitIntoFibonacci("11235813"));
console.log(splitIntoFibonacci("112358130"));
console.log(splitIntoFibonacci("0123"));
