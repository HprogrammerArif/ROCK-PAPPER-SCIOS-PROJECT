//10% DISCOUNT OFFER USING FOR OF

let items = [250, 645, 300, 900, 50];

let i = 0;
for(let val of items){
  console.log(`value at index ${i} is ${val}`);
  let offer = val / 10;
  items[i] = items[i] - offer;
  console.log(`Value after ofer = ${items[i]}`);
  i++
}