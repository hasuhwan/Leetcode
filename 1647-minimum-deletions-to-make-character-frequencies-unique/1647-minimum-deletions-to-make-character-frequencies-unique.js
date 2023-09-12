/**
 * @param {string} s
 * @return {number}
 */
//문자열 문자 갯수로 압축해야 한다
//갯수를 토대로 문자를 객체로 관리한다.
//변수로 객체의 키를 하나씩 다운 시킨다.현재 키와 차이를 엔서에 추가 한다.
//변수의 키가 0인 경우는 모든 문자를 삭제해야 한다고 생각해야 한다.
var minDeletions = function(s) {
    let answer=0;
    const charCount=new Map;
    const countOfChar=new Map();
    const extraCountOfChar=new Map();
    for(let i=0; i<s.length; i++){
        if(charCount.has(s[i])){
            charCount.set(s[i],charCount.get(s[i])+1);
        }else{
            charCount.set(s[i],1);
        }
    }
    for(let [char,count] of charCount.entries()){
        if(countOfChar.has(count)){
            countOfChar.get(count).push(char);
        }else{
            countOfChar.set(count,[char]);
        }
    }
    
    for(let [count,charArr] of countOfChar.entries()){
        if(charArr.length===1){
            continue;
        }
        let emptyCount=count-1;
        for(let i=1; i<charArr.length; i++){
                while(countOfChar.has(emptyCount)||extraCountOfChar.has(emptyCount)){
                    emptyCount--;
                }
            answer+=count-emptyCount;
            if(emptyCount!==0){
                extraCountOfChar.set(emptyCount,charArr[i]);
            }
            
        }
        
        
    }
    return answer;
};