/**
 * @param {Function} fn
 */
function memoize(fn) {
    const cache={};
    return function(...args) {
        const json=JSON.stringify(args);
        if(cache[json]!==undefined){
            return cache[json];
        }
        const res=fn(...args);
        cache[json]=res;
        return res;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */