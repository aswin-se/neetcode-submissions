class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const remainingPairsMap = new Map
        for(var i in nums){
              if(remainingPairsMap.has(nums[i]))
            {
                return [Number(i),Number(remainingPairsMap.get(nums[i]))].sort()
            }
            else {
             const balance = target - nums[i];
                remainingPairsMap.set(balance , i)
            }
        }
    }
}
