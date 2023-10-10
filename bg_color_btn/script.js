
let bg_btn=document.getElementById('btn_bg');
let bg_clr=document.getElementById('bdy');
bg_btn.addEventListener('click',function (){
   
    bg_btn.style.backgroundColor=getRandomRGB();
    bg_btn.style.color=getRandomRGB();
    bg_clr.style.backgroundColor=getRandomRGB();

});

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }