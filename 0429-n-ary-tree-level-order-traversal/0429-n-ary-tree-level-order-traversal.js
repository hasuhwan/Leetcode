/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const map=new Map();
    if(!root){
        return [];
    }
    const queue=[[root,0]];
    while(queue.length!==0){
        const [node,dep]=queue.shift();
        if(!map.has(dep)){
            map.set(dep,[]);
        }
        map.get(dep).push(node.val);
        if(node.children.length!==0){
            node.children.forEach(child=>{
                queue.push([child,dep+1]);
            })
        }
    }
    return [...map.values()];
};