/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
function exclusiveTime(n, logs) {
    let res = [...Array(n)].fill(0);
    let stack = [];
    for (let i = 0; i < logs.length; i++) {
        let log = logs[i].split(':');
        if (log[1] === "start") {
            stack.push([log[2], 0]);
        } else {
            let start = stack.pop();
            let time = log[2] - start[0] + 1;
            res[log[0]] += time - start[1];
            if (stack.length > 0) {
                stack[stack.length - 1][1] += time;
            }
        }
    }
    return res;
}

console.log(exclusiveTime(2, ["0:start:0","1:start:2","1:end:5","0:end:6"]));
