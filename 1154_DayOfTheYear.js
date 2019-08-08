/**
 * @param {string} date
 * @return {number}
 */
function dayOfYear(date) {

    let [year,month,day] = date.split('-').map((item) => parseInt(item));

    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear(year)) {
        days[1] += 1;
    }
    let res = 0;
    for (let i = 0; i < month - 1; i++) {
        res += days[i];
    }
    return res + day;

    function isLeapYear(year) {
        if (year % 400 === 0) {
            return true;
        }
        if (year % 100 === 0) {
            return false;
        }
        if (year % 4 === 0) {
            return true;
        }
        return false;
    }
}

console.log(dayOfYear("2019-01-09"));
console.log(dayOfYear("2019-02-10"));
console.log(dayOfYear("2019-03-01"));
console.log(dayOfYear("2003-03-01"));
console.log(dayOfYear("2004-03-01"));
