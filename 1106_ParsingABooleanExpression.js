/**
 * @param {string} expression
 * @return {boolean}
 */
function parseBoolExpr(expression) {
    let stack = "";
    for (let s of expression) {
        stack += s;
        stack = stack.replace(/!\(t\)$|\|\([f,]*f\)$|&\([t,]*f[t,f]*\)$/, "f");
        stack = stack.replace(/!\(f\)$|&\([t,]*t\)$|\|\([tf,]*t[tf,]*\)$/, "t");
    }
    return stack === "t";
}

console.log(parseBoolExpr("!(f)"));
console.log(parseBoolExpr("|(f,t)"));
console.log(parseBoolExpr("&(t,f)"));
console.log(parseBoolExpr("|(&(t,f,t),!(t))"));
