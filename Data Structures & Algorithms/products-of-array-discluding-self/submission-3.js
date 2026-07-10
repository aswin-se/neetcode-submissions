class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const length = nums.length;
        let liftArray = []
        let rightArray =[]
        let resultArray=[]
        liftArray[0] =1
        for(var i = 1 ; i<length ; i++)
        {
            liftArray[i]=liftArray[i-1]*nums[i-1]
        }
        rightArray[length-1] = 1
        for(var i =length-2 ; i>=0 ;i--){
            rightArray[i] =rightArray[i+1]*nums[i+1]
        }
        for(var i = 0 ; i<length ; i++){
            resultArray[i]=liftArray[i]*rightArray[i]
        }

        return resultArray
        
    }
}
