/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const answer=[];
    function dupFunc(arr){
        const set=new Set(arr);
        return [...set];
    };
    const one=dupFunc(nums1);
    const two=dupFunc(nums2);
    const three=dupFunc(nums3);
    const sum=one.concat([...two,...three]);
    const map=new Map();
    sum.forEach(num=>{
        if(map.has(num)){
            const temp= map.get(num);
            if(temp===1){
                answer.push(num);
            }
            map.set(num,map.get(num)+1);
        }else{
            map.set(num,1);
        }
    });
    return answer;
};