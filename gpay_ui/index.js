let next=document.querySelector('.next');
let amt=document.querySelector('.pay input');
let note=document.querySelector('.note');
// let pay_ppAmt=document.querySelector('.pay_btn span');
// console.log(pay_ppAmt);
next.addEventListener('click', ()=>{
localStorage.setItem("Amount",amt.value);
pay_ppAmt.innertext=amt.value;

});


next.addEventListener('click', ()=>{
    localStorage.setItem("Note",note.value);
    });


    