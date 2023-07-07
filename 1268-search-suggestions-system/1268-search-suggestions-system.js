/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    const answer=[];
    products.sort();
    let arr=products;
    for(let i=0; i<searchWord.length; i++){
        arr=arr.filter((el)=>{
            if(el[i]===searchWord[i]){
                return true;
            }else{
                return false;
            }
        });
        answer.push(arr.slice(0,3));
    }
    return answer;
};