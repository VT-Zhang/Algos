/**
 * @param {number} n
 * @return {number}
 */
function magicalString(n) {
    let magic = ['1', '22'];
    let occurrence = [1, 2, 2];
    let i = 0;

    while (occurrence.length < n) {
        if (!magic[i]) {
            if (i % 2 === 0 && occurrence[i] === 1) {
                magic[i] = '1';
            } else if (i % 2 === 0 && occurrence[i] === 2) {
                magic[i] = '11';
            } else if (i % 2 === 1 && occurrence[i] === 1) {
                magic[i] = '2';
            } else if (i % 2 === 1 && occurrence[i] === 2) {
                magic[i] = '22';
            }

            for (let j = 0; j < magic[i].length; j++) {
                occurrence.push(+magic[i].charAt(j));
            }
        }
        i++;
    }
    return occurrence.reduce((count, num, i) => i < n && num === 1 ? ++count : count, 0);
}

console.log(magicalString(6));
