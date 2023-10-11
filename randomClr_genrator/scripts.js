
// document.getElementsByTagName('html').addEventListener("onload", myFunction);

// function myFunction(){
let parent=document.querySelector('.container');
for (let i=0; i<31; i++){
    let child=document.createElement('div');
    child.classList.add('childs')
    parent.appendChild(child);
}


let list=document.querySelectorAll('.childs');
list.forEach((e)=> {
   let randomColor = Math.floor(Math.random()*16777215).toString(16);
   e.textContent="#"+randomColor;
   e.style.backgroundColor="#"+randomColor;
   console.log(e);
});