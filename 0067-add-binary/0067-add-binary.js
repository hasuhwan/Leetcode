/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let answer="";
    let nextAdd=0;
    const arrA=a.split("").map(str=>Number(str));
    const arrB=b.split("").map(str=>Number(str));
    
    let i=arrA.length-1;
    let j=arrB.length-1;
    
    while(i!==-1&&j!==-1){
        let add=arrA[i]+arrB[j]+nextAdd;
        if(add>=2){
            nextAdd=1;
            add-=2;
        }else{
        nextAdd=0;    
        }
        
        answer=add+answer;
        i--;
        j--;
    }
    while(i!==-1){
        let add=arrA[i]+nextAdd;
        if(add>=2){
            nextAdd=1;
            add-=2;
        }else{
        nextAdd=0;    
        }
        
        answer=add+answer;
        i--;
    }
    while(j!==-1){
        let add=arrB[j]+nextAdd;
        if(add>=2){
            nextAdd=1;
            add-=2;
        }else{
        nextAdd=0;    
        }
        
        answer=add+answer;
        j--;
    }
    
    return nextAdd?1+answer:answer;
};