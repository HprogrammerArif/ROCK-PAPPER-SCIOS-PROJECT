//PRINT VOWEL FROM STRING USING FUNCTION

function countVowel(str){
    console.log(str);
    let count = 0;
  for(const char of str){
    
    console.log(char);
    if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
      count++;
    }
  }
  console.log(count);
  return count;
}
countVowel("Mohammed Arif");

