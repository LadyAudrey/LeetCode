const originalArray = [1, 2, 3, 4, 5, 6];
const m = 2;
const n = 3;

const construct2DArray = function (original, m, n) {
  // create newArray
  const newArray = [];
  // test if original is larger than m * n
  if (original.length !== m * n) {
    return [];
  }
  if (original.length === 1) {
    return [[original[0]]];
  }
  // create startIndex
  let startIndex = 0;
  // while startIndex is < original.length
  while (startIndex <= original.length - n) {
    // do n loops to create addOn array
    const addOn = [];
    for (let i = startIndex; i < n + startIndex; i++) {
      if (i === original.length) {
        break;
      }
      addOn.push(original[i]);
    }
    // push addOn to newArray
    newArray.push(addOn);
    // increment startIndex
    startIndex = startIndex + n;
  }
  return newArray;
};

console.log(construct2DArray(originalArray, m, n));
