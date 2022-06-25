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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    let res = false
    
    function helper(node, currentSum){
        if(!node || res){
            return
        }
        
        currentSum += node.val
        
        if(!node.left && !node.right && currentSum === targetSum){
            res = true
        }
        
        helper(node.left, currentSum)
        helper(node.right, currentSum)
    }
    
    helper(root, 0)
    return res
};