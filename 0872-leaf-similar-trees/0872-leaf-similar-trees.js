/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leaf1=[];
    const leaf2=[];
    function dfs(node,arr){
        if(node===null){
            return;
        }
        if(node.left===null&&node.right===null){
            arr.push(node.val);
        }
        dfs(node.left,arr);
        dfs(node.right,arr);
    }
    dfs(root1,leaf1);
    dfs(root2,leaf2);
    if(leaf1.length!==leaf2.length){
        return false;
    }
    for(let [i,v] of leaf1.entries()){
        if(v!==leaf2[i]){
            return false;
        }
    }
    return true;
};


    