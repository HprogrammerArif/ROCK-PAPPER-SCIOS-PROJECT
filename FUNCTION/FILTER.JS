//FILTER METHOD FILTER OUT SOMETHING BASED ON CONDITION
//here we will filter out all odd numbers

let numbers = [12, 11, 4, 6, 5, 9, 23, 45, 67, 88];
let oddNum = numbers.filter((fil => {
  return fil % 2 !== 0;
}))
console.log(oddNum);