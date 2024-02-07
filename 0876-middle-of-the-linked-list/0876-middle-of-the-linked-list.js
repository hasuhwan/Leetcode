/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let len=0;
    let temp=head.next;
    while(temp){
        temp=temp.next;
        len++;
    }
    let mid=Math.ceil(len/2);
    let curr=head;
    while(mid!==0){
        curr=curr.next;
        mid--;
    }
    return curr;
};