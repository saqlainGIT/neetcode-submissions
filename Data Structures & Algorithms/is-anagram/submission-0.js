class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map();
        let map2= new Map();
        for(let i =0; i<s.length;i++)
        {
            map.set(s[i],(map.get(s[i]) || 0) + 1);
        }

        for(let j=0; j<t.length; j++)
        {
            map2.set(t[j],(map2.get(t[j]) || 0) + 1);
        }
        if(map.size!==map2.size)
        {
            return false;
        }

        for(let[key, value] of map)
        {
            if(map2.get(key) !== value)
            {
                return false;
            }
        }
        return true;


    }
}