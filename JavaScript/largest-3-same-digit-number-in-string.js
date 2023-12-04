// You are given a string num representing a large integer. An integer is good if it meets the following conditions:

//     It is a substring of num with length 3.
//     It consists of only one unique digit.

// Return the maximum good integer as a string or an empty string "" if no such integer exists.

// Note:

//     A substring is a contiguous sequence of characters within a string.
//     There may be leading zeroes in num or a good integer.

// Example 1:

// Input: num = "6777133339"
// Output: "777"
// Explanation: There are two distinct good integers: "777" and "333".
// "777" is the largest, so we return "777".

// Example 2:

// Input: num = "2300019"
// Output: "000"
// Explanation: "000" is the only good integer.

// Example 3:

// Input: num = "42352338"
// Output: ""
// Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.

const stringA = "6777133339";
const substringA = "777";

const stringB = "2300019";
const substringB = "000";

const stringC = "42352338";
const substringC = "";

const findLargestThree = (string) => {
  // create previousHighest variable
  let previousHighest = "";
  // loop through string
  for (let index = 0; index < string.length - 2; index++) {
    // test if index + 2 are all the same
    if (
      string[index] === string[index + 1] &&
      string[index + 1] === string[index + 2]
    ) {
      // if they are, test if > previousHighest, update as needed
      if (string[index] > previousHighest) {
        previousHighest = string[index];
      }
    }
  }
  return previousHighest + previousHighest + previousHighest;
};

console.log(findLargestThree(stringA) === substringA);
console.log(findLargestThree(stringB) === substringB);
console.log(findLargestThree(stringC) === substringC);
