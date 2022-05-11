const increaseButton = document.querySelector('#increase');
const decreaseButton = document.querySelector('#decrease');
const actualCounter = document.querySelector('#actual-value');

let count = 0;

updateCounter();

increaseButton.addEventListener("click", increase);
decreaseButton.addEventListener("click", decrease);


function increase () {
    count ++;
    updateCounter();
}

function decrease () {
    count --;
    updateCounter();
}


function updateCounter () {
    actualCounter.innerHTML = count;
}