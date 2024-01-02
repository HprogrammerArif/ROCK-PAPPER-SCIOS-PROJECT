//10% OFFER CALCULAETE USING FOR OF LOOP

let items =[240, 560, 365, 420, 580, 999];

let i = 0;
for(let val of items){
  console.log(`Value at index ${i} is ${val}`);
  let offer = items[i]/10;
  console.log(`Offer amount of ${items[i]} is ${offer}`);
  items[i]-=offer;
  console.log(`Value After Offer = ${items[i]}`);
  i++;
}