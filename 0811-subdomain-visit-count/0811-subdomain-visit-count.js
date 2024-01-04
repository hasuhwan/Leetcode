/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const answer=[];
    const map=new Map();
    cpdomains.forEach(str=>{
        const [visit,domain]=str.split(" ");
        let curr="";
        const split=domain.split(".");
        for(let i=split.length-1; i>=0; i--){
            if(curr===""){
                curr=split[i];
            }else{
                curr=split[i]+"."+curr;
            }
            map.set(curr,(map.get(curr)||0)+Number(visit));
        }
    });
    return [...map.entries()].map(([domain,value])=>`${value} ${domain}`);
};