/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
     function sumFunc(nums){
         const sum=[0,0];
        nums.forEach(el=>{
            if(el===0){
                sum[1]++;
            }else{
                sum[0]+=el;
            }
        });
         return sum;
    }
    const [sum1,zero1]=sumFunc(nums1);
    const [sum2,zero2]=sumFunc(nums2);
   const total1=sum1+zero1;
    const total2=sum2+zero2;
    if(total1===total2){
        return total1;
    }else if(total1>total2){
        return zero2>0?total1:-1;
    }else{
        return zero1>0?total2:-1;
    }
};