function pairwise(arr, arg) {
  var sum = 0;
  var usedIndexes = []; //to save indexes that have been used so that they will not reused later
  var foundIndex;
  for (let i = 0; i < arr.length; i++) {
    if (!usedIndexes.includes(i) && arr.slice(i + 1).includes(arg - arr[i])) {
      foundIndex =
        arr.slice(i + 1).findIndex((x) => x === arg - arr[i]) + i + 1;
      if (!usedIndexes.includes(foundIndex)) {
        usedIndexes.push(foundIndex);
        sum = sum + foundIndex + i;
      } else {
        foundIndex =
          arr.slice(foundIndex + 1).findIndex((x) => x === arg - arr[i]) +
          foundIndex +
          1;
        while (!usedIndexes.includes(foundIndex)) {
          sum = sum + foundIndex + i;
          usedIndexes.push(foundIndex);
        }
      }
    }
  }
  return sum;
}
// pairwise([1,4,2,3,0,5], 7)
