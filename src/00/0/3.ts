// 3. Longest Substring Without Repeating Characters

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a _subsequence_ and not a substring.

export function lengthOfLongestSubstring(s: string): number {
  let res = 0;
  const charMap = new Map();
  const length = s.length;
  let char = "";
  let left = -1;
  for (let i = 0; i < length; i++) {
    char = s[i];
    if (charMap.has(char) && charMap.get(char) > left) {
      left = charMap.get(char);
    }
    charMap.set(char, i);
    res = Math.max(res, i - left);
  }
  return res;
}
