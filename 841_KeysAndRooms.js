/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
    let map = {};
    rooms.forEach((keys, i) => {
        map[i] = keys;
    });

    let dfs = (room = 0) => {
        delete map[room];
        rooms[room].forEach(key => {
            if (map[key]) {
                dfs(key);
            }
        })
    };

    dfs(0);

    return Object.keys(map).length === 0;
}

console.log(canVisitAllRooms([[1],[2],[3],[]]));
