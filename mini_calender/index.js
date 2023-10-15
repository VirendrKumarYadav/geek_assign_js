const time = document.querySelector('.time');
let dt_tm = new Date().toLocaleString();
let ss = dt_tm.split(' ');
console.log(ss);
time.textContent = `Time :${ss[1]} ${ss[2]}`;

let day = document.querySelector('.day');
const d = new Date();
let day_arr = ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'];
let month_arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log(d);
// day
let listdate = ss[0].split('/')[0];
day.textContent = ss[0].split('/')[0];
// log(listdate);
let month = document.querySelector('.month');
// month
month.textContent = month_arr[ss[0].split('/')[1] - 1];
// year
let year = document.querySelector('.year');

year.textContent =ss[0].split('/')[2].split(',')[0];


// console.log(d.split('')[0]);
// day_arr.forEach(function day(ds) {
// // if(d.includes(d.split(' ')[0])){
// //     console.log(d);
// // }

// });