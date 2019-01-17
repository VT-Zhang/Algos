/**
 * @param {number} N
 * @return {number}
 */
function fib(N) {
    let a = 0;
    let fibonacci = 1;
    let temp = 0;
    for (let i = 0; i <= N; i++) {
        fibonacci = a + fibonacci;
        temp = fibonacci;
        fibonacci = a;
        a = temp;
    }
    return fibonacci;
}

console.log(fib(4));
console.log(fib(10));
