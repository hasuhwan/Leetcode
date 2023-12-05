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
var getMinimumDifference = function(root) {
    const valueArr=[];
    function dfs(node){
        if(!node){
            return;
        }
        dfs(node.left);
        valueArr.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    let min=Infinity;
    for(let i=1; i<valueArr.length; i++){
        min=Math.min(min,valueArr[i]-valueArr[i-1]);
    }
    return min;
};