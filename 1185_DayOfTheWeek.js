/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
function dayOfTheWeek(day, month, year) {
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(year, month - 1, day);
    return weekdays[date.getDay()];
}

console.log(dayOfTheWeek(31, 8, 2019));
console.log(dayOfTheWeek(18, 7, 1999));
console.log(dayOfTheWeek(15, 8, 1993));
