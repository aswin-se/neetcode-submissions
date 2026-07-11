class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length===1) return true;
        let i = 0
        let j=s.length-1
        while(i<j)
        {
            while(!/[a-zA-Z0-9]/.test(s[i])) {
                 if(i==j) return true;
                i++
            }
            while(!/[a-zA-Z0-9]/.test(s[j])) {
                j--
            }
            if(s[i].toLowerCase()===s[j].toLowerCase()){
                j--;
                i++
                continue;
            }  else {
                return false
            }
        
        }
        return true
    }
}
