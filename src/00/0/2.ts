// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

export function addTwoNumbers(nums1: number[], nums2: number[]): number[] {
  const res: number[] = [];
  const length = nums1.length > nums2.length ? nums1.length : nums2.length;
  let current = 0;
  let carry = 0;
  for (let i = 0; i < length; i++) {
    current = (nums1[i] || 0) + (nums2[i] || 0) + carry;
    if (current > 9) {
      current = current - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    res.push(current);
  }
  if (carry === 1) {
    res.push(1);
  }
  return res;
}
