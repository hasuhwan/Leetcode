/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const obj={};
    this.forEach(el=>{
        const temp=fn(el);
        if(obj[temp]){
            obj[temp].push(el);
        }else{
            obj[temp]=[el];
        }
    })
    return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */