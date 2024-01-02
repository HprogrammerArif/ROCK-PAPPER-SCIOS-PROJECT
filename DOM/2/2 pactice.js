let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
console.log(newBtn);
document.querySelector("body").prepend(newBtn);

//Qs-2

let paraGra = document.querySelector("p");
//let classVal = paraGra.getAttribute("class");
//let classValSet = paraGra.setAttribute("class", "newClass");

//  SOLVE PROBLEM WAY
paraGra.classList.add("newClass");
//if i want to remove any class than use remove keyword
//paraGra.classList.remove("newClass");