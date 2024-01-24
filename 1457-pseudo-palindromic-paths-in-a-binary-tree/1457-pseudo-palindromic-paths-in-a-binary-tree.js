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
var pseudoPalindromicPaths  = function(root) {
    let answer=0;
    function dfs(node,map){
        if(!node.left&&!node.right){
            let odd=false;
            for(let v of map.values()){
                if(v%2!==0){
                    if(odd){
                        return;
                    }else{
                        odd=true;
                    }
                }
            }
            answer++;
            return;
        }
        if(node.left){
            map.set(node.left.val,(map.get(node.left.val)||0)+1);
            dfs(node.left,map);
            if(map.get(node.left.val)===1){
                map.delete(node.left.val);
            }else{
                map.set(node.left.val,map.get(node.left.val)-1);
            }
        }
        if(node.right){
            map.set(node.right.val,(map.get(node.right.val)||0)+1);
            dfs(node.right,map);
            if(map.get(node.right.val)===1){
                map.delete(node.right.val);
            }else{
                map.set(node.right.val,map.get(node.right.val)-1);
            }
        }
    }

    dfs(root,new Map([[root.val,1]]));
    return answer;
};