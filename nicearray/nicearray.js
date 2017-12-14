'use strict'

function isNice(arr){
  (arr.length === 0) ? arrIsNice = false: isArrNice = true;
    for (k = 0; k < arr.length; k++) {
        if (!arr.includes(arr[k] + 1) && !arr.includes(arr[k] - 1)) {
          return false;
        }
    }
   return arrIsNice;
  } 