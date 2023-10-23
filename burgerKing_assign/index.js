
let inputs = document.querySelectorAll('input');
let order_btn = document.querySelector('.order_now');
let img = document.querySelector('.order_img');
let order_no= document.querySelector('.order_no span');
let order_no_display= document.querySelector('.order_no');
// 

inputs.forEach((inp) => {
    inp.addEventListener('change', (clc) => {
        order_btn.addEventListener('click', () => {
            console.log(order_btn.innerHTML);

            // console.log(clc.target.classList[0]);
            let ch = clc.target.classList[0];
            if (ch == 'ch1') {
                img.src = 'https://media.istockphoto.com/id/1490071902/photo/a-large-juicy-fresh-burger-the-king-of-burgers.webp?b=1&s=170667a&w=0&k=20&c=Cj5HLOI7HgxegEFAfsg0G1Dl4CyA2i2VU5FEyAVs5F4=';
                clc.checked = false;
            } else if (ch == 'ch2') {
                img.src = 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D';

            }
            else if (ch == 'ch3') {
                img.src = 'https://images.unsplash.com/photo-1613564834361-9436948817d1?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpenphfGVufDB8fDB8fHww';

            }
            order_no.innerText=getRandomNo()+""+getRandomNo()+""+getRandomNo()+""+getRandomNo();

        });
    })

});

function getRandomNo(){
    return Math.floor(Math.random() * 10);
}


