function timeConversion(s) {
    if (s[0] === "1" && s[1] === "2" && s[s.length-2] === "A") {
        return "00" + s.substring(2, s.length-2);
    }
    if (s[s.length-2] === "A" || (s[s.length-2] === "P" && s[0] === "1" && s[1] === "2")) {
        return s.substring(0, s.length-2);
    }
    if (s[s.length-2] === "P") {
        var hour = 0;
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