function createArr(row, col) {
  let newArr = []
  // console.log('Z'.charCodeAt());

  for (var i = 0; i < row; i++) {
    newArr[i] = [];
    for (var j = 0; j < col; j++) {
      let indexLetter = Math.floor(Math.random() * (90 - 65 + 1) + 65);
      newArr[i][j] = String.fromCharCode(indexLetter);
    }
  }
  console.log(newArr);
  let counter = 0;
  for (var i = 0; i < newArr.length - 1; i++) {
    for (var j = 0; j < newArr[i].length - 1; j++) {
      let blockStr = '';
      for (let k = j; k <= j + 1; k++) {
        blockStr += newArr[i][k];
        blockStr += newArr[i + 1][k];
      }
      let vowel = 'aiueo';
      let numOfVowel = 0;
      for (let k = 0; k < blockStr.length; k++) {
        for (let l = 0; l < vowel.length; l++) {
          if (blockStr[k] === vowel[l]) {
            numOfVowel++;
          }
        }
      }
      if (numOfVowel === 4) {
        counter++;
      }
    }
  }
  return counter;
}


console.log(createArr(5, 4));
