
function generateboard(row,col){
let result=[]
  let alphabet ='abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < row; i++) {
      result.push([])
      for (var j = 0; j < col; j++) {
        let random= Math.round(Math.random()*25)
          result[i].push(alphabet[random])
      }
    }
  return result
}

function checkVowel(row,col){
  let check='';
  let vocal='aiueo'
  var board = generateboard(row,col)

  for (var i = 0; i < board.length; i++) {
      let satuan = board[i]
    for (var j = 0; j < satuan.length; j++) {
    }
  }
  //console.log(board);
  return check
}

console.log(checkVowel(5,4));

[
['A,X,C,Y'],
['E,O,O,S'],
['I,U,I,N'],
['M,Y,O,E'],
['P,D,A,I']
]
