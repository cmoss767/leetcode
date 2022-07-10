/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const hash = {}
    
    for(let i = 0;i < nums.length;i++){
        let val = nums[i]
        hash[val] = i
    }
    
    for(let i = 0;i < nums.length;i++){
        let potentialKey = target - nums[i]
        
        if(hash[potentialKey] && hash[potentialKey] !== i){
            return [i, hash[potentialKey]]
        }
    }
};