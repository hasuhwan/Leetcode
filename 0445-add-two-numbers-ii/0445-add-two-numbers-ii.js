/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const arr1=[];
    const arr2=[];
    const res=[];
    function insertValueFunc(list,arr){
        let temp=list;
        while(temp){
            arr.push(temp.val);
            temp=temp.next;
        }
    }
    insertValueFunc(l1,arr1);
    insertValueFunc(l2,arr2);
    let add=0;
    let i=arr1.length-1;
    let j=arr2.length-1;
    
    while(i!==-1&&j!==-1){
        let sum=arr1[i]+arr2[j]+add;
        add=Math.floor(sum/10);
        sum=sum%10;
        res.unshift(sum);
        i--;
        j--;
    }
    while(i!==-1){
        let sum=arr1[i]+add;
        add=Math.floor(sum/10);
        sum=sum%10;
        res.unshift(sum);
        i--;
    }
     while(j!==-1){
        let sum=arr2[j]+add;
        add=Math.floor(sum/10);
        sum=sum%10;
         res.unshift(sum);
        j--;
    }
    if(add!==0){
        res.unshift(add);
    }
    let idx=0;
    const list=new ListNode();
    let temp=list;
    while(idx<res.length){
        temp.next=new ListNode(res[idx]);
        temp=temp.next;
        idx++;
    }
    return list.next;
   
};