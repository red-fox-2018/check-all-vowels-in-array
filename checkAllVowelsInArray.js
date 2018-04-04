function generateBoard(jumlahRow,jumlahCol) {
  let board = []
  let huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (var i = 0; i < jumlahRow; i++) {
    board.push([])
    for (var j = 0; j < jumlahCol; j++) {
      board[i].push(huruf[Math.floor(Math.random()*26)])
    }
  }
  return board
}
// function checkVowels() {
//   for (var j = 0; j < vowels.length; j++) {
//     if (string[i] == vowels[j]) {
//       break
//     }
//   }
//   return
// }
function getBlockVowels(){
  let vowels = 'AIUEO'
  let result = []
  let jumlahRow = 5
  let jumlahCol = 4
  let board = generateBoard(jumlahRow,jumlahCol)
  // kode dibawah dapat di un-comment apabila ingin menghasilkan board yang semuanya berisi huruf vokal
  // let board = []
  // for (var i = 0; i < 5; i++) {
  //   board.push(['A','I','U','E'])
  // }
  console.log('Ini Board');
  console.log(board);
  for (var i = 0; i < jumlahRow - 1; i++) {
    for (var j = 0; j < jumlahCol - 1; j++) {
      let vowelsTemp = []
      for (var k = i; k <= i+1; k++) {
        let counter = 0
        for (var l = j; l <= j+1; l++) {
          for (var m = 0; m < vowels.length; m++) {
            if (board[k][l] == vowels[m]) {
              vowelsTemp.push(board[k][l])
              // console.log(vowelsTemp);
              counter++
            }
          }
        }
      }
      if (vowelsTemp.length === 4) {
        result.push(vowelsTemp)
      }
    }
  }
  console.log('Ini Hasil');
  return result
}
console.log(getBlockVowels());


// for (var i = 0; i < 5; i++) {
//   board.push(['A','I','U','E','O'])
// }
