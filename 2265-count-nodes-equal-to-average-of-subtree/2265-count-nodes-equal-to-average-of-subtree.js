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
var averageOfSubtree = function(root) {
    let answer=0;
    function dfs(node){
        if(!node){
            return [0,0];
        }
        const [leftVal,leftCount]=dfs(node.left);
        const [rightVal,rightCount]=dfs(node.right);
        const sum=node.val+leftVal+rightVal;
        const count=1+leftCount+rightCount;
        
        if(Math.floor(sum/count)===node.val){
            answer++;
        }
        return [sum,count];
    }
    dfs(root);
    return answer;
};