
function generateboard(input){
  let col=input.split(',');
  let result=[];
  //console.log(col.length);
  for (var i = 0; i < col.length; i++) {
    let pisah = col[i]
    result.push([])
    for (var j = 0; j < pisah.length; j++) {
      result[i].push(pisah[j])
    }
  }
return result
}

function checkVowel(input){
  let check=[];
  let vocal='aiueo'
  var board = generateboard(input)

  for (var i = 0; i < board.length; i++) {
    let satuan = board[i]
    check.push([])
    for (var j = 0; j < satuan.length; j++) {
      check[i].push([i,j])
    }
  }


return check
}

console.log(checkVowel('AXCY,EOOS,IUIN,MYOE,PDAI'));
