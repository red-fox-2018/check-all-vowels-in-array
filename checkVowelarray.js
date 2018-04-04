function createNestedArr(jumlahRow, jumlahCol){
    let abjad = 'abcdefghijklmnopqrstuvwxyz'
    let result = []

    for(let i=0;i<jumlahRow;i++){
        var penampungArray = []
        for(let k=0;k<jumlahCol;k++){
            penampungArray.push(abjad[Math.ceil(Math.random()*25)].toUpperCase())
        }
        result.push(penampungArray)
    }
    return result
}

function cekVowel(array){
    
    function cekvowel(kata){
        var arr = 'aiueo';
    
        var count = 0;
        for(var i=0;i<arr.length;i++){
            for(var k=0;k<kata.length;k++){
                if(arr[i]==kata[k].toLowerCase()){
                    count++
                }
            }
        }
        if(count==kata.length){
            return true
        }
        return false
    }

    let vowel = 'AIUEO'
    let tambah = 0
    let result = ""
    
    for(let i=0;i<array.length;i++){
        for(let k=0;k<array[i].length;k++){
            var string = ""
            for(let l=0;l<vowel.length;l++){
                if(array[i][k]==vowel[l] && array[i+1]!=undefined){
                    if(array[i][k]==undefined || array[i][k+1]==undefined || array[i+1][k]==undefined || array[i+1][k+1]==undefined){
                        let kosong = ''
                    }else{
                        string += array[i][k] + array[i][k+1] + array[i+1][k] + array[i+1][k+1]
                    } 
                }
            }
            if(string.length!=0){
                if(cekvowel(string)){
                    result += string + " "
                    tambah++
                }
            }
        }
    }
    return tambah +" "+ result
    
}
console.log(createNestedArr(9, 5)) // munculin board vowel
console.log(cekVowel(createNestedArr(9, 5))) // cek random board vowel
// [
//     ['A','X','C','Y'],
//     ['E','O','O','S'],
//     ['I','U','I','N'],
//     ['M','Y','O','E'],
//     ['P','D','A','I']
// ]

console.log(cekVowel([['A','X','C','Y'],['E','O','O','S'],['I','U','I','N'],['M','Y','O','E'],['P','D','A','I']]))