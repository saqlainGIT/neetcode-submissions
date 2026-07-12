class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    let map = new Map();

    // Store every unique number
    for (let num of nums) {
        map.set(num, true);
    }

    let longest = 0;

    for (let [num] of map) {

        // Is this the start of a sequence?
        if (!map.has(num - 1)) {

            let current = num;
            let length = 1;

            while (map.has(current + 1)) {
                current++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;

    }
}
