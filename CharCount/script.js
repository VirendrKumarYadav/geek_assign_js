const textArea=document.querySelector('.text_container');
// console.log(textArea);
let count=0;
textArea.addEventListener('input', (event) => {
    // log char lenth
//   console.log(event.target.value );
  let enterdText=event.target.value;
  let chars=document.querySelector('.charcount');
  chars.textContent=enterdText.length;

//   log spaces
let sp=document.querySelector('.spaces');
let word=document.querySelector('.word');
let set=document.querySelector('.sentance');
let para=document.querySelector('.para');
let space=enterdText.split(' ');
sp.textContent=space.length-1;
word.textContent=space.length;
// console.log();
// no of para
document.addEventListener('keydown', (event)=>{
    console.log(event.key);
    if(event.key =='Enter'){
       count=count+1;
    }
   })
  para.textContent=Math.floor(count/enterdText.length);
})
