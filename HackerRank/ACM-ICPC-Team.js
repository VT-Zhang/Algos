// https://www.hackerrank.com/challenges/acm-icpc-team/problem

function acmTeam(topic) {
    let count = 1;
    let max = Number.MIN_VALUE;
    for (let i = 0; i < topic.length - 1; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let temp = 0;
            for (let k = 0; k < topic[i].length; k++) {
                if (topic[i][k] === "1" || topic[j][k] === "1") {
                    temp++;
                }
                if (max < temp) {
                    max = temp;
                    count = 1;
                } else if (temp === max) {
                    count++;
                }
            }
        }
    }
    return [max, count];
}


let topic = [
                ["1","0","1","0","1"],
                ["1","1","1","0","0"],
                ["1","1","0","1","0"],
                ["0","0","1","0","1"]
            ];

console.log(acmTeam(topic));
