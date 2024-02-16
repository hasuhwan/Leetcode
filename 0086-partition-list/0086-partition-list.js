/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const lowList=new ListNode();
    let lowCurr=lowList;
    const highList=new ListNode();
    let highCurr=highList;
    while(head){
        const temp=head.val;
        if(temp<x){
            lowCurr.next=new ListNode(temp);
            lowCurr=lowCurr.next;
        }else{
            highCurr.next=new ListNode(temp);
            highCurr=highCurr.next;
        }
        head=head.next;
    }
    lowCurr.next=highList.next;
    return lowList.next;
};