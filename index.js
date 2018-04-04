function checkVowel (word) {

    let vowel = 'AIUEO'
    let counter = 0

    for (let i = 0; i < word.length; i++) {
        
        for (let j = 0; j < vowel.length; j++) {
            
            if(word[i] === vowel[j]) {

                counter++
            }
        }
    }

    if (word.length === counter) {

        return true
    } else {

        return false
    }
}

function checkVowelArray(board) {
    
    let result = []
    let counter = 0

    for (let i=0; i < board.length-1; i++) {
        
        for (let j=0; j < board[i].length-1; j++) {

            let correction = `${board[i][j]}${board[i][j+1]}${board[i+1][j]}${board[i+1][j+1]}`
            let check = checkVowel(correction)
            
            if (check === true) {
                
                result.push(correction)
                counter++
            } 
        }
    }

    if (counter > 0) {

        return 'total muncul '+ counter + ' ' +result
    } else {

        return 'Vowelnya gak ketemu'
    }

}

function createBoard (row, col) {

    let abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let board = []

    for(let i=0; i<row; i++) {

        let temp = []
        for(let j=0; j<col; j++) {

            let randomAbjad = Math.floor(Math.random() * abjad.length)
            temp.push(abjad[randomAbjad])
        }

        board.push(temp)
    }

    return board    
}

let board = createBoard(5,4)
console.log(checkVowelArray(board));

