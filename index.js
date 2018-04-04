
function generateboard(row,col){
let result=[]
  let alphabet ='AIUEOAIUEOAIUFGHYTFGHYTTTTT'
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
  let check=0;
  let vocal='AIUEO'
  var board = generateboard(row,col)

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if(board[i+1] !== undefined ){
       if(board[i][j] =='A' ||board[i][j]=='I'||board[i][j]=='U'||board[i][j]=='E'||board[i][j]=='O'){
         if(board[i][j+1] =='A'||board[i][j+1]=='I'||board[i][j+1]=='U'||board[i][j+1]=='E'||board[i][j+1]=='O'){
           if(board[i+1][j] =='A'||board[i+1][j] =='I'||board[i+1][j] =='U'||board[i+1][j] =='E'||board[i+1][j] =='O'){
            if(board[i+1][j+1] =='A'||board[i+1][j+1] =='I'||board[i+1][j+1] =='U'||board[i+1][j+1] =='E'||board[i+1][j+1] =='O'){
               check+=1;
            }
           }
         }
       }
      }
    }
  }

  //console.log(board);
  return check
}

console.log(checkVowel(5,4));
