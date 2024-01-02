//AVG MARKS OF CLASS
let marks =[98, 57, 88, 44, 34, 67, 78];

let sum = 0;
for(let total of marks){
  //console.log(total);
  sum += total;
}
let avg = sum/marks.length;
console.log(`Avg marks of the class is = ${avg}`);