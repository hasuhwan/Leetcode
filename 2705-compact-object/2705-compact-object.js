/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(Array.isArray(obj)){
        return obj.map(el=>compactObject(el)).filter(el=>el);
    }else if(typeof obj==="object"&&obj!==null){
        const temp={};
        for(let [k,v] of Object.entries(obj)){
            if(v){
                temp[k]=compactObject(v);
            }
        }
        return temp;
    }
    return obj;
};