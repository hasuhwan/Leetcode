/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const answer=[];
    const regexp=new RegExp(/[^\d]{1,}|\d{1,}/,"g");
    const arr=s.split(":").map(el=>{
        const temp=[...el.match(regexp)];
        
        return [temp[0].charCodeAt(),Number(temp[1])];
    });;
for(let i=arr[0][0]; i<=arr[1][0]; i++){
    for(let j=arr[0][1]; j<=arr[1][1]; j++){
        answer.push(String.fromCodePoint(i)+j);
    }
}
    return answer;
    
    
};