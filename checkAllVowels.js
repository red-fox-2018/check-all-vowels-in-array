/*jshint esversion:6*/

//==========generate board==========
function generateBoard(jumlahRow, jumlahCol) {
  let result = [];

  for (let i = 0; i < jumlahRow; i++) {
    let row = [];
    for (let j = 0; j < jumlahCol; j++) {
      let random = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      row.push(random);
    }
    result.push(row);
  }
  return result;
}

// ===========checkAllVowels==========
function checkAllVowels(string) {
  let str = string.toLowerCase().split('');

  for (let i = 0; i < str.length; i++) {
    if (!checkVowels(str[i])) {
      return false;
    }
  }
  return true;
}

function checkVowels(string) {
  let vowel = ['a', 'i', 'u', 'e', 'o'];
  for (let i = 0; i < vowel.length; i++) {
    if (string == vowel[i]) {
      return true;
    }
  }
  return false;
}

// ==========checkVowelsInArray==========
function checkVowelInArray(board) {
  let result = [];
  let count = 0;
  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      let cekDirect = `${board[i][j]}${board[i][j+1]}${board[i+1][j]}${board[i+1][j+1]}`;
      if (checkAllVowels(cekDirect)) {
        count++;
        result.push(cekDirect);
      }
    }
  }
  console.log('', '');
  return `Total: ${count}, ${result}`;
}

let boardContoh = [
  ['A', 'X', 'C', 'Y'],
  ['E', 'O', 'O', 'S'],
  ['I', 'U', 'I', 'N'],
  ['M', 'Y', 'O', 'E'],
  ['P', 'D', 'A', 'I']
];

let board = generateBoard(5, 4);
// console.log(generateBoard(5, 4));
console.log(boardContoh);
console.log(checkVowelInArray(boardContoh));// EOIU,OOUI,OEAI
