/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    const queue=[root];
    let hasNull=false;
    while(queue.length!==0){
        const node=queue.shift();
        if(node===null){
            hasNull=true;
        }else{
            if(hasNull===true){
                return false;
            }
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    return true;
};