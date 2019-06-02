/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
    let right = asteroids.reverse();
    let left = [right.pop()];

    while (right.length  > 0) {
        if (left.length === 0) {
            left.push(right.pop());
            continue;
        }
        let l = left.pop();
        let r = right.pop();

        if (r > 0 || l < 0) {
            left.push(l, r);
        } else if (l + r > 0) {
            left.push(l);
        } else if (l + r < 0) {
            right.push(r);
        }
    }
    return left;
}

console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));
