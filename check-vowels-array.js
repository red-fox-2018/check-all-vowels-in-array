function checkVowels(string){
  let vocals = 'aiueo'
  for(let i = 0; i < string.length; i++){
    if(vocals.indexOf(string[i].toLowerCase()) === -1){
      return false;
    }
  }
  return true;
}

function generateBoard(row, column) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let board = []

  for(let i = 0; i < row; i++){
    board.push([])
    for(let j = 0; j < column; j++){
      let randomAlphabet = alphabet[Math.floor(Math.random()*26)]
      board[i].push(randomAlphabet)
    }
  }
  return board
}

function checkVowelsArr(row, column){
  let board = generateBoard(row, column)
  //TEST
  // let board = [ [ 'a', 'i', 'y', 'l' ],
  //               [ 'u', 'o', 'a', 'k' ],
  //               [ 'l', 'u', 'o', 'e' ],
  //               [ 'y', 'e', 'z', 'n' ],
  //               [ 's', 'u', 'y', 'h' ] ]

  console.log(board);
  let blockVowelsCounter = 0
  let arrBlock = []

  for(let i = 0; i < board.length-1; i++){
    for(let j = 0; j < board[i].length-1; j++){
      let block = `${board[i][j]}${board[i][j+1]}${board[i+1][j]}${board[i+1][j+1]}`
      if(checkVowels(block) === true){
        blockVowelsCounter += 1
        arrBlock.push(block)
      }
    }
  }
  return `Block:${arrBlock}\nTotal:${blockVowelsCounter}`
}

console.log(checkVowelsArr(5, 4));
