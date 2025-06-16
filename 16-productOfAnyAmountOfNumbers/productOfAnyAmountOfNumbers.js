function productOfAnyAmountOfNumbers(...args) {
  return args.reduce((product, num) => product * num, 1);
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
