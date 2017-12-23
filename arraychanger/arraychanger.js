'use strict';

var words = ['this', 'that', 'other'];

function formatWords(words){
  for (var i = 0; i < words.length; i++) {
    if (i != words[words.length - 1]) {
      words.join(',');
      console.log(words);
    } else {
      words[words];
    }
    return words;
  }}

formatWords(words);