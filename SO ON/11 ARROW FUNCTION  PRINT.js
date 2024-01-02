// //PRINT VOWEL FROM STRING USING FUNCTION

const countVowel = (str)=>{
  console.log(str);
  let count = 0;
  for(let element of str){
    console.log(element);
    if(element==='a' || element==='e' || element==='i' || element==='o' || element==='u'){
      count++;
     }
  }
  console.log(count);
}
