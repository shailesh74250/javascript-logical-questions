let first = 1;
let last = 1000; 

const randomNumber = generateRandomNumber(first, last);
console.log(randomNumber);
// generating random nubmer
function generateRandomNumber(first, last) {
    // let time = new Date().getTime();
    let timestamp = Date.now();
    return getLastTwoDigit(timestamp);
}

function getLastTwoDigit(number) {
    // if we want three digit random number from 1 to 1000 then we can use number%1000;
    return number%100;
}