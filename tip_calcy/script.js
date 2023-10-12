
const bill_amt = document.querySelector('#bill_amt');
const tip_am = document.querySelector('#tip_amt');
const noOfPpl = document.querySelector('#noOfPeople');
const total_tip = document.querySelector('.total_tip_amt');
const total_amt = document.querySelector('.total_amt');
const calculate_btn = document.querySelector('#calcy');
const clr_btn = document.querySelector('#clr');
console.log(bill_amt + " " + tip_am + " " + clr_btn);
// console.log(total_amt);

let bill = 0, tip = 0, ppl = 0;
bill_amt.addEventListener('input', (amt) => {
   bill = parseInt(amt.target.value);
});

tip_am.addEventListener('input', (amt1) => {
   tip = parseInt(amt1.target.value);
   // console.log(tip);
});
noOfPpl.addEventListener('input', (amt2) => {
   ppl = parseInt(amt2.target.value);
});

calculate_btn.addEventListener('click', (a) => {
   // console.log(a.target.value);
   tip = (tip * bill);
   tip = tip / 100;
   // console.log(tip);
   total_tip.textContent = tip ;
   total_amt.textContent = tip + bill;
});
clr_btn.addEventListener('click', () => {
   console.log(total_amt.textContent);
   bill_amt.value = -0;
   tip_am.value = 0;
   noOfPpl.value = 0;
   total_tip.textContent = '00';
   total_amt.textContent = '00';

});