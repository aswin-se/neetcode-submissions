class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    if(nums.length===0) return 0;
    const numSet = new Set(nums)
    let maxLength = 0;

    for(var num of nums){
        if(numSet.has(num-1)) continue;

        let length = 1;
        let current = num;
        while(numSet.has(current+1)){
            current++
            length++
        }
        maxLength = Math.max(maxLength, length);
    }
    return maxLength;
}
}
