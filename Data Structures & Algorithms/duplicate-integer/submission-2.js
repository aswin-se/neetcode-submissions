class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const setN = new Set(nums)
        if(setN.size === nums.length){
            return false
        }
        return true
    }
}
