class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const len = nums.length -1
        let uniqueMap = new Map();
        for (let val=0 ; val<=len;val++){
            if(uniqueMap.has(nums[val].toString())){
                
                return true
            }
            uniqueMap.set(nums[val].toString(),"registerd")
        }
        return false
    }
}