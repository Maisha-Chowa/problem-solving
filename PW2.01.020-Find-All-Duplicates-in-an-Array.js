function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = [];
    for (const element of arr) {
      if (seen.has(element)) {
        duplicates.push(element);
      } else {
        seen.add(element);
      }
    }
    return duplicates;
  }
  
  const myArray = [1, 2, 3, 4, 2, 7, 8, 8, 1];
  const duplicates = findDuplicates(myArray);
  console.log(duplicates); // Output: [2, 8, 1]
  