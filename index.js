let count = 0;

function buttonClicked1() {
    count++;
    document.getElementById("countDisplay").textContent = count;
}

function buttonClicked2() {
    count--;
    document.getElementById("countDisplay").textContent = count;
}