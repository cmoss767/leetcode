/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
    let result = 0
    
    const dfs = (i, nums, target, runningSum) => {
        
        if(i === nums.length){
            if(runningSum === target){
                result++
            }
            return
        }
        
        runningSum += nums[i]
        dfs(i + 1, nums, target, runningSum)
        runningSum -= nums[i]
        
        runningSum -= nums[i]
        dfs(i + 1, nums, target, runningSum)
        runningSum += nums[i]
    }
    
    dfs(0, nums, target, 0)
    return result
    
};