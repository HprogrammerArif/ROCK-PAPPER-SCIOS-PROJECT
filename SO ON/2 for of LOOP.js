//FOR IN LOOP USE FOR OBJECT AND 
let stduent = {
  name: "Mohammed Arif",
  age: 23,
  university: "Scholler University",
  cgpa: 2.89,
  isPass: true,
};

for(let key in stduent){
  console.log("Key Is:", key, " Value is:", stduent[key]);
}