const testArray = [2, 3, 4, 2, 4, 63, 7]

var findDuplicates = function(nums) {
    // create testingSet
    const testingSet = new Set();
    // create solutionsArray
    const solutionArray = [];
    // loop through nums to get to i indexing
    for(let i = 0; i < nums.length; i++){
        // test if nums[i] is in testingSet
        if(testingSet.has(nums[i])){
            // if it ,is, add it to solutionsArray
            solutionArray.push(nums[i])
        } else {
            // if it's not, add it to testingSet
            testingSet.add(nums[i])
        }
    }
    return solutionArray
};

console.log(findDuplicates(testArray))