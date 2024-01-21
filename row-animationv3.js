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
    '&',
    '<',
    '>', 
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
const currentUpperCode = originalDest.map((char) => {
    return charList.indexOf(char);
});
const currentLowerCode = originalDest.map((char) => {
    return charList.indexOf(char);
});


//Reset or initialize function
const resetFramev2 = (moduleId) => {
    let upperElement = document.getElementsByClassName('charBox')[moduleId].children[0].children[0];
    let lowerElement = document.getElementsByClassName('charBox')[moduleId].children[1].children[0];
    upperElement.innerHTML = originalDest[moduleId];
    currentUpperCode[moduleId] = charList.indexOf(originalDest[moduleId]);
    lowerElement.innerHTML = originalDest[moduleId];
    currentLowerCode[moduleId] = charList.indexOf(originalDest[moduleId]);
    removeGradient(upperElement, lowerElement);
}

//flip function
const flip = (element, moduleId, upper) => {
    if (element.innerHTML !== '~') {
        if (upper) {
            currentUpperCode[moduleId]++;
            element.innerHTML = charList[currentUpperCode[moduleId]];
        } else {
            currentLowerCode[moduleId]++;
            element.innerHTML = charList[currentLowerCode[moduleId]];
        }
    } else {
        if (upper) {
            currentUpperCode[moduleId] = 0;
            element.innerHTML = ' ';
        } else {
            currentLowerCode[moduleId] = 0;
            element.innerHTML = ' ';
        }
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


const flipFramev2 = (moduleId) => {
    let upperElement = document.getElementsByClassName('charBox')[moduleId].children[0].children[0];
    let lowerElement = document.getElementsByClassName('charBox')[moduleId].children[1].children[0];
    if (currentUpperCode[moduleId] !== targetDestCode[moduleId] || currentLowerCode[moduleId] !== targetDestCode[moduleId]) {   
        if (currentUpperCode[moduleId] !== targetDestCode[moduleId] && currentLowerCode[moduleId] !== targetDestCode[moduleId]) {
            if (upperElement.innerHTML === lowerElement.innerHTML) {
                flip(upperElement,moduleId, true);
                addGradient(upperElement, lowerElement);
            } else if (Math.floor(Math.random() * 10) > 4) {
                flip(upperElement,moduleId, true);
                flip(lowerElement,moduleId, false);
                addGradient(upperElement, lowerElement);
            } else {
            flip(lowerElement,moduleId, false);
            removeGradient(upperElement, lowerElement);
            }
        } else {
        flip(lowerElement,moduleId, false);
        removeGradient(upperElement, lowerElement);
        } 
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function flipDelayLoop() {
    while (JSON.stringify(currentLowerCode) !== JSON.stringify(targetDestCode)) {
        checkFlip();
        await sleep(50); // sleep for 0.05s
    }
}

const checkFlip = () => {
    for (let flipBoxNum = 0; flipBoxNum < 3; flipBoxNum ++) {
        flipFramev2(flipBoxNum);
    } 
}

const resetRow = () => {
    for (let flipBoxNum = 0; flipBoxNum < 3; flipBoxNum ++) {
        resetFramev2(flipBoxNum);
    }
}

document.getElementById('nextFrame').addEventListener('click',function () {flipFramev2(0)});
document.getElementById('resetFrame').addEventListener('click',function() {resetRow(0)});
document.getElementById('startLoop').addEventListener('click',flipDelayLoop);
