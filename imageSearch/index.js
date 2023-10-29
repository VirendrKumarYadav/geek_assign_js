let apikey="ijJDbmgiE-jfGZrmXxIQLiF589r_jBh32ED0cPD5gEc";
let count=10;
let api=`https://api.unsplash.com/photos/random/?client_id=${apikey}8&count=${count}`;

async function getApiData(){
let responces=await fetch(api);
let data=await responces.json();
console.log(data)
}

getApiData();