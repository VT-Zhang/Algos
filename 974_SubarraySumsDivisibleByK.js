/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function subarraysDivByK(A, K) {
    let map = {};
    let sum = 0; // cumulative sum
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        // mod twice for negative numbers
        const key = ((sum % K) + K) % K;
        // if mp[key] is undefined set 1, else increase 1
        map[key] = map[key]+1||1;
    }
    let s = 0;
    for (let i = 0; i < K; i++) {
        if (map[i] > 1) {
            s += (map[i] * (map[i] - 1)) / 2;   // sum of 1 to mp[i] - 1;
        }
    }
    return s + (map[0]||0);
}

console.log(subarraysDivByK([4,5,0,-2,-3,1], 5));
