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
    
    function dfs(node,arr){
        if(!node){
            return true;
        }
        arr.push(node.val);
        if(dfs(node.next,arr)){
            if(node.val===arr.shift()){
                return true;
            }
        }
        return false;
    }
    return dfs(head,[]);
};