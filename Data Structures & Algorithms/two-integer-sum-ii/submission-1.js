class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
       const answer = [];
        for(var i = 0 ; i<numbers.length ; i++){
            let j = i+1
            while(numbers[i]+numbers[j] <= target && j<numbers.length){
                if(numbers[i]+numbers[j] === target){
                answer.push(i+1)
                answer.push(j+1)
                return answer
                }
                j++
            }
        }
        return answer;
    }
}
