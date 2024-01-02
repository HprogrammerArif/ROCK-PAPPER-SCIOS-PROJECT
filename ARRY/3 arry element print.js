//PRINT ALL ARREY ELEMENT using for loop an for of

let family = ["jahara Begum", "samsul haq", "arif", "badsha",
"farbin", "sima"];
for(idx = 0; idx <family.length; idx++){
  console.log(family[idx]);
}
for(let member of family){
  console.log(member);
}