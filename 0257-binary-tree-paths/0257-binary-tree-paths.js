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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const answer=[];
    function dfs(node,arr){
        if(!node.left&&!node.right){
            arr.push(node.val);
            answer.push(arr.join("->"));
            arr.pop();
            return;
        }
        if(node.left){
            arr.push(node.val);
         dfs(node.left,arr);   
            arr.pop()
        }
        if(node.right){
            arr.push(node.val);
        dfs(node.right,arr);    
            arr.pop()
        }
        
        
    }
    dfs(root,[]);
    return answer;
};