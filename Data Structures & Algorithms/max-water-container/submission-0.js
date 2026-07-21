class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxWater = 0;

        while (left < right) {
            // Width between the two lines
            const width = right - left;

            // Height is limited by the shorter line
            const height = Math.min(heights[left], heights[right]);

            // Calculate current area
            const area = width * height;

            // Update maximum area
            maxWater = Math.max(maxWater, area);

            // Move the pointer with the shorter line
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxWater;
    }
}