// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

// pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
// pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
// pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
// pairSum([1, 6, 7, 2], 13); // -> [1, 2]
// pairSum([9, 9], 18); // -> [0, 1]
// pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]

const pairSum = (array, target) => {
  // input: array of nums
  // output: array of indices

  let a = 0;
  let b = a + 1;

  while (a < array.length - 1) {
    const sum = array[a] + array[b];
    // const diff = target - array[a]

    // check the hash map for the diff
      // return if found

    // store the current difference in the hash map

    if (sum === target) {
      return [a,b]
    }

    if (b === array.length - 1) {
      a++;
      b = a + 1;
    } else {
      b++;
    }
  }
  return;
};

// console.log(pairSum([3, 2, 5, 4, 1], 8));
// // console.log('hello');
// console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
// console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]
console.log(pairSum([4, 7, 9, 2, 5, 1], 3)); // -> [3, 5]
console.log(pairSum([1, 6, 7, 2], 13)); // -> [1, 2]
console.log(pairSum([9, 9], 18)); // -> [0, 1]
console.log(pairSum([6, 4, 2, 8 ], 12)); // -> [1, 3]