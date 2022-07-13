/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
    const result = []
    
    const nums = []
    for(let i = 1; i <= 9;i++) nums.push(i)
    
    const dfs = (i, nums, k, n, slate) =>{
        
        if(n < 0) return
        
        if(slate.length === k){
            if(n === 0){
                result.push(slate.slice())
            }
            return
        }
        
        for(let j = i;j < nums.length;j++){
            slate.push(nums[j])
            dfs(j + 1, nums, k, n - nums[j], slate)
            slate.pop()
        }
    }
    
    dfs(0, nums, k, n, [])
    return result
    
};