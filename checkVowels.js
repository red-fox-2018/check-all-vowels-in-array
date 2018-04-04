
function createNestedArr(jumlahRow,jumlahCol) {
	var output=[];
	var alfabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

	for(var j=0;j<jumlahRow;j++) {
		output.push([])			   
	}

	for(var i=0;i<output.length;i++){
		for(var k=0;k<jumlahCol;k++){
			output[i].push(alfabet[Math.floor((Math.random()*alfabet.length))])
		}
	}
	
 
  var output2=[];
  for(var l=0;l<output.length-1;l++){
  	for(var m=0;m<output[l].length-1;m++){
  		if(checkVowels(output[l][m]) ===true) {
  			 //if(output[l][m+1]!==undefined||output[l+1][m]!==undefined||output[l+1][m+1]!==undefined){
 			    output2.push([output[l][m],output[l][m+1],output[l+1][m],output[l+1][m+1]]);
   		  // 	}
   		}
  	}
  }
  
  var output2Join='';
  var output3=[];
  for(let i=0;i<output2.length;i++){
    output2Join=output2[i].join("");
    output3.push(output2Join);
  }
  
  
  var count=0;
  for(let n=0;n<output3.length;n++){
    if(checkVowels(output3[n])===true) {
      count++;  
    }
  }
  console.log('==BOARD==');
  console.log(output);
  console.log('==OUTPUT==');
  console.log(output3);	
  console.log('==COUNT==');
  return count ;  
  
}

function checkVowels(kata) {
  var vokal=['a','i','u','e','o'];
  var count=0;
  for(var i=0;i<vokal.length;i++) {
  	for(var j=0;j<kata.length;j++) {
  		if(vokal[i]===kata.toLowerCase()[j]){
  			count++
  		}	
  	}
  }
  
  if(count===kata.length){
    return true
  }else{
    return false;
  }  

}


//console.log(checkVowels('aaiueoso'));
console.log(createNestedArr(5,3));
// console.log(createNestedArr(4,2))

