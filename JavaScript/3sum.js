/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const failedText = [
  11, 2, -10, 12, -10, 11, 9, 4, 2, -9, -12, -4, 0, 8, -6, -5, 8, 5, -15, -14,
  -1, 14, -6, -12, 3, -5, 7, -3, 9, -8, -3, -3, 2, -6, -14, 7, 12, 11, -4, -9,
  -13, -1, 3, 2, -8, 12, 4, 7, -6, -4, 1, 8, -5, 10, 12, 13, 12, 4, -13, -2, 4,
  -9, 10, -9, -8, 4, 5, -11, 0, -13, -12, -6, -7, 6, 11, -7, -5, -8, -15, 4, 3,
  1, -11, 13, -12, 8, 3, 8, -10, 5, -9, 9, 11, 9, 7, 10, -2, -3, 14, 13,
];

var threeSum = function (nums) {
  // create solutionsArray
  const solutionsSet = new Set();
  // loop through to get first num
  for (let first = 0; first < nums.length; first++) {
    // loop through to get second num
    for (let second = 0; second < nums.length; second++) {
      // test if firstNum === secondNum (if so, continue)
      if (first === second) {
        continue;
      }
      // find desiredNum
      const desiredNum = -(nums[first] + nums[second]);
      // test if desired num is in the rest of the array
      if (nums.includes(desiredNum)) {
        // get index of desiredNum and compare against first and second
        const indexOfDesiredNum = nums.indexOf(desiredNum);
        // // test if indexofDesiredNum is the same as first or second
        if (indexOfDesiredNum === first || indexOfDesiredNum === second) {
          continue;
        }
        // test if desiredNum + first + second nums = 0
        if (nums[indexOfDesiredNum] + nums[first] + nums[second] === 0) {
          // // if it is,  add desiredNum to solutionSet as an Array to turn an array of sets into an array of arrays javascriptsolutionsArray
          const sortedTestString = [nums[first], nums[second], desiredNum]
            .sort((a, b) => {
              return a - b;
            })
            .join();
          solutionsSet.add(sortedTestString);
        }
      }
    }
  }
  // create solutinsArray
  const solutionsArray = [];
  // turn the strings in solutionsSet back into arrays
  console.log(solutionsSet);
  solutionsSet.forEach((example) => {
    test = example.split(",");
    solutionsArray.push(test);
  });
  return solutionsArray;
};

threeSum(failedText);
