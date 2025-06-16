function setUnionOfAnyAmountOfSets(...args) {
  const result = new Set();
  
  for (const set of args) {
    for (const value of set) {
      result.add(value);
    }
  }

  return result;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
