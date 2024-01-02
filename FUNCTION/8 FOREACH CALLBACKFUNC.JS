//We Use FroEach When Array er bitor kichu kaj kora lage
//forEach Excuite This Arr Value.
//Genearly forEach er jny Arrow Func Use hoy.
// FOREACH ER CALLBACK FUNCTION E TIN TA PARAMETER THAKE. VAL, INX, ARRAY ITSELF
let arrStr = ["Dhaka", "Comilla", "Chittagong"];
arrStr.forEach((val, idx, arrItSelf) => {
  console.log(val.toUpperCase(), idx, arrItSelf);
})
//forEach only use for array. not for string.
//forEach ke heigher order function or method bola hoy.
// ony func ke as a parameter hisabe ne and or return kore.take heigher order func bole.