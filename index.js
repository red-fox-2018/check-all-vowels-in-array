function generateBoard(rows, cols){
  let board = [];
  // let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphabet ='AIUEOBDKILM';

  for(let i=0; i<rows; i++){
    board.push([]);
    for (let j = 0; j < cols; j++) {
      let value = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      board[i].push(value);
    }
  }
  return board
}

function checkVowelsBlock(indexRow, indexCol, board){
  let vowels = 'AIUEO';

  for(let i = indexRow; i<= indexRow+1; i++){
    for(let j = indexCol; j<= indexCol+1; j++){
      if(vowels.indexOf(board[i][j]) === -1){
        return false;
      }
    }
  }
  return true
}

function solve(rows, cols){
  let board = generateBoard(rows, cols);
  let countBlock = 0;

  for(let i=0; i<board.length-1; i++){
    for(let j=0; j<board[i].length-1; j++){
      var check = checkVowelsBlock(i,j,board);

      if(check){
        countBlock++;
      }
    }
  }
  console.log(board);
  return `Jumlah Block berisi huruf Vowel = ${countBlock}`
}
console.log(solve(5,4));
