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
    let targetChar = 'H'
    let upperElement = document.getElementById('letterUpperHalf');
    let lowerElement = document.getElementById('letterLowerHalf');
    if (upperElement.innerHTML === lowerElement.innerHTML) {
        if (upperElement.innerHTML.charCodeAt(0) < targetChar.charCodeAt(0)) {
            flip(lowerElement, targetChar);
        } else if (upperElement.innerHTML.charCodeAt(0) > targetChar.charCodeAt(0)) {
            flip(upperElement, targetChar);
        }
    } else {
        flip(upperElement, targetChar);
        flip(lowerElement, targetChar);
    };
    /* upperElement.style.background = 'linear-gradient(to top, black 55%, white 70%)';
    upperElement.style.backgroundClip = 'text';
    */
    if (upperElement.innerHTML !== lowerElement.innerHTML) {
        addGradient(upperElement, lowerElement);
    } else {
        removeGradient (upperElement, lowerElement);
    };
}

const addGradient = (element1, element2) => {
    let gradientPoint = Math.floor(Math.random() * 30 + 35);
    console.log(gradientPoint);
    if (gradientPoint > 50) {
        element1.style.background = `linear-gradient(to top, black ${gradientPoint}%, grey ${gradientPoint + 5}%, white ${gradientPoint + 10}%)`;
        element1.style.backgroundClip = 'text';
        element2.style.background = `linear-gradient(to bottom, black 50%, white 50%)`;
        element2.style.backgroundClip = 'text';
    } else {
        element2.style.background = `linear-gradient(to bottom, black ${100-gradientPoint}%, grey ${100-gradientPoint + 5}%, white ${100-gradientPoint + 10}%)`;
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

document.getElementById('nextFrame').addEventListener('click',flipNextFrame);
