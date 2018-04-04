// RELEASE 0
function createNestedArr(jumlahRow, jumlahCol){
  var abjad = 'abcdefghijklmnopqrstuvwxyz'
  // console.log(abjadRandom)
  let board = []
  for(let i=0; i<jumlahRow; i++){
    let baris = []
    for(let j=0; j<jumlahCol; j++){
      var angkaRandom = Math.round(Math.random() * 25 + 0)
      var abjadRandom = abjad[angkaRandom]
      baris.push(abjadRandom)
    }
    board.push(baris)
  }
  return board
}


// RELEASE 1
  // var board = createNestedArr(baris, kolom)
function getBlockWithVowels(baris, kolom, board){
  // console.log(board)
  // console.log(board)

  var arrResult = []
  var arrBlocks = []
  var block = []
  var vokals = ['a','i','u','e','o']
  //cari huruf vokal
  for(let i=0; i<board.length; i++){
    // console.log(board[i])
    let row = board[i]
    for(let j=0; j<row.length; j++){
      let value = row[j]
      // console.log(`posisi ${value}: [${i},${j}]`)
      // console.log(`value ${value}, hasil indexOf => ${vokals.indexOf(value)}`)
      let hasilCekVokal = vokals.indexOf(value)
      // console.log(hasilCekVokal)
      if(hasilCekVokal !== -1){
        // get dari function
        let resultBlockVowel = getBlockVowel(i, j, board)
        // console.log(resultBlockVowel)
        if(resultBlockVowel !== undefined){
          if(resultBlockVowel[0] === true){
            resultBlockVowel[0] = board[i][j]
            arrResult.push(resultBlockVowel)
          }
        }
      }
    }
  }
  console.log(`ada ${arrResult.length} block yang isinya semua berhuruf vokal yaitu:`)
  console.log(arrResult);
  // return arrResult
}

function getBlockVowel(baris, kolom, board){
  var vokals = ['a','i','u','e','o']
  var Kanan = board[baris][kolom+1]
  if(board[baris+1] !== undefined){
    var Bawah = board[baris+1][kolom]
    var BawahKanan = board[baris+1][kolom+1]
  }
  var arrResult = []

  let cekKanan = vokals.indexOf(Kanan)
  let cekBawah = vokals.indexOf(Bawah)
  let cekBawahKanan = vokals.indexOf(BawahKanan)
  // console.log(cekKanan)
  // console.log(cekBawah)
  // console.log(cekBawahKanan);

  if(cekKanan !== -1 && cekBawah !== -1 && cekBawahKanan !== -1){
    arrResult.push(true)
    arrResult.push(Kanan)
    arrResult.push(Bawah)
    arrResult.push(BawahKanan)
    return arrResult
    // console.log(true)
  }

}

const board = [
  ['a','x','c','y'],
  ['e','o','o','s'],
  ['i','u','i','n'],
  ['m','y','o','e'],
  ['p','d','a','i'],
]

// getBlockVowel(4, 2, board)
getBlockWithVowels(5,4, board)
