/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
function rearrangeBarcodes(barcodes) {
    let map = {};
    barcodes.forEach(code => {
        map[code] = (map[code] || 0) + 1;
    });
    let keys = Object.keys(map).sort((k1, k2) => map[k1] - map[k2]);
    let index = 1;
    for (let key of keys) {
        let t = map[key];
        for (let i = 0; i < t; i++) {
            if (index >= barcodes.length) {
                index = 0;
            }
            barcodes[index] = parseInt(key);
            index += 2;
        }
    }
    return barcodes;
}

console.log(rearrangeBarcodes([1,1,1,2,2,2]));
console.log(rearrangeBarcodes([1,1,1,1,2,2,3,3]));
