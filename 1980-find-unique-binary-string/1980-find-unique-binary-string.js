/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const len=nums.length;
    const arr=[];
    function dfs(str){
        if(str.length===len){
            arr.push(str);
            return;
        }
        dfs(str+1);
        dfs(str+0);
    };
    dfs("");
    console.log(arr);
    for(let i=0; i<arr.length; i++){
        if(!nums.includes(arr[i])){
            return arr[i];
        }
    }
};