//PERFORM SOME OPERATIONS & REDUCE THE ARRAY TO SINGLE VALUE.
// CALCULATE SUM USING REDUCE
let marks = [10, 30, 100, 170, 13];
let output = marks.reduce((res, current) => {
  return res + current;
})
console.log(output);

//LARGEST NUMBER FIND OUT FROM ARREY
let largest = marks.reduce((res, current) => {
  return res > current? res : current;
})
console.log(largest);
