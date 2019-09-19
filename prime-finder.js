module.exports = function(n) {
  // do work \
  let counter = 1;
  let primeNum = 2;
  if (primeNum === 2) {
    return primeNum;
  }
  primeNum++;
  do {} while (counter < n);
  return primeNum;
};
