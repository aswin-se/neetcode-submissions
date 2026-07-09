class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const uniqueMap = new Map();
        for(var i in strs){
            const signature = strs[i].split("").sort().join();
            if(uniqueMap.has(signature)){
                let currentList = uniqueMap.get(signature)
                currentList.push(strs[i])
                uniqueMap.set(signature , currentList)
            } else {
                uniqueMap.set(signature , [strs[i]])
            }
        }
       return [...uniqueMap.values()];
    }
}
