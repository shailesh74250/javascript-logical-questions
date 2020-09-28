const date = new Date();

const dd = date.getDate();
const mm = date.getMonth();
const yyyy = date.getFullYear();

const day = dd + '/' + mm + '/' + yyyy;
console.log(dd, mm, yyyy);
document.getElementById('ddmmyyyy').innerText = day;

const day2 = mm + '/' + dd + '/' + yyyy;

document.getElementById('mmddyyyy').innerText = day2;

const day3 = dd + '-' + mm + '-' + yyyy;

document.getElementById('dd-mm-yyyy').innerText = day3;

// es-6 version
// let today = new Date();
// let dd = today.getDate();

// let mm = today.getMonth() + 1;
// const yyyy = today.getFullYear();
// if (dd < 10) {
//   dd = `0${dd}`;
// }

// if (mm < 10) {
//   mm = `0${mm}`;
// }
// today = `${mm}-${dd}-${yyyy}`;
// console.log(today);
// today = `${mm}/${dd}/${yyyy}`;
// console.log(today);
// today = `${dd}-${mm}-${yyyy}`;
// console.log(today);
// today = `${dd}/${mm}/${yyyy}`;
// console.log(today);
