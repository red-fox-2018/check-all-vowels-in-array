function generateBoard(row, column) {

  const kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const result = []

  for (var i = 0; i < row; i++) {

    let value = []

    for (var j = 0; j < column; j++) {

      let random = Math.ceil(Math.random() * kamus.length-1)

      value.push(kamus[random])

    }

    result.push(value)

  }

  let vowels = {

    vocals: checkVowels(result),
    board: result

  }

  console.log(`========= \n vowels = `, vowels.vocals, `\n========= \n`)

  return vowels.board

}

function checkVowels(board) {

  const vocals = 'AIUEO'
  let result = []
  let vowels = []

  for (let i = 0; i < board.length; i++) {

    for (let j = 0; j < board[i].length; j++) {

      if (i != board.length-1 && j != board[i].length-1) {

        if (vocalOrNot(board[i][j]) && vocalOrNot(board[i][j+1])) {

          if (vocalOrNot(board[i+1][j]) && vocalOrNot(board[i+1][j+1])) {

            result.push(board[i][j], board[i][j+1], board[i+1][j], board[i+1][j+1])

          }

        }

      }

      if (result.length == 4) {

        vowels.push(result)
        result = []

      }

    }

  }

  return vowels

}

function vocalOrNot(char) {

  const vocals = 'AIUEO'

  if (vocals.indexOf(char) != -1) {

    return true

  }

  return false

}

console.log(generateBoard(10,10));
