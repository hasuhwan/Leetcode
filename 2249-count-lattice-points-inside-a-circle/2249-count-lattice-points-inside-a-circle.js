/**
 * @param {number[][]} circles
 * @return {number}
 */
const countLatticePoints = (circles) => {
    let res = new Set();
    for (const [x, y, r] of circles) {
        for (let i = x - r; i <= x + r; i++) {
            for (let j = y - r; j <= y + r; j++) {
                if (inCircle(i, j, x, y, r)) res.add(i + ' ' + j); 
            }
        }
    }
    return res.size;
};

const inCircle = (x, y, cx, cy, r) => { 
    let disPow = Math.abs(x - cx) ** 2 + Math.abs(y - cy) ** 2;
    return disPow <= r * r;
};