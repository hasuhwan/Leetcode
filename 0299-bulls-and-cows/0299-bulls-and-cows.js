/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const visitedG=new Array(secret.length).fill(false);
    const visitedS=new Array(secret.length).fill(false);
    let A=0;
    let B=0;
    for(let i=0; i<secret.length;i++){
        if(secret[i]===guess[i]){
            A++;
            visitedG[i]=true;
            visitedS[i]=true;
        }
    }
    for(let i=0; i<secret.length; i++){
        if(visitedS[i]===true){
            continue;
        }
        const index=guess.indexOf(secret[i]);
        if(index!==-1&&visitedG[index]===false){
            B++;
            visitedG[index]=true;
        }else if(index!==-1){
            let pointer=index+1;
            while(pointer!==guess.length){
                if(guess[pointer]===secret[i]&&visitedG[pointer]===false){
                    B++;
                    visitedG[pointer]=true;
                    break;
                }
                pointer++;
            }
        }
    }
    return A+"A"+B+"B"
};