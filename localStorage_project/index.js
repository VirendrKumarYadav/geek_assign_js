let name=document.querySelector('.name input');
let email=document.querySelector('.email input');
let phone=document.querySelector('.phone input');
let village=document.querySelector('.village input');
let city=document.querySelector('.city input');
let pincode=document.querySelector('.pincode input');
let submit=document.querySelector('.container button');



// Name
let uiName="";
name.addEventListener('input', ()=>{
    uiName=name.value;
    console.log(uiName);
    setAndGetValue();
})


function setAndGetValue(){
    setString("Name", uiName);
    console.log(getString("Name"));
}



submit.addEventListener('click', ()=>{
    console.log(submit.innerHTML);
})




// 
function setString(name,value){
   return localStorage.setItem(name,value);
}

function getString(name){
return localStorage.getItem(name);
}
