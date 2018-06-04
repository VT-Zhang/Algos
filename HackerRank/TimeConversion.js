// https://www.hackerrank.com/challenges/time-conversion/problem
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//
//     Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
//
//     Input Format
//
// A single string  containing a time in -hour clock format (i.e.:  or ), where  and .
//
//     Output Format
//
// Convert and print the given time in -hour format, where .
//
//     Sample Input
//
// 07:05:45PM
// Sample Output
//
// 19:05:45

function timeConversion(s) {
    if (s[0] === "1" && s[1] === "2" && s[s.length-2] === "A") {
        return "00" + s.substring(2, s.length-2);
    }
    if (s[s.length-2] === "A" || (s[s.length-2] === "P" && s[0] === "1" && s[1] === "2")) {
        return s.substring(0, s.length-2);
    }
    if (s[s.length-2] === "P") {
        let hour = 0;
        hour += parseInt(s[0]) * 10 + parseInt(s[1]) + 12;
        return hour.toString() + s.substring(2, s.length-2);
    }
}

console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("11:59:00AM"));
console.log(timeConversion("11:59:00PM"));
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:40:22AM"));
console.log(timeConversion("12:45:54PM"));