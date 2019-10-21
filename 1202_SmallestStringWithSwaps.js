/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
function smallestStringWithSwaps(s, pairs) {
    let m = new Map();
    const find = (i) => {
        if (!m.has(i)) {
            m.set(i, i);
        } else {
            while (m.get(i) !== i) {
                m.set(i, m.get(m.get(i)));
                i = m.get(i);
            }
        }
        return i;
    };

    const union = (a,b) => {
        let aa = find(a);
        let bb = find(b);
        m.set(bb, aa);
    };

    for([a,b] of pairs) {
        union(a,b);
    }

    let map = new Map();
    Array.from(m.keys()).forEach(k => {
        let key = find(k);
        if (map.has(key)) {
            let val = map.get(key);
            val.push(s[k]);
            map.set(key, val);
        } else {
            map.set(key, [s[k]]);
        }
    });
    Array.from(map.keys()).forEach(k => {
        let val = map.get(k);
        val.sort();
        map.set(k, val);
    });
    for (let i = 0; i < s.length; i++) {
        let k = find(i);
        if (map.has(k)) {
            let vals = map.get(k);
            let val = vals.shift();
            map.set(k, vals);
            s = s.substring(0, i) + val + s.substring(i + 1);
        }
    }

    return s;
}

console.log(smallestStringWithSwaps("dcab", [[0,3],[1,2]]));
console.log(smallestStringWithSwaps("dcab", [[0,3],[1,2],[0,2]]));
console.log(smallestStringWithSwaps("cba", [[0,1],[1,2]]));
