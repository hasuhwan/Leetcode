/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const letter=[];
    const digit=[];

    logs.forEach(el=>{
        const temp=el.split(" ");
        const bool=temp.slice(1).some(el=>isNaN(el)===false);
        if(bool){
            digit.push(el);
        }else{
            letter.push(el);
        }
    })
    function deep(x,y,index){
        if(x[index]===undefined &&y[index]===undefined){
            if(x[0]>=y[0]){
                return 1;
            }else{
                return-1;
            }
        }else if(x[index]===undefined){
            return -1;
        }else if(y[index]===undefined){
            return 1;
        }
        if(x[index]===y[index]){
        return deep(x,y,index+1);
    }else if(x[index]>y[index]){
        return 1;
    }else{
        return -1;
    }
        
    }
letter.sort((a,b)=>{
    const x=a.split(" ");
    const y=b.split(" ");;
    if(x[1]===y[1]){
        return deep(x,y,2);
    }else if(x[1]>y[1]){
        return 1;
    }else{
        return -1;
    }
})
return [...letter,...digit];
};