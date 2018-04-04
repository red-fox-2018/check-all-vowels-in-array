function generateBoard(row, col) {
  var alphabets = 'abcdefghijklmnou'
  var arrLuar = [];
  for(var i = 0; i < row; i++) {
    var arrDalam = [];
    for(var j = 0; j < col; j++) {
      var random = Math.floor(Math.random() * (16 - 1) + 1)
      arrDalam.push(alphabets[random])
    }
    arrLuar.push(arrDalam);
  }
  return arrLuar
}

function checkBlock() {
  // var board = generateBoard(5, 4)
  var board = [
    [
      'a', 'x', 'c', 'y'
    ], [
      'e', 'o', 'o', 's'
    ], [
      'i', 'u', 'i', 'n'
    ], [
      'm', 'y', 'o', 'e'
    ], [
      'p', 'd', 'a', 'i'
    ]
  ]
  var count = 0
// console.log(board);
// console.log(board.length);
  for(var i = 0; i < board.length-1; i++) {
    // console.log('=', i);
    for(var j = 0; j < board[i].length-1; j++) {
      // console.log('===', j);
    //   console.log('===', j);
      var check = checkVowels(board, i, j)
      if(check === true) {
        count++
      }
      // result.push(board[i][j], board[i][j+1], board[])
    }
  }
  return count
}

function checkVowels(board, row, col) {
  // var board = checkBlock()
  var vocals = ['a', 'i', 'u', 'e', 'o']
    for(var i = row; i <= row+1; i++) {
      // console.log('i =', i);
      for(var j = col; j <= col+1; j++) {
        // console.log('j ===', j);
          // console.log(board[i][j]);
        if(vocals.indexOf(board[i][j]) === -1) {
          return false
          // console.log(count);
        }
      }
    }
  return true
}



// var nestedArr = nestedArr(5, 4)
// console.log(nestedArr);
// console.log(board);

console.log(checkBlock());
