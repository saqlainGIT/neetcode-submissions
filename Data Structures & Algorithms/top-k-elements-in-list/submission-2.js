class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let freqMap = new Map();

        // Count frequency
        for (let num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        // Buckets
        let bucket = Array.from(
            { length: nums.length + 1 },
            () => []
        );

        // Place numbers into buckets
        for (let [num, freq] of freqMap) {
            bucket[freq].push(num);
        }

        let result = [];

        // Traverse from highest frequency
        for (let i = bucket.length - 1; i >= 0; i--) {

            for (let num of bucket[i]) {
                result.push(num);

                if (result.length == k) {
                    return result;
                }
            }
        }
    }
}