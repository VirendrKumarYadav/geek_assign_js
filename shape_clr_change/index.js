
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange', 'purple', 'white', 'black'];


let index = 0;

function changeColor() {
   const clr = document.getElementById('sq_clr');
   clr.style.backgroundColor = getRandomRGB();
   index++;
   if (index == colors.length) {
      index = 0;
   }
}
let i=0;
let sp = ['triangle-left', 'square']
function changeShape() {
   let shape = document.getElementById('sq_shape');
   shape.className = sp[i];
   
  
   if (document.getElementById('sq_shape').className == "triangle-left") {
      i++;
      console.log(i+" shape"+sp.length);
   }else{
      i=0
   }
   

}

function getRandomRGB() {
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);

   return `rgb(${r}, ${g}, ${b})`;
}

//  function getRandomShape() {
//    const r = Math.floor(Math.random() * 101);
//    const g = Math.floor(Math.random() * 101);
//    const b = Math.floor(Math.random() * 101);
//   console.log(r+" "+g+" "+b);
//    return `polygon(${r}% 0%, 25% ${g}% , 100% ${g}%%, ${b}% 100%, 0% ${r}%, 0% ${b}%)`;
//  }
