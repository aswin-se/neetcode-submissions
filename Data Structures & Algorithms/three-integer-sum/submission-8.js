class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let answer = [];
        nums.sort((a, b) => a - b);
        for(var i = 0 ; i<nums.length ; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
           continue;
           }
                let l = i+1 , r =nums.length-1
                while(l<r){
                    const currentSum = nums[i]+nums[l]+nums[r];
                    if(currentSum<0){
                        l++
                    }
                    else if(currentSum>0){
                        r--
                    } else {
                        answer.push([nums[i],nums[l],nums[r]])
                        while (l < r && nums[l] == nums[l + 1]){
                            l++
                        }
                         while (l < r && nums[r] == nums[r - 1]){
                            r--
                         }
                       l++;
                       r--;
                }
            }
    }
        return answer
}
}
