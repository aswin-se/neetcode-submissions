class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let totalCon=1;
        let productList = []
        let zeroIndexSet = new Set()
        for(var i in nums) {
            if(nums[i]===0){
                zeroIndexSet.add(i)
                continue;
            }
            totalCon = totalCon*nums[i]
        }
        for(var i in nums){
            if(zeroIndexSet.size === 0){
              productList.push(totalCon/nums[i])
              continue;
            }
            if(zeroIndexSet.has(i) && zeroIndexSet.size === 1){
                productList.push(totalCon)
                continue;
            } 
            productList.push(0)
        
        }
        return productList;
    }
}
