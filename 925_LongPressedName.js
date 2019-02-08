/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
function isLongPressedName(name, typed) {
    let i = 0;
    let j = 0;
    while (i < name.length && j < typed.length) {
        let lastSame = name[i];
        let count = 1;
        i++;
        while (i < name.length && name[i] === lastSame) {
            count++;
            i++;
        }
        while (j < typed.length && typed[j] === lastSame) {
            count--;
            j++;
        }
        if (count > 0) {
            return false;
        }
    }
    return i === name.length;
}

console.log(isLongPressedName("alex", "aaleex"));
console.log(isLongPressedName("saeed", "ssaaedd"));
console.log(isLongPressedName("leelee", "lleeelee"));
console.log(isLongPressedName("laiden", "laiden"));

