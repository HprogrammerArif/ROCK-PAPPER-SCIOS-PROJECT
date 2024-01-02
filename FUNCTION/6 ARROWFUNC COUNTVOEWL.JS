// COUNT VOWEL USING ARROW FUNCTION

const countVowel = (str) =>{
  let count = 0;
 for(let char of str){
  console.log(char);
  if(char === 'a'|| char === 'e'|| char === 'i'|| char === 'o'|| char === 'u'){
    count++;
  }
 }
 return (count);
}
console.log(countVowel);

let totalVowel = countVowel("Rakib Hasan");
console.log("Total vawol is: ",totalVowel);