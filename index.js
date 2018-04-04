function checkVowel(str) {
  let arrVocal = 'aeiou';
  let temp = 0;
  str = str.toLowerCase();
  for (let i of str) {
    for (let j of arrVocal) {
      if (i === j) {
        temp++
      }
    }
  }
  return temp === str.length
}

function generateBoard(jumlahRow, jumlahCol) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let output = [];
  for (let row = 0; row < jumlahRow; row++) {
    output.push([])
    for (let col = 0; col < jumlahCol; col++) {
      randomAlphabet = Math.floor(Math.random() * 26)
      output[row].push(alphabet[randomAlphabet]);
    }
  }
  return output
}

function checkAllVowelsInArray(jumlahRow, jumlahCol) {
  let arrBoard = generateBoard(jumlahCol,jumlahRow);
  // let arrBoard =[
  //                ['a','i','b','s','d'],
  //                ['u','e','c','t','y'],
  //                ['o','a','t','b','j']
  //               ]
  console.log(arrBoard);
  let counter = 0;
  for (let row = 0; row < arrBoard.length-1; row++) {
    for (let col = 0; col < arrBoard[row].length-1; col++) {
      let str = '';
      str += arrBoard[row][col]+arrBoard[row][col+1]+arrBoard[row+1][col]+arrBoard[row+1][col+1];
      // console.log(arr)
      if(checkVowel(str) === true) {
        counter++;
      }
    }
  }
  
  return counter;
}
console.log(checkAllVowelsInArray(5,4));