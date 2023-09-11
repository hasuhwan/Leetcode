/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
    const obj={};
    messages.forEach((str,idx)=>{
        const len=str.split(" ").length;
        obj[senders[idx]]=(obj[senders[idx]]||0)+len;
    });
    return Object.entries(obj).sort((a,b)=>{
        if(a[1]===b[1]){
            return b[0]>a[0]?1:-1;
        }else{
            return b[1]-a[1];
        }
    })[0][0];
};