let targetChar = 'H';


const flip = (target) => {
    let upper = document.getElementById('letterUpperHalf').innerHTML;
    let lower = document.getElementById('letterLowerHalf').innerHTML;
    console.log(upper.charCodeAt(0));
    console.log(lower.charCodeAt(0));
    console.log(target.charCodeAt(0));
    while (upper !== target) {
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
    while (lower !== target) {
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

flip(targetChar);
