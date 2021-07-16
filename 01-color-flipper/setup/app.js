const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#006400", "#008000", "#008080"];
const btn = document.getElementById("btn");
const color = document.document.getElementByClassName(".color");
btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
