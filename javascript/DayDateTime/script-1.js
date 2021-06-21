// month will start form 0 to 11 so 0 means Januray and 11 December

const dayDateTime = new Date();

const days = [
  'Sunday',
  'Monday',
  'Thuesday',
  'Wenesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const day = days[dayDateTime.getDay()];
document.getElementById('day').innerText = day;

const date = dayDateTime.getDate();
const year = dayDateTime.getFullYear();
const month = dayDateTime.getMonth();
const fullDate = date + ' / ' + month + ' / ' + year;

// because months start from 0 to 11 Jan to Dec
document.getElementById('todayDate').innerText = fullDate;

// time
let hours = dayDateTime.getHours();
const minutes = dayDateTime.getMinutes();
const second = dayDateTime.getSeconds();

if (hours > 12) {
  hours = hours - 12 + 'PM';
} else {
  hours + 'AM';
}

console.log(hours);

const time = hours + ':' + minutes + ':' + second;

document.getElementById('time').innerText = time;
