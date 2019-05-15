/**
 * @param {number} N
 * @return {number}
 */
function countArrangement(N) {
    let count = 0, used = [];
    dfs(1);
    return count;

    function dfs(index) {
        if (index > N) {
            count++;
            return;
        }

        for (let i = 1; i <= N; i++) {
            if (used[i]) {
                continue;
            }
            if (i % index !== 0 && index % i !== 0) {
                continue;
            }
            used[i] = true;
            dfs(index + 1);
            used[i] = false;
        }
    }
}

console.log(countArrangement(2));
