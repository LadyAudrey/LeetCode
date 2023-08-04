const testArray3 = [37, 12, 28, 9, 100, 56, 80, 5, 12];
const testArray1 = [40, 10, 20, 30];
var arrayRankTransform = function (arr) {
  let newArray = arr.slice(0);
  newArray = newArray.sort((a, b) => {
    return a - b;
  });
  const solutionsArray = [];
  const numToRank = {};
  let count = 1;
  let i = 0;
  const keys = [];
  while (i <= newArray.length) {
    if (keys.includes(newArray[i])) {
      console.log(newArray[i]);
      i++;
      continue;
    }
    numToRank[newArray[i]] = count;
    keys.push(newArray[i]);
    count++;
    i++;
  }
  for (let j = 0; j < arr.length; j++) {
    solutionsArray.push(numToRank[arr[j]]);
  }
  return solutionsArray;
};

console.log(arrayRankTransform(testArray3));
