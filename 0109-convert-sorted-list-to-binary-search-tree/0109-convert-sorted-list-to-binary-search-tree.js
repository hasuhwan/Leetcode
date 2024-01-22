/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    const arr=[];
    while(head){
        arr.push(head.val);
        head=head.next;
    }
    function sortedArrayToBST(nums) {
    if(nums.length===0){
        return null;
    }
    if(nums.length===1){
        return new TreeNode(nums[0]);
    }
    const pivot=Math.floor(nums.length/2);
    const tree=new TreeNode(nums[pivot]);
    const left=nums.slice(0,pivot);
    const right=nums.slice(pivot+1);
    tree.left=sortedArrayToBST(left);
    tree.right=sortedArrayToBST(right);
    return tree;
};
    return sortedArrayToBST(arr);
};