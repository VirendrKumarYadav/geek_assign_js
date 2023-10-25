
let joke=document.querySelector('#joke');
console.log(joke);

async function getJoke(){
   let data=await fetch('https://https://api.api-ninjas.com/v1/jokes');
   let jsonData= await data.json();
   console.log(jsonData);

} 

getJoke();