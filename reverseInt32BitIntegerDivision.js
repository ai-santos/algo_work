const reverse = (val) => {
  if(val === 0) {
      return 0;
  }
  let isNegative = false;
  if(Math.sign(val) === -1) {
    isNegative = true;
    val = Math.abs(val);
  }
  let lastDigit, currentDigit, reversedInt;
  let numArr = [];
    while(val >= 1) {
      currentDigit = val % 10;
      val = Math.floor(val/10)      
      numArr.push(currentDigit);
    }
  reversedInt = parseInt(numArr.join(''));
  if(reversedInt > Math.pow(2, 31) - 1 || reversedInt < Math.pow(-2, 31)) {
      return 0;
  }
  if(isNegative) {
    return -1 * reversedInt;
  }
  return reversedInt
}