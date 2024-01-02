//10% OFFER CALCULAETE USING FOR OF LOOP

let items =[240, 560, 365, 420, 580, 999];

for(let i = 0; i<items.length; i++){
  let offer = items[i]/10;
  items[i]-=offer;
}
 console.log(items);