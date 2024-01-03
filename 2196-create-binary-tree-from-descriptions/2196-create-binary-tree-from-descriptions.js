/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
//find root val

var createBinaryTree = function(descriptions) {
    const map=new Map();
    const parentCandidateSet=new Set();
    descriptions.forEach(([parent,child,isLeft])=>{
        parentCandidateSet.add(parent);
        if(!map.has(parent)){
            map.set(parent,[]);
        }
        map.get(parent).push([child,isLeft]);
    });
    for(let arr of map.values()){
        arr.forEach(([val,_])=>{
            parentCandidateSet.delete(val);
        })
    }
    const root=new TreeNode(...parentCandidateSet);
    function dfs(node){
        const arr=map.get(node.val);
        if(arr!==undefined){
            arr.forEach(([val,isLeft])=>{
            if(isLeft){
                node.left=new TreeNode(val);
                dfs(node.left);
            }else{
                node.right=new TreeNode(val);
                dfs(node.right);
            }
        })
        }
        
    }
    dfs(root);
    return root;
};