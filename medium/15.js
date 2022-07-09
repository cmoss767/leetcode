/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 const twoSum = (j, target, nums) => {
    let k = nums.length - 1
    let result = []
    
    while(j < k){
        let leftVal = nums[j]
        let rightVal = nums[k]
        
        if(leftVal + rightVal > target){
            k--
        }else if(leftVal + rightVal < target){
            j++
        }else{
            result.push([(target * -1), leftVal, rightVal])
            while(j < k && nums[j] === nums[j + 1]) j++
            while(j < k && nums[k] === nums[k - 1]) k--
            j++
            k--
        }
    }
    
    return result
}