//set value to get random color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// to get btn and color
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// set event handler with element 
btn.addEventListener("click", function() {
let hexColor = "#";
for(let i = 0;i <6; i++)
{
    hexColor += hex[getRandomNumber()];
}
 color.textContent = hexColor;
 document.body.style.backgroundColor = hexColor;
});

// create function to return highest integer value
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
