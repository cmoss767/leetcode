/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const ht = {}
    
    for(const num of nums){
        ht[num] = ht[num]+1 || 1
    }
    
    for(const key in ht){
        if(ht[key]> Math.floor(nums.length/2)){
            return key
        }
    }
};