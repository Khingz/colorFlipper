//asign variable
const btn = document.getElementById('hex-btn');
const btnAuto = document.getElementById('auto-flip');
const btnAutoStop = document.getElementById('stop-flip');
const main = document.querySelector('main');
const colorIdentity = document.getElementById('color-identity');


//store hex value in an array
const hexVal = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

//click event for manual flipper
btn.addEventListener('click', () => {
    let hexColor = '#';
    for(let j = 0; j < 6; j++) {
        hexColor += hexVal[getRandom()];
    }
    main.style.backgroundColor = `${hexColor}`;
    colorIdentity.innerText = hexColor;
})

//get random number function
const getRandom = () => {
    return Math.floor(Math.random() * hexVal.length);
}


//automate flipper

// *initialize flip
let flip;
let autoFlip = false;

//eevent listener for flip start
btnAuto.addEventListener('click', () => {
    flip = setInterval(startFlip, 500);
    btnAuto.style.pointerEvents = 'none';
})

//eevenr listener for flip stop
btnAutoStop.addEventListener('click', () => {
    stopFlip();
    btnAuto.style.pointerEvents = 'auto';
})

//start function
function startFlip() {
    let hexColor = '#';
    for(let j = 0; j < 6; j++) {
        hexColor += hexVal[getRandom()];
        main.style.backgroundColor = `${hexColor}`;
        colorIdentity.innerText = hexColor;
    }
}

//stop function
function stopFlip() {
    clearInterval(flip);
}



