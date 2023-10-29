let category = document.querySelector('.sidebar__categories');
let theme = document.querySelector('.toggle-input');
console.log(theme.innerHTML);

async function getAllCategries() {
    let res = await fetch('https://books-backend.p.goit.global/books/category-list');
    let categoryList = await res.json();
    categoryList.forEach(element => {
        let li = document.createElement('li');
        li.classList.add('category-item');
        li.setAttribute('data-id', element.list_name);
        li.innerText = element.list_name;
        category.appendChild(li);
    });

}
getAllCategries();
// main container 
let main_cont = document.querySelector('.main_container');

// books list 
async function getAllBooks() {
    let res = await fetch('https://books-backend.p.goit.global/books/top-books');
    let categoryList = await res.json();
    let bookCount = 0;

    for (let i = 0; i < 3; i++) {
        let element = categoryList[i];
        for (let index = 0; index < element.books.length - 1; index++) {
            // console.log();
            bookCount++;
            console.log(element.books[index].book_image);
            let div = document.createElement('div');
            div.classList.add('book-item');

            div.innerHTML = ` <img src="${element.books[index].book_image}" alt="">`;
            main_cont.appendChild(div);
        }
    }
}
getAllBooks();
// main books container
let main_Img_cont = document.querySelector('.image_container');

async function getMainData() {
    let res = await fetch('https://books-backend.p.goit.global/books/top-books');
    let categoryList = await res.json();
    let bookCount = 0;

    for (let i = 0; i < categoryList.length; i++) {
        let element = categoryList[i];
        let head=document.createElement('div');
        head.classList.add('rowList');
        let heading=document.createElement('div');
        heading.classList.add('heading');
        heading.innerHTML=`<h2>${element.list_name}</h2>`;
        head.appendChild(heading);
        main_Img_cont.appendChild(head);
        let head_1=document.createElement('div');
        head_1.classList.add('rowList-image');
        for (let index = 0; index < element.books.length - 1; index++) {
            // console.log(.list_name
            bookCount++;
            // console.log(element.books[index].book_image);
            let div = document.createElement('div');
            div.classList.add('book-item-main');
            
            div.innerHTML = ` <img src="${element.books[index].book_image}" alt="">`;
            head_1.appendChild(div);
            head.appendChild(head_1);

        }
    }
}
getMainData();