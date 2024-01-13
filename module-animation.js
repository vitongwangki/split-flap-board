/* 
// flipping demo v0, inappropriate variable usage
const flip = (targetLetter) => {
    let upper = document.getElementById('letterUpperHalf').innerHTML;
    let lower = document.getElementById('letterLowerHalf').innerHTML;
    console.log(upper.charCodeAt(0));
    console.log(lower.charCodeAt(0));
    console.log(target.charCodeAt(0));
    while (upper !== targetLetter) {
        if (upper.charCodeAt(0) > target.charCodeAt(0)) {
            upper = String.fromCharCode(upper.charCodeAt(0) - 1);
            document.getElementById('letterUpperHalf').innerHTML = upper;
            console.log(upper);
        } else if (upper.charCodeAt(0) < target.charCodeAt(0)) {
            upper = String.fromCharCode(upper.charCodeAt(0) + 1);
            document.getElementById('letterUpperHalf').innerHTML = upper;
            console.log(upper);
        };
    };
    while (lower !== targetLetter) {
        if (lower.charCodeAt(0) > target.charCodeAt(0)) {
            lower = String.fromCharCode(lower.charCodeAt(0) - 1);
            document.getElementById('letterLowerHalf').innerHTML = lower;
            console.log(lower);
        } else if (lower.charCodeAt(0) < target.charCodeAt(0)) {
            upper = String.fromCharCode(lower.charCodeAt(0) + 1);
            document.getElementById('letterLowerHalf').innerHTML = lower;
            console.log(lower);
        };
    };
}
*/

// flipping demo of flipping character in the split-flap module
/*
const flipv1 = (targetLetter) => {
    let upper = document.getElementById('letterUpperHalf');
    let lower = document.getElementById('letterLowerHalf');
    
    // logging target letter UTF-16 code for validation
    console.log(upper.innerHTML.charCodeAt(0));
    console.log(lower.innerHTML.charCodeAt(0));
    console.log(targetLetter.charCodeAt(0));
    while (upper.innerHTML !== targetLetter) {
        if (upper.innerHTML.charCodeAt(0) > targetLetter.charCodeAt(0)) {
            upper.innerHTML = String.fromCharCode(upper.innerHTML.charCodeAt(0) - 1);
            console.log(upper.innerHTML); // logging character change
        } else if (upper.innerHTML.charCodeAt(0) < targetLetter.charCodeAt(0)) {
            upper.innerHTML = String.fromCharCode(upper.innerHTML.charCodeAt(0) + 1);
            console.log(upper.innerHTML); // logging character change
        }
    };
    while (lower.innerHTML !== targetLetter) {
        if (lower.innerHTML.charCodeAt(0) > targetLetter.charCodeAt(0)) {
            lower.innerHTML = String.fromCharCode(lower.innerHTML.charCodeAt(0) - 1);
            console.log(lower.innerHTML); // logging character change
        } else if (lower.innerHTML.charCodeAt(0) < targetLetter.charCodeAt(0)) {
            lower.innerHTML = String.fromCharCode(lower.innerHTML.charCodeAt(0) + 1);
            console.log(lower.innerHTML); // logging character change
        };
    };
}
flipv1(targetChar);
*/

/*flipping function v2, flipping one char at once, 
 with possibility of adding pseudo-animation with help of CSS */
const flipv2 = (element, targetLetter) => {
    if (element.innerHTML.charCodeAt(0) < targetLetter.charCodeAt(0)) {
        console.log('Check');
    }
}

flipv2(document.getElementById('letterUpperHalf'), 'z');