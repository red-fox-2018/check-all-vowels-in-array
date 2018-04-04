function getTheBlock(jumlahRow,jumlahCol){
    var array = []
    var abjad = 'abcefghijklmnopqrstuvwxyz'
    for(let row=0;row<jumlahRow;row++){
        var nestedArr = []
        for(let col=0;col<jumlahCol;col++){
            var random = Math.floor(Math.random()*25)
            nestedArr.push(abjad[random])
        }
        array.push(nestedArr)
    }
    var count = 0
    for(let row=0;row<array.length;row++){  
        for(let col=0;col<array[row].length;col++){
            var string = ''
            if ('aiueo'.indexOf(array[row][col]) != -1){
                if(array[row+1]!=undefined){
                    string += array[row][col] + array[row][col + 1] + array[row + 1][col] + array[row + 1][col + 1]
                }      
            }
            if(checkAllVowels(string)) count+=1 
        }
    }
    return count
}
function checkAllVowels(arr) {
    if(arr.length==4){
        var check = true
        for (let i = 0; i < arr.length; i++) {
            if ('aiueo'.indexOf(arr[i]) == -1) {
                check = false
            }
        }
        return check
    }   
}
console.log(getTheBlock(5,4))