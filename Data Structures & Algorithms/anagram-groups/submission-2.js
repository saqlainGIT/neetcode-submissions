class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map= new Map();
       for(let str of strs)
       {
        let key = str.split("").sort().join("");
        if(!map.has(key))
       {
        map.set(key,[]);
       }
// cuz the first run returns an array so it implements the push actions.
       map.get(key).push(str);  
       }

       return Array.from(map.values());
 
    }
}
