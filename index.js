function generateBoard(kolom,baris){
  var result = [];
  var huruf = 'abcdefghijklmnopqrstuvwxyz';

  for(var i = 0 ; i < kolom ; i++){
    var valueColumn = [];
    for(var j = 0 ; j < baris ;j++){
      valueColumn.push(huruf[Math.round(Math.random()*25)]);
    }
    result.push(valueColumn);
  }
  return result;
}

function checkVocals (str){
  var vocals = ['a','i','u','e','o'];
  var string = str.split('');

  for(var i =0 ; i < string.length ; i++){
    for(var j = 0 ; j < vocals.length ;j++){
      if(string[i]===vocals[j]){
        return true;
      }
    }
    return false;
  }
}

function cekVowel (text){
  // var result = [];
  // text = text+',';
  // var newText = text.split('') ;
  // var arrayText = [];
  // for(var i = 0 ; i < newText.length ; i++){
  //   if(newText[i] !== ','){
  //     arrayText.push(newText[i]);
  //   }
  //   else{
  //     result.push(arrayText);
  //     arrayText = [];
  //   }
  // }

  let board = generateBoard(5,4);
  console.log(board)


  var point = 0;
  for(var k = 0 ; k < board.length-1 ; k++){
    for(var l = 0 ; l < board[k].length-1 ; l++){
      if(checkVocals(board[k][l])){
        if(checkVocals(board[k][l+1])){
          if(checkVocals(board[k+1][l])){
            if(checkVocals(board[k+1][l+1])){
              point++;
            }
          }
        }
      }
    }
  }

  return point;

}

console.log(cekVowel('axiy,eoos,iuin,myoe,pdai'));
