/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    const result = []
    
    for(let i = 0; i < nums.length;i++){
        let idx = Math.abs(nums[i]) - 1
        let val = nums[idx]
        
        if(val < 0){
            result.push(Math.abs(nums[i]))
        }else{
            nums[idx] = -nums[idx]
        }
    }
    return result
};