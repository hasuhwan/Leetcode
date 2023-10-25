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
var insertGreatestCommonDivisors = function(head) {
    function gcd(num1,num2){
         while(num2 > 0){
            let r = num1 % num2;
            num1 = num2;
            num2 = r;
            }
        return num1;
    }
    let node=head;
    while(node.next){
        const front=node.val;
        const back=node.next.val;
        const next=node.next;
        const insert=new ListNode(gcd(front,back),next);
        node.next=insert;
        node=insert.next;
    }
    return head;
};
