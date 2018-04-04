
/*


@ Iswanul Umam - Red Fox
*/

function generateBoard(totalRow, totalColumn) {
  let randomAlphabet = function () {
    let randNum = Math.random() * (123 - 97) + 97;
    return String.fromCharCode(randNum).toUpperCase();
  }
  let board = [];
  for (let i = 0; i < totalRow; i++) {
    board[i] = [];
    for (let j = 0; j < totalColumn; j++) {
      board[i].push(randomAlphabet());
    }
  }
  return board;
}

// console.log(generateBoard(5, 4));

function checkAllVowels(s) {
  let isVowel = function (c) {
    c = c.toLowerCase();
    return c == 'a' || c == 'i' || c == 'u' || c == 'e' || c == 'o';
  }
  let isAllVowel = true;
  for (let i of s) {
    if (!isVowel(i)) {
      isAllVowel = false;
    } 
  }
  return isAllVowel;
}

// console.log('AiUeO');

function checkVowelInArray(board) {
  let result = [];
  let total = 0;
  let bl = board.length;
  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      let combination = `${board[i][j]}${board[i][j+1]}${board[i+1][j]}${board[i+1][j+1]}`;
      if (checkAllVowels(combination)) {
        result.push(combination);
        total++;
      }
    }
  }
  console.log('---');
  return `Total: ${total}, ${result.join(', ')}`;
}

// driver code

let boardSample =  [['A', 'X', 'C', 'Y'],
              ['E', 'O', 'O', 'S'],
              ['I', 'U', 'I', 'N'],
              ['M', 'Y', 'O', 'E'],
              ['P', 'D', 'A', 'I']];

let newBoard = generateBoard(5, 5);

console.log(newBoard);

console.log(checkVowelInArray(newBoard));

// EOIU, OOUI, OEAI