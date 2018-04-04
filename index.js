 function generateBoard(row, column) {
   var alphabet = 'abcdefghijklmnopqrstuvwxyz';
   var arrHasil = [];

   for (var i = 0; i < row; i++) {
     var arr = [];
     for (var j = 0; j < column; j++) {
       var random = Math.floor(Math.random() * alphabet.length);
       arr.push(alphabet[random]);
       if (arr.length == column) {
         arrHasil.push(arr);
         arr = [];
       }
     }
   }
   return arrHasil;
 }

 function findVowel(row, column) {
   var board = generateBoard(row, column);
   // var board = [['a', 'i', 'u', 'e'],
   //              ['i', 'e', 'o', 'e'],
   //              ['o', 'c', 'd', 'f']
   //  ]
  //  var board = [ [ 'h', 'y', 'd', 'x' ],
  // [ 'u', 'a', 'g', 'x' ],
  // [ 'c', 'u', 'e', 'a' ],
  // [ 'j', 'o', 'a', 'n' ],
  // [ 'l', 'x', 'd', 'y' ] ]

   //   if (isVowel(board)) {
   //     banyakVowel += 1;
   // }

   console.log(board);
   return isVowel(board);
 }

 function isVowel(board) {
   var jumlah = 0;
   for (var i = 0; i < board.length; i++) {
     // KALO I UDAH PALING LENGTh NGGA USAH DIITUNG
     if (i !== board.length - 1) {
       for (var j = 0; j < board[i].length; j++) {
         if (j !== board[i].length - 1) {
           // console.log('angka yang dicari',board[i][j]);
           if (board[i][j] == 'a' || board[i][j] == 'i' || board[i][j] == 'u' || board[i][j] == 'e' || board[i][j] == 'o') {
             if (board[i + 1][j] == 'a' || board[i + 1][j] == 'i' || board[i + 1][j] == 'u' || board[i + 1][j] == 'e' || board[i + 1][j] == 'o') {
               if (board[i + 1][j + 1] == 'a' || board[i + 1][j + 1] == 'i' || board[i + 1][j + 1] == 'u' || board[i + 1][j + 1] == 'e' || board[i + 1][j + 1] == 'o') {
                 if (board[i][j + 1] == 'a'|| board[i][j + 1] == 'i'|| board[i][j + 1] == 'u'|| board[i][j + 1] == 'e' || board[i][j+ 1] == 'o') {
                   console.log("HURUF: ", board[i][j]);
                   console.log('keitung');
                   // console.log('i + 1',board[i + 1][j]);
                   jumlah++;
                 }
               }
             }
           }
         }
       }
     }
   }
   return jumlah;
 }

 console.log(findVowel(5, 4))
