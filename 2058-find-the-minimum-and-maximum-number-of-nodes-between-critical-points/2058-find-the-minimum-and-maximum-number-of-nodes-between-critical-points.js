/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    const idxArr=[];
    let prev=head.val;
    let temp=head.next;
    let idx=2;
    while(temp.next){
        if((temp.val>prev&&temp.val>temp.next.val)||(temp.val<prev&&temp.val<temp.next.val)){
            idxArr.push(idx);
        }
        prev=temp.val;
        temp=temp.next;
        idx++;
    }
    if(idxArr.length<2){
        return [-1,-1];
    }
    const max=idxArr[idxArr.length-1]-idxArr[0];
    let min=max;
    for(let i=1; i<idxArr.length; i++){
        min=Math.min(min,idxArr[i]-idxArr[i-1]);
    }
    return [min,max];
};