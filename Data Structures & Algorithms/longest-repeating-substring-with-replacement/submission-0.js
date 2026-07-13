class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

      let maxLength = 0;
      let left=0;
      let mostFreq=0;
      let count ={};
      for(let right=0; right<s.length;right++)
      {
        count[s[right]] = (count[s[right]] || 0)+1; // adding the current element;

        mostFreq= Math.max(mostFreq, count[s[right]]); // Calculating the most freqElement.

        while((right-left+1)-mostFreq > k)
        {
            count[s[left]]--;
            left++;
        }
        maxLength = Math.max(maxLength,(right-left+1));

      }

      return maxLength;
    }
}

        /*
========================================
        The Magic Formula
========================================

In every iteration, ask only ONE question:

    (Window Length - Most Frequent Character Count) <= k ?

If the answer is YES:
    → Expand the window (right++)

If the answer is NO:
    → Shrink the window (left++)

That's the entire algorithm.
*/

/*
========================================
      Sliding Window Pattern
========================================

Whenever a problem mentions:
  • Longest substring
  • At most K changes
  • At most K replacements
  • At most K flips
  • At most K zeros

Your first thought should be:

    "Can I solve this using a Sliding Window?"

Then ask yourself three questions:

1. What makes my window VALID?
2. When does it become INVALID?
3. How do I make it VALID again?

For "Longest Repeating Character Replacement":

✔ Valid Window:
    (windowLength - maxFrequency) <= k

✘ Invalid Window:
    (windowLength - maxFrequency) > k

Fix:
    Move the left pointer forward until the window
    becomes valid again.

That's the core sliding window pattern.
*/

// let left = 0;

// for (let right = 0; right < n; right++) {

//     // 1. Add current element to the window

//     // 2. Update any data structure (frequency map, sum, etc.)

//     // 3. While the window is invalid:
//     //      Remove the left element
//     //      Move left++

//     // 4. Update the answer
// }