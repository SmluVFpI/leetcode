// 4. Median of Two Sorted Arrays

// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0

// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

function divide(num1: number, num2: number): number {
  return Math.floor(num1 / num2);
}

function divideBy2(num1: number): number {
  return divide(num1, 2);
}

function findKth(
  nums1: number[],
  i: number,
  nums2: number[],
  j: number,
  k: number
): number {
  const m = nums1.length;
  const n = nums2.length;
  if (i >= m) {
    return nums2[j + k - 1];
  }
  if (j >= n) {
    return nums1[i + k - 1];
  }
  if (k === 1) {
    return Math.min(nums1[i], nums2[j]);
  }
  const mMid = i + divideBy2(k) - 1;
  const nMid = j + divideBy2(k) - 1;
  const midVal1 = mMid < m ? nums1[mMid] : Number.MAX_SAFE_INTEGER;
  const midVal2 = nMid < n ? nums2[nMid] : Number.MAX_SAFE_INTEGER;
  const kMid = k - divideBy2(k);
  if (midVal1 < midVal2) {
    return findKth(nums1, mMid + 1, nums2, j, kMid);
  } else {
    return findKth(nums1, i, nums2, nMid + 1, kMid);
  }
}

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const m = nums1.length;
  const n = nums2.length;
  const left = divideBy2(m + n + 1);
  const right = divideBy2(m + n + 2);
  return (
    (findKth(nums1, 0, nums2, 0, left) + findKth(nums1, 0, nums2, 0, right)) / 2
  );
}
