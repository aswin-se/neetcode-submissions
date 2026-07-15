class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n =height.length-1
        let leftMax = [0]
        let currentlMax = height[0];
        let currentRMax = height[n]
        let rightMax = new Array();
        let answer = 0;
        rightMax[n] = 0;
        for(var i = 1 ;  i<n ; i++){
            leftMax.push(currentlMax)
             if(height[i]>currentlMax){
                currentlMax = height[i];                
            }
       }
       for(var i=n-1;i>=0;i--){
        rightMax[i] = currentRMax;
        if(height[i]>currentRMax){
            currentRMax = height[i]
        }
       }
       for(var i =0 ;i<n;i++){
         if(leftMax[i]>height[i] && rightMax[i]>height[i]){
         const currentlvl = Math.min(leftMax[i],rightMax[i]) - height[i]
          answer = answer +  currentlvl
         }
       }
       return answer;
    }
}