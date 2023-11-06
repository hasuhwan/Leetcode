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
 * @return {number}
 */
var countNodes = function(root) {
    let answer=0;
    const queue=[root];
    while(queue.length!==0){
        const temp=queue.shift();
        if(!temp){
            continue;
        }
        answer++;
        queue.push(temp.left);
        queue.push(temp.right);
    }
    return answer;
};