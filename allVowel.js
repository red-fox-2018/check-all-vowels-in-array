function generateBoard(row, col) {
  let newArr = []
  // console.log('Z'.charCodeAt());

  for (var i = 0; i < row; i++) {
    newArr[i] = [];
    for (var j = 0; j < col; j++) {
      let indexLetter = Math.floor(Math.random() * (90 - 65 + 1) + 65);
      newArr[i][j] = String.fromCharCode(indexLetter);
    }
  }
  return newArr
}

function createArr(newArr) {
  let arrBlock = []
  for (var i = 0; i < newArr.length - 1; i++) {
    for (var j = 0; j < newArr[i].length - 1; j++) {
      let blockStr = '';
      for (let k = j; k <= j + 1; k++) {
        blockStr += newArr[i][k];
        blockStr += newArr[i + 1][k];
      }
      arrBlock.push(blockStr);
    }
  }
  return arrBlock;
}

function checkVowel(array) {
  let counter = 0;
  let vowel = 'AIUEO';
  for (let i = 0; i < array.length; i++) {
    let numOfVowel = 0;
    for (var j = 0; j < array[i].length; j++) {
      for (let l = 0; l < vowel.length; l++) {
        if (array[i][j] === vowel[l]) {
          numOfVowel++;
        }
      }
    }
    if (numOfVowel === 4) {
      counter++;
    }
  }
  return counter;
}


// var board = [
//   [ 'E', 'I', 'B', 'Y' ],
//   [ 'A', 'O', 'V', 'X' ],
//   [ 'T', 'C', 'C', 'P' ],
//   [ 'Q', 'N', 'A', 'I' ],
//   [ 'F', 'W', 'E', 'U' ] ]

let board = generateBoard(5,4)
let arrOfBlock = createArr(board);
console.log(board);
console.log(checkVowel(arrOfBlock));
