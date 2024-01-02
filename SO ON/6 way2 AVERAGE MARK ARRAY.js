let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let val of marks){
  console.log(val);
  sum+=val;
}
console.log(sum);
let avg = sum/marks.length;
console.log(avg);
console.log(`Avg marks of the class = ${avg}`);