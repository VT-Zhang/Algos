// https://www.hackerrank.com/challenges/gem-stones/problem

function gemstones(arr) {
    let set = new Set();
    for (let i = 0; i < arr[0].length; i++) {
        set.add(arr[0][i]);
    }
    for (let i = 1; i < arr.length; i++) {
        let temp = [];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[0].includes(arr[i][j]) && !temp.includes(arr[i][j])) {
                temp.push(arr[i][j]);
            }
        }
        console.log(temp);
        set.forEach(function(item) {
            if (!temp.includes(item)) {
                set.delete(item);
            }
        });
    }
    return set.size;
}

let arr = ["abcdde", "baccd", "eeabg"];
console.log(gemstones(arr));