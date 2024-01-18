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
    function getNumStr(node){
        if(!node){
            return "";
        }
        return node.val+getNumStr(node.next);
    }
    const str1=getNumStr(l1).split("").map(el=>Number(el));
    const str2=getNumStr(l2).split("").map(el=>Number(el));;
    let i=0;
    let j=0;
    let plus=0;
    const sumArr=[];
    while(i<str1.length&&j<str2.length){
        const sum=str1[i]+str2[j]+plus;
        sumArr.push(sum%10);
        plus=Math.floor(sum/10);
        i++;
        j++;
    }
    while(i<str1.length){
        const sum=str1[i]+plus;
        sumArr.push(sum%10);
        plus=Math.floor(sum/10);
        i++;
    }
    while(j<str2.length){
        const sum=str2[j]+plus;
        sumArr.push(sum%10);
        plus=Math.floor(sum/10);
        j++;
    }
    if(plus!==0){
        sumArr.push(1);
    }
    const list=new ListNode();
    let temp=list;
    let k=0;
    while(k<sumArr.length){
        temp.next=new ListNode(sumArr[k]);
        temp=temp.next;
        k++;
    }
    return list.next;
    
};