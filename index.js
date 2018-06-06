var alphabeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
function createsNestedArr(jumlahROw,JumlahCol){
  var result = []
  for (let i = 0; i < jumlahROw; i++) {
    var colValue = []
    for (let j = 0; j < JumlahCol; j++) {
      let randomAlphabet = alphabeth[Math.floor(Math.random()*26)]
      colValue.push(randomAlphabet)
    }
    result.push(colValue)
  }
  return result
}

function checkVowel(arr){
    var vowel = 'AIUEO'
    var countBlock = 0
    var vowelBlock = []
    for(let i =0; i < arr.length-1; i++){
      var valueVowelBlock = []
      for (var j = 0; j < arr.length-1; j++) {
          if(vowel.indexOf(arr[i][j]) !==  -1 && vowel.indexOf(arr[i][j+1]) !==  -1 && vowel.indexOf(arr[i+1][j]) !==  -1 && vowel.indexOf(arr[i+1][j+1]) !==  -1){
              countBlock++
              valueVowelBlock.push(arr[i][j],arr[i][j+1],arr[i+1][j],arr[i+1][j+1])
          }
      }
      if(valueVowelBlock.length !== 0){
            vowelBlock.push(valueVowelBlock)
      }
    }
    return {arr,countBlock,vowelBlock}
}

console.log(checkVowel(createsNestedArr(15,15)));
