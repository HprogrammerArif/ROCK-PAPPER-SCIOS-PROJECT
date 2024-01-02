//10% DISCOUNT OFFER USING FOR LOOP

let items = [250, 645, 300, 900, 50];

for(let i = 0; i<items.length; i++){
  console.log(`value at index ${i} is= ${items[i]}`);
  let offer = items[i] / 10;
  items[i]-=offer;
}
console.log(`After Offer The Value Is ${items}`);