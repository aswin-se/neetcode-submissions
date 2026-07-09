class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const setN = new Set(nums)
        return setN.size !== nums.length
    }
}
