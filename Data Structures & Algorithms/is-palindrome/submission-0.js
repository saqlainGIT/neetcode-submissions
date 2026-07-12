class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left= 0;
        let right= s.length-1;

        while(left<right)
        {
            while(left<right && !this.isAlphanumeric(s[left]))
            {
                left++;  // here we have skipped non alphanumeric characters from the left.
            }
            while(right>left && !this.isAlphanumeric(s[right]))
            {
                right--;  // Here we have skipped non alphanumeric characters from the right.
            }

            if (s[left].toLowerCase() != s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }
        return true;
    }
        isAlphanumeric(char)
        {
            const code = char.charCodeAt(0);
            return (
                (code>=48 && code<=57) || //0-9
                (code>=65 && code<=90) || //A-Z
                (code >= 97 && code<=122) //a-z
            );
        }
}
