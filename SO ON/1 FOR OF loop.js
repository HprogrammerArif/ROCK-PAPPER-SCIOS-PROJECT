//FOR-OF-LOOP
//FOR OF LOOP USE FOR STRING AND ARRAY. NOT FOR OBJECT

let  str="ApnaCollage";

let size = 0;
for(let i of str){    //iterator ==> character
  console.log("i =", i);
  size++;
}
console.log("Size Is: ", size);