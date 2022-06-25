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
    if(!root){
        return []
    }
    const result = []
    
    function findPath(node, currentPath){
        currentPath+=node.val
        
        if(!node.right && !node.left){
            result.push(currentPath)
        }
        
        if(node.left){
            findPath(node.left, currentPath + '->')
        }
        
         if(node.right){
            findPath(node.right, currentPath + '->')
        }
    }
    
    findPath(root, '')
    return result
    
};