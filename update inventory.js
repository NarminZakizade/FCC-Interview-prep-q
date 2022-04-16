function sortArray(x, y) {
  if (x[1] < y[1]) {
    return -1;
  }
  if (x[1] > y[1]) {
    return 1;
  }
}
function updateInventory(arr1, arr2) {
  var result = [];
  var hashTable = {};
  arr1.map((x) => (hashTable[x[1]] = x[0]));
  arr2.map((y) =>
    Object.keys(hashTable).includes(y[1])
      ? (hashTable[y[1]] += y[0])
      : (hashTable[y[1]] = y[0])
  );
  for (let i = 0; i < Object.values(hashTable).length; i++) {
    result.push([Object.values(hashTable)[i], Object.keys(hashTable)[i]]);
  }

  var res = result.sort(sortArray);
  return res;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
