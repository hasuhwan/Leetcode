/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    const obj={};
    votes.forEach((str)=>{
        for(let i=0; i<str.length; i++){
            if(!obj[str[i]]){
                obj[str[i]]=new Array(str.length).fill(0);
            }
                obj[str[i]][i]++;
        }
    });
    console.log(obj);
return Object.entries(obj).sort((a,b)=>{
    if(a[1][0]===b[1][0]){
        let index=1;
        while(a[1][index]===b[1][index]&&index<a[1].length){
            index++;
        }
        if(index<a[1].length){
            return b[1][index]-a[1][index];
        }else{
            return a[0] > b[0] ? 1 : -1;
        }
    }else{
        return b[1][0]-a[1][0];
    }
}).map(el=>el[0]).join("");

    
};