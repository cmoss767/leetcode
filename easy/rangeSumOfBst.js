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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    let totalSum = 0
    
    function dfs(node){
        if(!node){
            return
        }
        if(node.val >= low && node.val<= high){
            totalSum+=node.val
        }
        if(low<node.val){
            dfs(node.left)
        }
        
        if(high>node.val){
            dfs(node.right)
        }
    }
    dfs(root)
    return totalSum
};