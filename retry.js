
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
  let count=0
 //count+=1;
  let vocal=['A','I','U','E','O']
  var board = generateboard(input)
  console.log(board);
  for (var i = 0; i < board.length; i++) {
    board[i]
    for (var j = 0; j < board[i].length; j++) {
      //console.log('++',board[i+1][j]);
      if(board[i+1] !== undefined ){
       if(board[i][j] =='A' ||board[i][j]=='I'||board[i][j]=='U'||board[i][j]=='E'||board[i][j]=='O'){
         if(board[i][j+1] =='A'||board[i][j+1]=='I'||board[i][j+1]=='U'||board[i][j+1]=='E'||board[i][j+1]=='O'){
           if(board[i+1][j] =='A'||board[i+1][j] =='I'||board[i+1][j] =='U'||board[i+1][j] =='E'||board[i+1][j] =='O'){
            if(board[i+1][j+1] =='A'||board[i+1][j+1] =='I'||board[i+1][j+1] =='U'||board[i+1][j+1] =='E'||board[i+1][j+1] =='O'){
               count+=1;
            }
           }
         }
       }
      }
     }
   }
return count
}
//
// [ [ [ 0, 0 ], [ 0, 1 ], [ 0, 2 ], [ 0, 3 ] ],
//   [ [ 1, 0 ], [ 1, 1 ], [ 1, 2 ], [ 1, 3 ] ],
//   [ [ 2, 0 ], [ 2, 1 ], [ 2, 2 ], [ 2, 3 ] ],
//   [ [ 3, 0 ], [ 3, 1 ], [ 3, 2 ], [ 3, 3 ] ],
//   [ [ 4, 0 ], [ 4, 1 ], [ 4, 2 ], [ 4, 3 ] ] ]

console.log(checkVowel('AXCY,EOOS,IUIN,MYOE,PDAI'));
