// creat a toggle button that changes the screen to dark
//mode when clicked & light mode clicked again.

let modeBtn = document.querySelector("#mode");
let screenCol = document.querySelector("body");

let currentMode = "light"; // change to dark mode.
modeBtn.addEventListener("click", (e) => {
  //console.log("Button Has Selected");
  if(currentMode === "light"){
    currentMode = "dark";
    screenCol.classList.add("dark")
    screenCol.classList.remove("light")

  } else{
    currentMode = "light";
    screenCol.classList.add("light")
    screenCol.classList.remove("dark")
  }
  console.log(currentMode);
})