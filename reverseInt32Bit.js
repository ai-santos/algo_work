const reverse = (x) => {
    let newStr = '';
    let strVal = x.toString();
    if(strVal[0] === '-') {
        for(let i = strVal.length - 1; i >= 0; i--) {
            newStr += strVal[i];
        }
        let substr = newStr.substring(0, newStr.length - 1);
        let negReversedInt = parseInt(substr) * -1;
        if(negReversedInt < Math.pow(-2, 31)) {
          return 0;
        }
        return negReversedInt;
    } else {
        for(let i = strVal.length - 1; i >= 0; i--) {
            newStr += strVal[i];
        }
        let reversedInt = parseInt(newStr);
        if(reversedInt > Math.pow(2, 31) - 1){
          return 0;
        }
        return reversedInt;
    }
};