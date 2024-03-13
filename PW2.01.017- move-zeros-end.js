function moveZeroes(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap non-zero element with current element
      j++;
    }
  }
}

// Example usage:
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]

// function moveZeroes(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       let x = nums[i];
//       console.log(x);
//       nums[i] = nums[i++];
//       console.log(nums[i]);
//       nums[i++] = x;
//       console.log(nums[i++]);
//     }
//   }
// }

// // Example usage:
// const nums = [1, 0, 3, 12];
// moveZeroes(nums);
// console.log(nums); // Output: [1, 3, 12, 0, 0]
