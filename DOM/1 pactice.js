let h2 = document.querySelector("h2");
console.dir(h2);
h2.innerText = h2.innerText + " From Apna Collage";

let allBox = document.querySelectorAll(".box");
console.dir(allBox);

let idx = 1;
for(let div of allBox){
  div.innerText = `New Content ${idx}`;
  idx++;
}