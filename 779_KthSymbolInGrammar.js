/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
function kthGrammar(N, K) {
    N = Math.ceil(Math.log2(K, 2)) + 1;
    return helper(N, K);
}

function helper(N, K) {
    if (N === 1 && K === 1) {
        return 0;
    }
    let lastRowCreator = helper(N - 1, Math.ceil(K / 2));
    return (lastRowCreator === 0 ? [0, 1] : [1, 0])[(K + 1) % 2];
}

console.log(kthGrammar(1, 1));
console.log(kthGrammar(2, 1));
console.log(kthGrammar(2, 2));
console.log(kthGrammar(4, 5));
