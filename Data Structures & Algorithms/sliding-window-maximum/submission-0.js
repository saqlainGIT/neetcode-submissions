class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deque = []; // Stores indices
        const result = [];

        for (let right = 0; right < nums.length; right++) {

            // Remove indices that are outside the current window
            while (deque.length && deque[0] <= right - k) {
                deque.shift();
            }

            // Remove all smaller elements from the back
            while (
                deque.length &&
                nums[deque[deque.length - 1]] < nums[right]
            ) {
                deque.pop();
            }

            // Add current index
            deque.push(right);

            // Record the maximum once the first window is complete
            if (right >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }
}