# check-all-vowels-in-array
//genereate board
FUNCTION generateBoard parameter JUMLAHROW dan JUMLAHCOL
  SET RESULT ke []

  LOOP index i = 0, index i kurang dari JUMLAHROW, increment satu
    SET ROW ke []
    LOOP index j = 0, index j kurang dari JUMLHCOL, increment satu
      SET RANDOM sama dengan ubah STRING dari fromCharCode 97 ditambah pembulatan ke bawah dari random dikali 26
      PUSH RANDOM ke ROW
    END LOOP
    PUSH ROW ke RESULT
  END LOOP
  RETURN RESULT
END FUNCTION

// checkAllVowels
FUNCTION checkAllVowels parameter STRING
  SET  STR = STRING ubah ke huruf kecil dan STRING dipisahkan dengan ''

  LOOP index i = 0, index i kurang dari panjang STR, dengan increment satu
    IF bukan FUNCTION checkVowels STR index i
      RETURN FALSE
    END IF
  END LOOP
  RETURN TRUE
END FUNCTION

FUNCTION checkVowels parameter STRING
  SET VOWEL sama dengan array nilainya 'a', 'i', 'u', 'e', 'o'
  LOOP index i = 0, index i kurang dari panjang VOWEL, dengan increment satu
    IF STRING sama dengan dari VOWEL index i
      RETURN TRUE
    END IF
  END LOOP
  RETURN FALSE
END FUNCTION

//checkAllVowelsInArray
FUNCTION checkVowelInArray parameter BOARD
  SET RESULT ke []
  SET COUNT ke 0
  LOOP index i = 0, index i kurang dari panjang BOARD - 1, increment satu
    LOOP index j = 0, index j kurang dari panjang BOARD index i -1, increment satu
      SET CEKDIRECT sama dengan `BOARD index i j BOARD i j+1 BOARD i+1 j BOARD i+1 j+1`
      IF FUNCTION checkAllVowels dari CEKDIRECT
        COUNT + 1
        PUSH CEKDIRECT ke RESULT
      END IF
    END LOOP
  END LOOP
  RETURN `TOTAL :` COUNT + RESULT
END FUNCTION
