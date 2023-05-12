const elementCountClick = document.getElementById("elementCountClick");
let countClick = 0;
let minNumClicks = numImagesPairs * 4 - 2;
let maxNumClicks = minNumClicks * 4;
let clickScore;

function functionCountClick() {
    if (!isGameOver) {
        countClick ++;
        elementCountClick.innerHTML = countClick;
    }
}