//set color for every page
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//to get button and color
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

// attach event handler to element
btn.addEventListener("click", function() { 

    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    console.log(randomNumber);

});

function getRandomNumber() {
     return Math.floor(Math.random() * colors.length);
}
