/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    return (function isRoundTrip(node,arr){
        if(!node){
            return true;
        }
        arr.push(node.val);
        if(isRoundTrip(node.next,arr)){
            if(node.val===arr.shift()){
                return true;
            }
        }
        return false;
    })(head,[]);

};