class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       const frequencyMap = new Map();
       let tempK=k
       const kFrequency = []
       for(var i in nums){
        if(frequencyMap.has(nums[i])){
            frequencyMap.set(nums[i],frequencyMap.get(nums[i])+1)
        }
        else
        {
            frequencyMap.set(nums[i],1)
        }
       }
       
       const bucket = Array.from({length:nums.length+1},()=>[])

       console.log(bucket)

       frequencyMap.forEach((key,val)=>{
       return bucket[key].push(val)
       })

       for(var i = bucket.length-1 ; i>=0 ; i--){
        if(tempK==0)
        break;
        kFrequency.push(...bucket[i])
        tempK = tempK-bucket[i].length
       }

       return kFrequency

    }
}