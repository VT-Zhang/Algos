// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let max = 0;
    for (let i = 0; i < word.length; i++) {
        if(max < h[letters.indexOf(word[i])]) {
            max = h[letters.indexOf(word[i])];
        }
    }
    return word.length * max;
}

let value = [1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7];
console.log(designerPdfViewer(value, "zaba"));