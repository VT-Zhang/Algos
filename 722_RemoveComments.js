/**
 * @param {string[]} source
 * @return {string[]}
 */
function removeComments(source) {
    let code = source.join('\n');
    let isBlockStart = (c, i) => c[i] === '/' && c[i + 1] === '*';
    let isBlockEnd = (c, i) => c[i] === '*' && c[i + 1] === '/';
    let isLineStart = (c, i) => c[i] === '/' && c[i + 1] === '/';
    let isNewLine = (c, i) => c[i] === '\n';
    let i = 0, output = '';

    while (i < code.length) {
        if (isBlockStart(code, i)) {
            i += 2;
            while (!isBlockEnd(code, i) && i < code.length) i++;
            i += 2
        } else if (isLineStart(code, i)) {
            i += 2;
            while (!isNewLine(code, i) && i < code.length) i++
        } else {
            output += code[i++];
        }
    }

    return output.split('\n').filter((l) => l.length)
}

let source = ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test",
    "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"];
let source2 = ["a/*comment", "line", "more_comment*/b"];
console.log(removeComments(source));
console.log(removeComments(source2));
