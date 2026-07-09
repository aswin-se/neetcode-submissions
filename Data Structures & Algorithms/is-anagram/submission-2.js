class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length)
        return false
        const sMap = new Map()
        for (const val of s){
            if(sMap.has(val))
            {
                sMap.set(val,sMap.get(val)+1)
            }
            else {
                 sMap.set(val,1)
            }
        }

        console.log(sMap)

        for (const val of t ){
            if(!sMap.has(val))
            {
                return false
            }
            if(sMap.get(val)>1){
                sMap.set(val , sMap.get(val)-1)
            }
            else {
                sMap.delete(val)
            }
        }

        if(sMap.size === 0) return true
        return false
    }
}