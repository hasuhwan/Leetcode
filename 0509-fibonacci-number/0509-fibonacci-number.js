/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n===0){
        return 0;
    }else if(n===1){
        return 1;
    }
    const fibonacci=(function* (){
        let [pre,cur]=[0,1];
        while(true){
            [pre,cur]=[cur,pre+cur];
            yield cur;
        }
    }());
    let count=0;
    for(const num of fibonacci){
        console.log(num);
        if(count===n-2){
            return num;
        }
        count++;
    }
};