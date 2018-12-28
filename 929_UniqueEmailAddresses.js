/**
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
    let set = new Set();
    for (let i = 0; i < emails.length; i++) {
        set.add(normalizeEmail(emails[i]));
    }
    return set.size;
}

function normalizeEmail(emails) {
    let atFlag = false;
    let dotFlag = false;
    let plusFlag = false;
    let normalizedEmail = "";
    for (let i = 0; i < emails.length; i++) {
        if (emails[i] === "@") {
            atFlag = true;
        }
        if (emails[i] === "+") {
            plusFlag = true;
        }
        dotFlag = emails[i] === "." && !atFlag;
        if (!plusFlag && !atFlag) {
            if (!dotFlag) {
                normalizedEmail += emails[i];
            }
        }
        if (atFlag) {
            normalizedEmail += emails[i];
        }
    }
    return normalizedEmail;
}

// console.log(normalizeEmail("test.email+alex@leetcode.com"));
// console.log(normalizeEmail("testemail@lee.tcode.com"));
// console.log(normalizeEmail("testemai.l@lee.tcode.com"));

let array = [
    "test.email+alex@leetcode.com",
    "test.email+bob@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "test.e.mail@leet.code.com"
];
console.log(numUniqueEmails(array));
