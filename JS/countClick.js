const elementCountClick = document.getElementById("elementCountClick");
let countClick = 0;

function functionCountClick() {
    countClick ++;
    elementCountClick.innerHTML = countClick;
}
