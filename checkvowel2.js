function nestedArray(jumlahRow, jumlahCol) {
  var board = []
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  for (let row = 0; row < jumlahRow; row++) {
    var random = []
    for (let col = 0; col < jumlahCol; col++) {
      var result = alphabet[Math.floor(Math.random() * ((alphabet.length)))]
      random.push(result)
    }
    board.push(random)
  }
  return board;
}
// console.log(nestedArray(3, 5));

function checkVowel(names) {
  var hasil = names.toLowerCase()
  var pisah = hasil.split('')
  var vowel = ['a', 'i', 'u', 'e', 'o']
  var count = 0
  if (names.length === 0) {
    return false
  }
  for (var i = 0; i < pisah.length; i++) {
    for (var j = 0; j < vowel.length; j++) {
      if (pisah[i] === vowel[j]) {
        count++
      }
    }
  }
  if (count === names.length) {
    return true;
  } else {
    return false;
  }
}

function data(board) {
  var count=0
for (let i = 0; i <board.length-1; i++) {
  // console.log(board[i]);
  for (let j= 0; j < board[i].length-1; j++) {
    var pair=board[i][j]+board[i][j+1]+board[i+1][j]+board[i+1][j+1];
    // console.log(pair, checkVowel(pair));
    if (checkVowel(pair)===true) {
      count++
    }
  }
}
return count;
}
let board= nestedArray(10, 10);
// console.log(board);
data(board)
// let newBoard=[['A','X','C','Y'],['E','O','O','S'],['I','U','I','N'],['M','Y','O','E'],['P','D','A','I']]
console.log(data(board))
// console.log(data);
