class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       const frequencyMap = new Map();
       for(var i in nums){
        if(frequencyMap.has(nums[i])){
            frequencyMap.set(nums[i],frequencyMap.get(nums[i])+1)
        }
        else
        {
            frequencyMap.set(nums[i],1)
        }
       }
       
       const kFrequency =[]
       
        frequencyMap.forEach((key,val)=>{
       return kFrequency.push([val , key])
       })

       return  kFrequency.sort((a, b) => b[1] - a[1]).slice(0,k).map(item => item[0])
    }
}