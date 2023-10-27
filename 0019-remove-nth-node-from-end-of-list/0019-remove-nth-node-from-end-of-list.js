/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let len=0;
    let countNode=head;
    while(countNode){
        len++;
        countNode=countNode.next;
    }
    const removeIdx=len-n;
    function dfs(node,count){
        if(count===removeIdx){
            return node.next;
        }
        node.next=dfs(node.next,count+1);
        return node;
    }
    return dfs(head,0);
};