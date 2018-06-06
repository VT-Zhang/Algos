// https://www.hackerrank.com/challenges/library-fine/problem

function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 > y2) {
        return 1e4;
    }
    else if (y1 === y2) {
        if (m1 > m2) {
            return (m1 - m2) * 500;
        }
        else if (m1 === m2) {
            if (d1 > d2) {
                return (d1 - d2) * 15;
            }
        }
    }
    return 0;
}

console.log(libraryFine(9, 6, 2015, 6, 6, 2015));
console.log(libraryFine(1, 1, 2016, 31, 12, 2015));
console.log(libraryFine(6, 6, 2015, 9, 6, 2016));
console.log(libraryFine(2, 7, 1014, 1, 1, 1015));
