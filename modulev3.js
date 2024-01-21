/*flipping function v3, storing character using the letterCode, flipping one char at once in one direction, 
 with possibility of adding pseudo-animation with help of CSS */

// defining charList
const charList = 
[
    ' ' , 
    '!' , 
    '#', 
    '%',  
    '(', 
    ')', 
    '*', 
    '+', 
    '-', 
    '/', 
    ',', 
    '.', 
    '0', 
    '1', 
    '2', 
    '3', 
    '4', 
    '5', 
    '6',
    '7',
    '8',
    '9',
    ':',
    '?',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '^',
    '~',
];

const originalDest = ['Z', 'R', 'H'];
const targetDest = ['D', 'X', 'B'];
const targetDestCode = targetDest.map((char) => {
    return charList.indexOf(char);
});

//flip function
const flip = (element) => {
    if (element.innerHTML !== '~') {
        element.innerHTML = charList[charList.indexOf(element.innerHTML)+1];
    } else {
        element.innerHTML = ' ';
    }
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

const checkFlip = (moduleId) => {
    let upperElement = document.getElementsByClassName('charBox')[moduleId].children[0].children[0];
    let lowerElement = document.getElementsByClassName('charBox')[moduleId].children[1].children[0];
    if (charList.indexOf(upperElement.innerHTML) !== targetDestCode[moduleId] || charList.indexOf(lowerElement.innerHTML) !== targetDestCode[moduleId]) {   
        if (charList.indexOf(upperElement.innerHTML) !== targetDestCode[moduleId] && charList.indexOf(lowerElement.innerHTML) !== targetDestCode[moduleId]) {
            if (upperElement.innerHTML === lowerElement.innerHTML) {
                flip(upperElement);
                addGradient(upperElement, lowerElement);
            } else if (Math.floor(Math.random() * 10) > 4) {
                flip(upperElement);
                flip(lowerElement);
                addGradient(upperElement, lowerElement);
            } else {
            flip(lowerElement);
            removeGradient(upperElement, lowerElement);
            }
        } else {
        flip(lowerElement);
        removeGradient(upperElement, lowerElement);
        } 
    }   
}

const resetFramev2 = (moduleId) => {
    let upperElement = document.getElementsByClassName('charBox')[moduleId].children[0].children[0];
    let lowerElement = document.getElementsByClassName('charBox')[moduleId].children[1].children[0];
    upperElement.innerHTML = originalDest[moduleId];
    lowerElement.innerHTML = originalDest[moduleId];
    removeGradient(upperElement, lowerElement);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function flipDelayLoop() {
    for (let i = 0; i < 40; i++) {
        checkFlip(0);
        await sleep(50); // sleep for 0.05s
    }
}

document.getElementById('nextFrame').addEventListener('click',function () {checkFlip(0)});
document.getElementById('resetFrame').addEventListener('click',function() {resetFramev2(0)});
document.getElementById('startLoop').addEventListener('click',flipDelayLoop);
/*
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
*/

/*
const flipNextFrame = () => {
    let targetChar = 'Z'
    let upperElement = document.getElementById('letterUpperHalf');
    let lowerElement = document.getElementById('letterLowerHalf');
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

const resetFrame = () => {
    let upperElement = document.getElementById('letterUpperHalf');
    let lowerElement = document.getElementById('letterLowerHalf');
    upperElement.innerHTML = 'A';
    lowerElement.innerHTML = 'A';
    removeGradient(upperElement, lowerElement);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function flipDelayLoop() {
    for (let i = 0; i < 40; i++) {
        flipNextFrame();
        await sleep(50); // sleep for 0.05s
    }
}

document.getElementById('nextFrame').addEventListener('click',flipNextFrame);
document.getElementById('resetFrame').addEventListener('click',resetFrame);
document.getElementById('startLoop').addEventListener('click',flipDelayLoop);
*/
