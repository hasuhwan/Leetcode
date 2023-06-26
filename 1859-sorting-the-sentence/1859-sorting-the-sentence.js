/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const answer=s.split(" ").sort((a,b)=>parseInt(a.slice(-1))-parseInt(b.slice(-1))).map(el=>el.slice(0,el.length-1));
    return answer.join(" ");

};