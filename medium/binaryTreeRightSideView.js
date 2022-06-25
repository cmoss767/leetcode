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
 * @return {number[]}
 */
 var rightSideView = function(root) {
    let res = []
    
    function traverse(node, depth){
        if(!node){
            return
        }
        if(!res[depth]){
            res[depth]=node.val
        }
        traverse(node.right, depth+1)
        traverse(node.left, depth+1)
    }
    
    traverse(root,0)
    return res;
    
};