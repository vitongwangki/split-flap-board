/*flipping function v2, flipping one char at once, 
 with possibility of adding pseudo-animation with help of CSS */
const flip = (element, targetLetter) => {
    if (element.innerHTML.charCodeAt(0) < targetLetter.charCodeAt(0)) {
        element.innerHTML = String.fromCharCode(element.innerHTML.charCodeAt(0) + 1);
    } else if (element.innerHTML.charCodeAt(0) > targetLetter.charCodeAt(0)) {
        element.innerHTML = String.fromCharCode(element.innerHTML.charCodeAt(0) - 1);
    } 
}
const flipNextFrame = () => {
    let targetChar = 'A'
    let upperElement = document.getElementById('letterUpperHalf');
    let lowerElement = document.getElementById('letterLowerHalf');
    if (upperElement.innerHTML === lowerElement.innerHTML) {
        if (upperElement.innerHTML.charCodeAt(0) < targetChar.charCodeAt(0)) {
            flip(lowerElement, targetChar);
        } else if (upperElement.innerHTML.charCodeAt(0) > targetChar.charCodeAt(0)) {
            flip(upperElement, targetChar);
        }
    } else if (Math.floor(Math.random() * 10) > 2){
        flip(upperElement, targetChar);
        flip(lowerElement, targetChar);
    } else {
        if (upperElement.innerHTML.charCodeAt(0) < targetChar.charCodeAt(0)) {
            flip(upperElement, targetChar);
        } else if (upperElement.innerHTML.charCodeAt(0) > targetChar.charCodeAt(0)) {
            flip(lowerElement, targetChar);
        }
    }
    if (upperElement.innerHTML !== lowerElement.innerHTML) {
        addGradient(upperElement, lowerElement);
    } else {
        removeGradient (upperElement, lowerElement);
    };
}

const addGradient = (element1, element2) => {
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
    upperElement.innerHTML = 'Z';
    lowerElement.innerHTML = 'Z';
}

document.getElementById('nextFrame').addEventListener('click',flipNextFrame);
document.getElementById('resetFrame').addEventListener('click',resetFrame);
document.addEventListener('keydown', flipNextFrame);

