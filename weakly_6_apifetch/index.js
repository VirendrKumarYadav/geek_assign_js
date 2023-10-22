let mobiles = document.querySelector('.ph_itams');

async function fetchData() {
  let fetchData = await fetch('https://openapi.programming-hero.com/api/phones?search=oppo');
  let mobiles_data = await fetchData.json();
  console.log(mobiles_data.data[0]);
  for (let i = 0; i < 6; i++) {

    let innerHtml_Api = ` 
<figure>
  <img src=${mobiles_data.data[i].image} alt="phone">
</figure>
<div class="card-body">
  <h2 class="card-title">${mobiles_data.data[i].phone_name}</h2>
  <p>There are many variations of passages of available, but the majority have suffered</p>
  <div class="card-actions">
    <button onclick="showDetailsHandler('apple_iphone_13_mini-11104')" class="btn">Show
      Details</button>
  </div>
</div>`;
    let card = document.createElement('div');
    card.classList = 'card';
    card.innerHTML = innerHtml_Api;
    mobiles.appendChild(card);
  }
}
fetchData();


// search
let searchValue = document.querySelector('#search_phone');
let saerch_btn = document.querySelector('#search_btn');
let search_val = '';
searchValue.addEventListener('input', (e) => {
  search_val = e.target.value;
})

async function searchData(searchValue) {
  let update = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`);
  let mobiles_url = await update.json();
  console.log(mobiles_url.data[0]);

  for (let i = 0; i < 6; i++) { 

    let innerHtml_Api = ` 
<figure>
<img src=${mobiles_url.data[i].image} alt="phone">
</figure>
<div class="card-body">
<h2 class="card-title">${mobiles_url.data[i].phone_name}</h2>
<p>There are many variations of passages of available, but the majority have suffered</p>
<div class="card-actions">
  <button onclick="showDetailsHandler('apple_iphone_13_mini-11104')" class="btn">Show
    Details</button>
</div>
</div>`;
    let card = document.createElement('div');
    card.classList = 'card';
    card.innerHTML = innerHtml_Api;
    mobiles.removeChild(document.querySelector('.card'));
    mobiles.appendChild(card);
  }
}
saerch_btn.addEventListener('click', () => {
  console.log(search_val);
  searchData(search_val);
})



