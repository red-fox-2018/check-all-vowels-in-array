function vowelsInArray(jumlahRow,jumlahCol){
    var array=[]
    var alphabet ="abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
    
    for(var i=0; i<jumlahRow; i++){
        array.push([])
        for(var j=0; j<jumlahCol; j++){
            var randomAlphabet = parseInt(Math.random()*alphabet.length)
            array[i].push(alphabet[randomAlphabet])
        }
        
    }
    return array
}

function checkvowels(str){
    var notvocal="bcdfghjklmnpqrstvwxyz".toUpperCase().split("")
    
    var noOfBlocks=0
    for(var i=0; i<str.length; i++){
        var temp=0
        for(var j=0; j<str[i].length+1; j++){
            if(temp===(-str[i].length)){
                noOfBlocks+=1
            }
            else{
                temp+=(notvocal.indexOf(str[i][j]))
            }
        }  
    }
    return noOfBlocks
}

let arrStr = vowelsInArray(4,3)
let tesInput=[["A","I","U"],["A","E","O"],["B","Y","E"],["A","E","O"],["A","E","O"]]
console.log(checkvowels(tesInput))
