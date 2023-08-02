/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
//97 122
var decodeMessage = function(key, message) {
    let code=97;
    const obj={};
    key=key.split(" ").join("");
    for(let i=0; i<key.length; i++){
        if(!obj[key[i]]){
            obj[key[i]]=String.fromCharCode(code);
            code++;
        }
    }
    let answer="";
    for(let i=0; i<message.length; i++){
        if(message[i]===" "){
            answer+=" ";
        }else{
            answer+=obj[message[i]];
        }
    }
    return answer;
};