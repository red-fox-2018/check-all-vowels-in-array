var alphabeth = 'abcdefghijklmnopqrstuvwxyz'
var vowel = 'aiueo'
function createsNestedArrAndCheckvowel(jumlahROw,JumlahCol){
  var result = []
  var resultVowel = []
  for (let i = 0; i < jumlahROw; i++) {
    var colValue = []
    var countVowel = 0
    for (let j = 0; j < JumlahCol; j++) {
      let randomAlphabet = alphabeth[Math.floor(Math.random()*26)]
      if(vowel.indexOf(randomAlphabet) !== -1){
        countVowel ++
      }
      colValue.push(randomAlphabet)
    }
    if(countVowel === JumlahCol){
      resultVowel.push(colValue)
    }
    result.push(colValue)
  }
  return {result,resultVowel}
}

console.log(createsNestedArrAndCheckvowel(5,3))
console.log(createsNestedArrAndCheckvowel(4,2))
