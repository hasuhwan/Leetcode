/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    const arr=[];
    while(head){
        arr.push(head.val);
        head=head.next;
    }
    let answer=0;
    const len=arr.length;
    for(let i=0; i<len/2; i++){
        answer=Math.max(answer,arr[i]+arr[len-1-i]);
    }
    return answer;
};