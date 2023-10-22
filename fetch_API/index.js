async function api() {
    let data=await fetch('https://api.github.com/users/VirendrakumarYadav');
    =data.json();
//   data.array.forEach(element => {
    
//   });ch(element => {
    console.log(data);
//   });
}
api();

