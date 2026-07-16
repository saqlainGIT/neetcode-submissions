class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
            if (t.length > s.length) return "";

    const need = {};
    const window = {};

    // Build frequency map for t
    for (let ch of t) {
        need[ch] = (need[ch] || 0) + 1;
    }

    const required = Object.keys(need).length;

    let formed = 0;
    let left = 0;

    let minLength = Infinity;
    let start = 0;

    for (let right = 0; right < s.length; right++) {

        const ch = s[right];

        // Add current character
        window[ch] = (window[ch] || 0) + 1;

        // Requirement for this character just became satisfied
        if (
            need[ch] &&
            window[ch] === need[ch]
        ) {
            formed++;
        }

        // While window is valid, shrink it
        while (formed === required) {

            // Update best answer
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                start = left;
            }

            const leftChar = s[left];

            window[leftChar]--;

            // Removing this character broke the requirement
            if (
                need[leftChar] &&
                window[leftChar] < need[leftChar]
            ) {
                formed--;
            }

            left++;
        }
    }

    if (minLength === Infinity) {
        return "";
    }

    return s.substring(start, start + minLength);

    }
}
