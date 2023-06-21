/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
    const map=new Map();
    function check(name){
        let count=1;
        while(true){
            if(map.has(`${name}(${count})`)){
                count++;
            }else{
                return `${name}(${count})`;
            }
        }
    }
    names.forEach(name=>{
        if(!map.has(name)){
            map.set(name,1);
        }else{
            const nextName=check(name);
            map.set(nextName,1);
        }
    })
return [...map.keys()];
};