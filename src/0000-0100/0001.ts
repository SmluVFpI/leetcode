// 1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have  exactly  one solution, and you may not use the  same  element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

export function twoSum(nums: number[], target: number): (number | undefined)[] {
  const res = [];
  const diffsMap = new Map<number, number>();
  const length = nums.length;
  let num: number;
  for (let i = 0; i < length; i++) {
    num = nums[i];
    const diff = target - num;
    if (diffsMap.has(diff)) {
      res[0] = diffsMap.get(diff);
      res[1] = i;
      break;
    }
    if (diffsMap.has(num)) {
      continue;
    }
    diffsMap.set(num, i);
  }
  return res;
}
