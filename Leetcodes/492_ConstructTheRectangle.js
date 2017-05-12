// For a web developer, important to know how to design a web page's
// size. So, given a specific rectangular web page’s area, your job by now is to
// design a rectangular web page, whose length L and width W satisfies the following
// requirements:
//
// 1. The area of the rectangular web page you designed must equal to the given target area.
//
// 2. The width W should not be larger than the length L, which means L >= W.
//
// 3. The difference between length L and width W should be as small as possible.
// You need to output the length L and the width W of the web page you designed in sequence.
// Example:
// Input: 4
// Output: [2, 2]

var constructRectangle = function(area) {
    var w = Math.floor(Math.sqrt(area));
    console.log(w);
    while(area % w !== 0){
        w--;
    }
    var l = area/w;
    console.log([l, w]);
    return [l, w];
};

constructRectangle(20);
constructRectangle(4);
constructRectangle(12);
constructRectangle(35);
constructRectangle(17);
