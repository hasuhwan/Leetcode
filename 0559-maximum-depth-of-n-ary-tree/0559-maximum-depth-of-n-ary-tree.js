/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
//dfs?
var maxDepth = function(root) {
   if(!root){
       return 0;
   }
    let max=0;
    for(let i=0; i<root.children.length; i++){
        const dep=maxDepth(root.children[i]);
        max=Math.max(max,dep);
    }
    return max+1;
    
};