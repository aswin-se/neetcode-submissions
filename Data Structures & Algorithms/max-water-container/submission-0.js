class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const n = heights.length;
        let l = 0;
        let r = n-1;
        let currentSum =0
        while(l<r){
            let w = r-l
            let currentArea = Math.min(heights[l],heights[r])*w
            currentSum = Math.max(currentSum , currentArea)
            if(heights[l]>heights[r]){
                r--;
            } else {
                l++
            }
        }
        return currentSum
    }
}