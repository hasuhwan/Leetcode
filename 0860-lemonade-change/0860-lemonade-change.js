/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const map=new Map([[5,0],[10,0],[20,0]]);
    return bills.every(bill=>{
        if(bill===5){
            map.set(5,map.get(5)+1);
        }else if(bill===10){
            map.set(10,map.get(10)+1);
            const five=map.get(5);
            if(five>0){
                map.set(5,five-1);
            }else{
                return false;
            }
        }else{
            const five=map.get(5);
            const ten=map.get(10);
            if(five>0&&ten>0){
                map.set(5,five-1);
                map.set(10,ten-1);
            }else if(five>2){
                map.set(5,five-3);
            }else{
                return false;
            }
        }
        return true;
    })
};