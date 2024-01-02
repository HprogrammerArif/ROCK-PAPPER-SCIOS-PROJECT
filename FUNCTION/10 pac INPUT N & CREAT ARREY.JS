//TAKE A NUMBER N AS A INPUT FROM USER. CREAT AN ARRAY OF NUMBERS FROM 1 TO N.
 
let n = prompt("ENter a Number : ");
let arr = [];
for(let i = 1; i<=n; i++){
  arr[i-1] = i;
}
console.log(arr);

//SUM CALCULATE
let totalSum = arr.reduce((previ, current) => {
  return previ + current;
})
console.log("Total Sum IS: ", totalSum);

//PRODUCT OR FACTORIAL CALCULAT
let factorial = arr.reduce((previ, current) => {
  return previ * current;
})
console.log("Total factorial IS: ", factorial);