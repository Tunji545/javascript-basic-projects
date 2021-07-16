const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector("#color");

function changeBg(){
   return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", ()=>{
    const randomColor = changeBg();
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
})
