const btns=document.querySelectorAll('button');
const body_p=document.querySelector('p');
const body_head=document.querySelector('h1')
const tab1=document.querySelector('.tab1');
const tab2=document.querySelector('.tab2');
const tab3=document.querySelector('.tab3');
const left_box=document.querySelector('.left');

btns.forEach((btn)=>{
btn.addEventListener('click',(a)=>{
    console.log(btn.className);
    
    if(btn.className=='tab2'){
        btn.style.color='rgb(177, 14, 14)';
        btn.style.backgroundColor='bisque';
        // body_p.textContent="hello";
        body_head.textContent="Backend Developers"
        tab1.style.color='aquamarine';
        tab1.style.backgroundColor='black';
        tab3.style.color='aquamarine';
        tab3.style.backgroundColor='black';
        left_box.style.background=`url('https://acropolium.com/img/articles/find-backend-developers/img01.jpg')`;

    }else  if(btn.className=='tab3'){
        btn.style.color='rgb(177, 14, 14)';
        btn.style.backgroundColor='bisque';
        // body_p.textContent="hello";
        body_head.textContent="Full Stake Developers"
        tab2.style.color='aquamarine';
        tab2.style.backgroundColor='black';
        tab1.style.color='aquamarine';
        tab1.style.backgroundColor='black';
        left_box.style.background=`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6eKxokdpuNIze3uh0yiKxVqAKIRr2JSp_KQ&usqp=CAU')`;

    }else{
        btn.style.color='rgb(177, 14, 14)';
        btn.style.backgroundColor='bisque';
        // body_p.textContent="hello";
        body_head.textContent="Frontend Developers"
        tab2.style.color='aquamarine';
        tab2.style.backgroundColor='black';
        tab3.style.color='aquamarine';
        tab3.style.backgroundColor='black';
        left_box.style.background=`url('https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1555949963-ff9fe0c870eb%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8M3x8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8fHwxNjk2OTY3MDI0fDA%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dfront%252520end%252520developer%26blend%3D000000')`;
    }

});

});