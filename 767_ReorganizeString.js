/**
 * @param {string} S
 * @return {string}
 */
function reorganizeString(S) {
    let map = {};
    for(let s of S){
        map[s] = map[s] ? [s, map[s][1] + 1] : [s, 1]
    }
    let array = Object.values(map);
    array.sort((a,b) => (b[1] - a[1]));

    let result = "", previous = "";
    for(let i = 0; i < S.length; i++){
        let j = 0, find = false;
        while(j < array.length){
            if(array[j][0] !== previous && array[j][1] > 0){
                find = true;
                break;
            }
            j += 1;
        }
        if(!find) {
            return "";
        }
        result += array[j][0];
        array[j][1] -= 1;
        previous = array[j][0];
        if(j < array.length - 1 && array[j][1] < array[j+1][1]){
            [array[j], array[j+1]] = [array[j+1], array[j]];
        }
    }
    return result;
}

console.log(reorganizeString("aab"));
console.log(reorganizeString("aaab"));
