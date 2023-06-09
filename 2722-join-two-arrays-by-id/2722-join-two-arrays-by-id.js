/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const answer=[];
    const obj={};
    arr1.forEach(el=>{
        obj[el.id]=el;
    })
    arr2.forEach(el=>{
        if(obj[el.id]){
            obj[el.id]={...obj[el.id],...el};
        }else{
            obj[el.id]=el;
        }
    })
for(let key in obj){
    answer.push(obj[key]);
}
    return answer;
};