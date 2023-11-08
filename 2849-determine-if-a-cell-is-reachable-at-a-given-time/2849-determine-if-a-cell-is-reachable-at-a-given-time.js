/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    if(sx===fx&&sy===fy&&t===1){
        return false;
    }
    const absx=Math.abs(sx-fx);
    const absy=Math.abs(sy-fy);
    if(absx>absy){
        return absx<=t;
    }
    return absy<=t;
};