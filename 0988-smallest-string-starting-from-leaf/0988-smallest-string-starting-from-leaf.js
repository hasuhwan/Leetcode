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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    function dfs(node,str){
    if(!node){
        return str;
    }
        const char=String.fromCharCode(node.val+97);
        if(!node.left){
            return dfs(node.right,char+str);
        }
        if(!node.right){
            return dfs(node.left,char+str);
        }
        const left=dfs(node.left,char+str);
        const right=dfs(node.right,char+str);
        
        return left>right?right:left;
    }
    return dfs(root,"");
};


