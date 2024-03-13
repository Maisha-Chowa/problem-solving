// function removeDuplicates(arr) {
//     return [...new Set(arr)];
//   }

//   const myArray = [0,1, 1, 2, 2, 3, 4, 4, 5];
//   const uniqueArray = removeDuplicates(myArray);
//   console.log(uniqueArray);

function removeDuplicates(arr) {
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return j + 1; // return new array length
}

const myArray = [1, 1, 2, 2, 3, 4, 4, 5];
const newArrayLength = removeDuplicates(myArray);
console.log(myArray.slice(0, newArrayLength)); // [1, 2, 3, 4, 5]
