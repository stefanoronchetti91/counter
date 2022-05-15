const increaseButton = document.querySelector('#increase');
const decreaseButton = document.querySelector('#decrease');
const actualCounter = document.querySelector('#actual-value');
const resetButton = document.querySelector('#reset');

let count = 0;

updateCounter();

increaseButton.addEventListener("click", increase);
decreaseButton.addEventListener("click", decrease);
resetButton.addEventListener("click", reset)


function increase () {
    count ++;
    updateCounter();
}

function decrease () {
    count --;
    updateCounter();
}

function reset () {
    count = 0;
    updateCounter();
}


function updateCounter () {
    actualCounter.innerHTML = count;
}