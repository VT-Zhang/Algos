// Solve a given equation and return the value of x in the form of string "x=#value". The equation contains only '+', '-' operation, the variable x and its coefficient.
//
//     If there is no solution for the equation, return "No solution".
//
//     If there are infinite solutions for the equation, return "Infinite solutions".
//
//     If there is exactly one solution for the equation, we ensure that the value of x is an integer.
//
//     Example 1:
// Input: "x+5-3+x=6+x-2"
// Output: "x=2"
// Example 2:
// Input: "x=x"
// Output: "Infinite solutions"
// Example 3:
// Input: "2x=x"
// Output: "x=0"
// Example 4:
// Input: "2x+3x-6x=x+2"
// Output: "x=-1"
// Example 5:
// Input: "x=x+2"
// Output: "No solution"

/**
 * @param {string} equation
 * @return {string}
 */
function solveEquation(equation) {
    let res1 = evaluationExpression(equation.split("=")[0]);
    let res2 = evaluationExpression(equation.split("=")[1]);
    res1[0] -= res2[0];
    res1[1] = res2[1] - res1[1];
    if (res1[0] === 0 && res1[1] === 0) {
        return "Infinite solutions";
    } else if (res1[0] === 0) {
        return "No solution";
    } else {
        return "x=" + Math.floor(parseInt(res1[1]/res1[0]));
    }
}

function evaluationExpression(expression) {
    let tokens = expression.split(/(?=[-+])/);
    let res = new Array(2).fill(0);
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (token === "+x" || token === "x") {
            res[0] += 1;
        } else if (token === "-x") {
            res[0] -= 1;
        } else if (token.includes("x")) {
            res[0] += parseInt(token.substring(0, token.indexOf("x")));
        } else {
            res[1] += parseInt(token);
        }
    }
    return res;
}

console.log(solveEquation('x+5-3+x=6+x-2'));
