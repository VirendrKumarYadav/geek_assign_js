let day = document.querySelector('.day');
let hour = document.querySelector('.hour');
let month = document.querySelector('.minute');
let sec = document.querySelector('.secound');

let newyrTime = new Date('Jan 1,2024 00:00:00').getTime();


function update() {

    let crtDateTime = new Date().getTime();
    let remainTime = newyrTime - crtDateTime;

    let oneSec = 1000;
    let oneMin = oneSec * 60;
    let onehour = oneMin * 60;
    let oneday = onehour * 24;

    day.innerText = Math.floor(remainTime / oneday);
    remainTime = (remainTime % oneday);
    hour.innerText = Math.floor(remainTime / onehour);
    remainTime = remainTime % onehour;
    month.innerText = Math.floor(remainTime / oneMin);
    remainTime = remainTime % oneMin;
    sec.innerText = Math.floor(remainTime / oneSec);
}

setInterval(update,1000);