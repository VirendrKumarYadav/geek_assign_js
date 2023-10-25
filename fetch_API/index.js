async function api() {
    let data=await fetch('https://api.github.com/users/VirendrakumarYadav');
   let datat =data.json();
//   data.array.forEach(element => {
    
//   });ch(element => {
    console.log(data);
//   });
}
api();

