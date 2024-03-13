function findMajorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  // Verification step: Check if the candidate is indeed the majority element
  count = 0;
  for (const num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  return count > nums.length / 2 ? candidate : null;
}

const arr = [2, 2, 1, 1, 1, 2, 2];
const majority = findMajorityElement(arr);
console.log(majority);
