/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        if(functions.length===0){
            return x;
        }
        let answer=x;
        for(let i=functions.length-1; i>=0; i--){
            answer=functions[i](answer);
        }
        return answer;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */