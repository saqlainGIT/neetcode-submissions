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
        // so the string gets broken down, and sorted and joined again,
        // so if tops and pots, are there then key will be same as "opst"
        // so we can set that key in the map and then store empty array as the value.
        // if the value is array then we can perform push or pop operation.
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
