let str = 'shaileshsadfas';
let str1 = 'asdf ertef asfdadsf';
let str2 = 'javasafdasdfasd';
let str3 = 'Javaasdflkj;lk';

if (str3.slice(0, 4) === 'java' || str3.slice(0, 4) === 'Java') {
  console.log(true);
} else {
  console.log(false);
}

//  good solution is usig substring method
// function start_spec_str(str) {
//   if (str.length < 4) {
//     return false;
//   }
//   front = str.substring(0, 4);
//   if (front == 'Java') {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(start_spec_str('JavaScript'));
// console.log(start_spec_str('Java'));
// console.log(start_spec_str('Python'));
