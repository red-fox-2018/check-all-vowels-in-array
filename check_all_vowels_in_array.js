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

function block() {
    // let board = generateBoard(5, 4);
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
                result.push([board[i][j], board[i][j + 1], board[i + 1][j], board[i + 1][j + 1]]);
            } catch (error) {}
        }
    }

    return result;
}

function checkAllVowels() {
    let vowels = 'AIUEO';
    let mamam = block();
    let result = [];

    for (let i = 0; i < mamam.length; i++) {
        let count = 0;
        for (let j = 0; j < mamam[i].length; j++) {
            if (vowels.includes(mamam[i][j]) === true) count++;
        }

        if (count === 4) result.push(mamam[i]);
    }

    return result;
}

function count() {
    return checkAllVowels().length;
}

console.log(checkAllVowels());
console.log(count());