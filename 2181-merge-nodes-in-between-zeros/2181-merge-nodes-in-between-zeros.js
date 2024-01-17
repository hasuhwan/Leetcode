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
var mergeNodes = function(head) {
    const list=new ListNode();
    let temp=list;
    let sum=0;
    head=head.next;
    while(head){
        if(head.val===0){
            temp.next=new ListNode(sum);
            temp=temp.next;
            sum=0;
        }else{
            sum+=head.val;
        }
        head=head.next;
    }
    return list.next;
};