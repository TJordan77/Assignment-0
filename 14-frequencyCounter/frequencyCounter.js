function frequencyCounter(word) {
  const freq = {};

  for (let char of word) {
    freq[char] = (freq[char] || 0) + 1;
  }

  return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;
