'use strict'

function double(array) {
  var doubler = function(num){
    return num*2;
  };
 
  var final = array.map(doubler);
  return final;
}