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
var oddEvenList = function(head) {
    let odd=new ListNode();
    let even=new ListNode();
    let oddTemp=odd;
    let evenTemp=even;
    let depth=0;
    while(head){
        if(depth%2===0){
            evenTemp.next=new ListNode(head.val);
            evenTemp=evenTemp.next;
        }else{
            oddTemp.next=new ListNode(head.val);
            oddTemp=oddTemp.next;
        }
        head=head.next;
        depth++;
    }
    evenTemp.next=odd.next;
    return even.next;
};