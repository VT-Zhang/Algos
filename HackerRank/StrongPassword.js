// https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(n, password) {
    let hasNum = false;
    let hasLower = false;
    let hasUpper = false;
    let hasSpecial = false;
    let count = 0;
    let numbers = "0123456789";
    let lowerLetter = "abcdefghijklmnopqrstuvwxyz";
    let upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let specialChar = "!@#$%^&*()-+";
    for (let i = 0; i < n; i++) {
        if (numbers.includes(password[i]) && !hasNum) {
            count++;
            hasNum = true;
        }
        if (lowerLetter.includes(password[i]) && !hasLower) {
            count++;
            hasLower = true;
        }
        if (upperLetter.includes(password[i]) && !hasUpper) {
            count++;
            hasUpper = true;
        }
        if (specialChar.includes(password[i]) && !hasSpecial) {
            count++;
            hasSpecial = true;
        }
    }
    let missing = 4 - count;
    if (6 - n > missing) {
        return 6 - n;
    } else {
        return missing;
    }
}

console.log(minimumNumber(11, "#HackerRank"));
console.log(minimumNumber(3, "Ab1"));
