
const mouse=document.querySelector('.mouse');

mouse.addEventListener('mouseover',(a)=>{
//   console.log();
   let l=Math.floor(Math.random()*1200);
   let r=Math.floor(Math.random()*1200);
   let u=Math.floor(Math.random()*500);
   let d=Math.floor(Math.random()*550);
   mouse.style.left=l+"px";
   mouse.style.right=r+"px"; 
   mouse.style.top=u+"px";
   mouse.style.bottom=d+"px";
   mouse.style.cursor='pointer';
   const net=document.querySelector('.net');

   if(parseInt(mouse.clientHeight)<=parseInt(net.clientHeight) && parseInt(mouse.clientWidth)>=parseInt(net.clientWidth) ){
      console.log("mouse is catched"+mouse.clientHeight+" "+mouse.clientWidth);
      console.log("mouse is catched"+net.clientHeight+" "+net.clientWidth);
   }
});
