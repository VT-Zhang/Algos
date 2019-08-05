/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
function videoStitching(clips, T) {
    let i = 0, count = 0;
    while (i < T) {
        let temp = clips.filter(clip => {
            return clip[0] <= i && clip[1] > i;
        });
        if (!temp.length) {
            return -1;
        }
        i = temp.reduce((a, b) => {
            return a[1] < b[1] ? b : a;
        })[1];
        count++;
    }
    return count;
}

console.log(videoStitching([[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], 10));
console.log(videoStitching([[0,1],[1,2]], 5));
console.log(videoStitching([[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], 9));
console.log(videoStitching([[0,4],[2,8]], 5));
