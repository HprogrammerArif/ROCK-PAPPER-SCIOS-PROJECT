// MAP RETURN NEW ARRAY WITH THE SOME OPERATION
// WE CAN USE 3 PARAMETER LIKE FOR EACH
// its print each element of array like for each

let nums = [12, 14, 5, 7, 3, 9];
nums.map((val) => {
  console.log(val);
})

// ITS ALSO USE CREAT NEW ARREY
let newArr = nums.map((val) => {
  return val * val;
})
console.log(newArr);