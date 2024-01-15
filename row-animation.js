/*flipping function v2, flipping one char at once, 
 with possibility of adding pseudo-animation with help of CSS */


const flip = (element, targetLetter) => {
    if (element.innerHTML.charCodeAt(0) < targetLetter.charCodeAt(0)) {
        element.innerHTML = String.fromCharCode(element.innerHTML.charCodeAt(0) + 1);
    } else if (element.innerHTML.charCodeAt(0) > targetLetter.charCodeAt(0)) {
        element.innerHTML = String.fromCharCode(element.innerHTML.charCodeAt(0) - 1);
    } 
}

const flipNextFramev2 = (flipNum) => {
    let targetChar = targetDest[flipNum];
    let upperElement = document.getElementsByClassName('charBox')[flipNum].children[0].children[0];
    let lowerElement = document.getElementsByClassName('charBox')[flipNum].children[1].children[0];
    if (upperElement.innerHTML === lowerElement.innerHTML) {
        // Decide which element should flip first
        if (upperElement.innerHTML.charCodeAt(0) < targetChar.charCodeAt(0)) {
            flip(lowerElement, targetChar);
        } else if (upperElement.innerHTML.charCodeAt(0) > targetChar.charCodeAt(0)) {
            flip(upperElement, targetChar);
        }
    } else if (Math.floor(Math.random() * 10) > 4){
        // flipping both elements at the same time for 60% chance
        flip(upperElement, targetChar);
        flip(lowerElement, targetChar);
    } else { 
        // flipping the lagged element to show intermediate character for 40% chance
        if (Math.abs(upperElement.innerHTML.charCodeAt(0) - targetChar.charCodeAt(0)) > Math.abs(lowerElement.innerHTML.charCodeAt(0) - targetChar.charCodeAt(0))) {
            flip(upperElement,targetChar);
        } else {
            flip(lowerElement,targetChar);
        };
    }
    if (upperElement.innerHTML !== lowerElement.innerHTML) {
        // add gradient on display when not showing the whole character
        addGradient(upperElement, lowerElement);
    } else {
        // remove gradient on display when showing whole character
        removeGradient (upperElement, lowerElement);
    };
}

const addGradient = (element1, element2) => {
    // restricting gradient starts from 30% to 70%
    let gradientPoint = Math.floor(Math.random() * 40 + 30);
    if (gradientPoint > 50) {
        element1.style.background = `linear-gradient(to top, black ${gradientPoint}%, grey ${gradientPoint + 3}%, white ${gradientPoint + 5}%)`;
        element1.style.backgroundClip = 'text';
        element2.style.background = `linear-gradient(to bottom, black 50%, white 50%)`;
        element2.style.backgroundClip = 'text';
    } else {
        element2.style.background = `linear-gradient(to bottom, black ${100-gradientPoint}%, grey ${100-gradientPoint + 5}%, white ${100-gradientPoint + 15}%)`;
        element2.style.backgroundClip = 'text';
        element1.style.background = `linear-gradient(to top, black 50%, white 50%)`;
        element1.style.backgroundClip = 'text';
    }
}

const removeGradient = (element1, element2) => {
    element1.style.background = `linear-gradient(to top, black 50%, white 50%)`;
    element1.style.backgroundClip = 'text';
    element2.style.background = `linear-gradient(to bottom, black 50%, white 50%)`;
    element2.style.backgroundClip = 'text';
}

const resetFramev2 = (flipNum) => {
    let upperElement = document.getElementsByClassName('charBox')[flipNum].children[0].children[0];
    let lowerElement = document.getElementsByClassName('charBox')[flipNum].children[1].children[0];
    upperElement.innerHTML = originalDest[flipNum];
    lowerElement.innerHTML = originalDest[flipNum];
    removeGradient(upperElement, lowerElement);
}
const resetRow = () => {
    for (let flipBoxNum = 0; flipBoxNum < 3; flipBoxNum ++) {
        resetFramev2(flipBoxNum);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function flipDelayLoop() {
    for (let i = 0; i < 40; i++) {
        checkFlip();
        await sleep(50); // sleep for 0.05s
    }
}
const checkFlip = () => {
    for (let flipBoxNum = 0; flipBoxNum < 3; flipBoxNum ++) {
        flipNextFramev2(flipBoxNum);
    } 
}


let originalDest = 'KIX';
let dest = 'YVR';
let targetDest = dest.split('');
let letterBox = document.getElementsByClassName('charBox');
let currentDest = [];
for (let i=0;i<3;i++) {
    currentDest.push(letterBox[i].children[0].children[0].innerHTML);
} ;
console.log(targetDest);
console.log(currentDest);
document.getElementById('nextFrame').addEventListener('click', checkFlip);
document.getElementById('resetFrame').addEventListener('click', resetRow);
document.getElementById('startLoop').addEventListener('click',flipDelayLoop);



