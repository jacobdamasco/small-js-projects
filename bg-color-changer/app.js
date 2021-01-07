let background = document.querySelector("body");
let button = document.querySelector('.button');
let hexChars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];


function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function getRandomColor() {
    let randomColor = "#";
    for (let i=0; i<6; i++) {
        let randomInt = getRandomInt(0, (hexChars.length)-1);
        let randomHexChar = hexChars[randomInt];
        randomColor += randomHexChar;
    }
    return randomColor;
}

function changeColor(color) {
    document.getElementById("bg-color").innerHTML = "Current value: " + color;
    return color;
}

button.onclick = function() {
    var color = changeColor(getRandomColor());
    background.style.backgroundColor = color;
}