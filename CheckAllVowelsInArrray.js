var BoardGenerator = function(x,y){
    let Alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let LettersBoard = [];
    for(let i=0;i<x;i++){
        LettersBoard.push([]);
        for(let j=0;j<y;j++){
            var letter = Math.floor(Math.random()*25);
            LettersBoard[i].push(Alphabet[letter])
        }
    }
    return LettersBoard;
}
var RandomBoard = BoardGenerator(5,4);

var cekVowels = function(arr){
    let vowels = 'aiueo';
    let count = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<vowels.length;j++){
            if(arr[i].toLowerCase()===vowels[j]){
                count++;
            }
        }
    }
    if(arr.length === count){
        return count;
    }
}

var VowelsChecker2x2 = function(board){
    let Vowels = ['a','i','u','e','o'];
    let LettersBoard = board;
    let CheckerBoard = [];
    let count = 0;
    let Vowels2x2Count = 0;

    for(var i=0;i<LettersBoard.length-1;i++){
        let CheckerBoard = [];
        for(var j=0;j<LettersBoard[i].length-1;j++){
                CheckerBoard.push(LettersBoard[i][j]);
                CheckerBoard.push(LettersBoard[i][j+1]);
                CheckerBoard.push(LettersBoard[i+1][j]);
                CheckerBoard.push(LettersBoard[i+1][j+1]);
                var result = cekVowels(CheckerBoard);
                if(result === CheckerBoard.length){
                    Vowels2x2Count++;
                    console.log(CheckerBoard);
                }
                CheckerBoard = [];
                count = 0;
        }
    }
    return Vowels2x2Count;
}
var Dummy_lettersBoard = [
    ['a','i','b','s','d'],
    ['u','e','c','t','y'],
    ['o','a','t','b','j']
]
console.log(VowelsChecker2x2(Dummy_lettersBoard))
console.log(VowelsChecker2x2(RandomBoard))