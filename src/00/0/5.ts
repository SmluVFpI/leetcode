// 5. Longest Palindromic Substring
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:

// Input: "cbbd"
// Output: "bb"

export function manacher(s: string): string {
  let t = '$#';
  const sLength = s.length;
  for (let i = 0; i < sLength; i++) {
    t += s[i];
    t += '#';
  }
  const p: number[] = [];
  const tLength = t.length;
  let mx = 0;
  let id = 0;
  let resLength = 0;
  let resCenter = 0;
  for (let i = 0; i < tLength; i++) {
    p[i] = mx > i ? Math.min(p[2 * id - i], mx - i) : 1;
    while (t[i + p[i]] === t[i - p[i]]) {
      ++p[i];
    }
    if (mx < i + p[i]) {
      mx = i + p[i];
      id = i;
    }
    if (resLength < p[i]) {
      resLength = p[i];
      resCenter = i;
    }
  }
  return s.substr((resCenter - resLength) / 2, resLength - 1);
}
