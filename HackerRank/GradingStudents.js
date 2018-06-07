// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    let res = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            res.push(grades[i]);
        }
        else {
            if (grades[i] % 5 <= 2) {
                res.push(grades[1]);
            } else {
                res.push(grades[i] + (5 - grades[i] % 5));
            }
        }
    }
    return res;
}

console.log(gradingStudents([73,67,38,33]));
