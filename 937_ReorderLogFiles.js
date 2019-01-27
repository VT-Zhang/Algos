/**
 * @param {string[]} logs
 * @return {string[]}
 */
function reorderLogFiles(logs) {
    let letters = [];
    let numbers = [];
    let res = [];
    logs.forEach(item => {
        let arr = item.split(' ');
        if (arr[1].match(/[0-9]/g)) {
            numbers.push(arr.join(' '));
        } else {
            arr.push(arr.shift());
            letters.push(arr);
        }
    });
    letters.sort();
    letters.forEach(item => {
        item.splice(0, 0, item.pop());
        res.push(item.join(' '));
    });
    return res.concat(numbers);
}

console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]));
