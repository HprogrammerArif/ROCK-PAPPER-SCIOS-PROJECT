// CLACULATE SQURE USING FOREACH HEIGHER ORDER FUNCTION
let nums = [12, 44, 2, 5, 7];
nums.forEach((num => {
  console.log(num**2); //num*num
}))


// ANOTHE WAY OF CALLBACK
let calcSquare = (num => {
  console.log(num**2);
});

nums.forEach(calcSquare);