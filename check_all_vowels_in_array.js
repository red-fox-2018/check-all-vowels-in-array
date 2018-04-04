function generateBoard(jumlahRow, jumlahCol) {
    let board = [];

    for (let i = 0; i < jumlahRow; i++) {
        let temp = [];
        for (let j = 0; j < jumlahCol; j++) {
            let randomAlphabet = String.fromCharCode(64 + Math.ceil(Math.random() * 26));
            temp.push(randomAlphabet);
        }

        board.push(temp);
    }

    return board;
}

function checkAllVowels() {
    // let board = generateBoard(5, 4);
    let vowels = 'AIUEO';
    let board = [
        ['A', 'X', 'C', 'Y'],
        ['E', 'O', 'O', 'S'],
        ['I', 'U', 'I', 'N'],
        ['M', 'Y', 'O', 'E'],
        ['P', 'D', 'A', 'I']
    ];
    let result = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            try {
                if (vowels.includes(board[i][j]) === true && vowels.includes(board[i][j + 1]) === true && vowels.includes(board[i + 1][j]) === true && vowels.includes(board[i + 1][j + 1]) === true) {
                    result.push([board[i][j], board[i][j + 1], board[i + 1][j], board[i + 1][j + 1]]);
                }
            } catch (error) {}
        }
    }
    
    return {
        total: result.length,
        result: result
    };
}

console.log(checkAllVowels());