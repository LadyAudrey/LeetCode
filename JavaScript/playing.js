var arrayRankTransform = function(arr) {
  const newArray = arr.slice(0).sort();
  const solutionsArray = [];
  const numToRank = {};
  for(let i = 0; i < newArray.length; i++){
      if(newArray[i] in numToRank){
          continue
      }
      numToRank[newArray[i]] = i + 1;
  }
  console.log(numToRank)
  for(let i = 0; i < arr.length; i++){
      solutionsArray.push(numToRank[arr[i]])
      // console.log(numToRank[arr[i]], arr[i])
  }
  return solutionsArray
};