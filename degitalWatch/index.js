let hh = document.querySelector('.hh');
let mm = document.querySelector('.mm');
let ss = document.querySelector('.ss');
let ms = document.querySelector('#ms');
let msg = document.querySelector('.grettings_ind');
// Aus
let aus_hh = document.querySelector('.aus_hh');
let aus_mm = document.querySelector('.aus_mm');
let aus_ss = document.querySelector('.aus_ss');
// let aus_ms = document.querySelector('#aus_ms');
let aus_msg = document.querySelector('.grettings_aus');
// US
let us_hh = document.querySelector('.us_hh');
let us_mm = document.querySelector('.us_mm');
let us_ss = document.querySelector('.us_ss');
// let us_ms = document.querySelector('us_ms');
let us_msg = document.querySelector('.grettings_us');
var d = new Date();
let num=1;
function setTimeIndia() {
    var d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let msr = Math.floor(parseInt(d.getMilliseconds())/10);
    // console.log(hr, min, sec, msr);
    if (parseInt(hr) >= 0 && parseInt(hr) <= 9) {
        hh.textContent = '0' + hr;
    } else {
        hh.textContent = hr;
    }
    if (min >= '0' && min <= '9') {
        mm.textContent = '0' + min;
    } else {
        mm.textContent = min;
    }
    if (ss >= '0' && ss <= '9') {
        ss.textContent = '0' + sec;
    } else {
        ss.textContent = sec;
    }
    
    ms.textContent = num;
    num++;
    if(num==99){
        num=0;
    }
    // console.log(hr);
    if (parseInt(hr)>=12 && parseInt(hr)<=17) {
        msg.textContent = "Hello! Good Afternoon";
    } else if (parseInt(hr) >= 16 && parseInt(hr) >= 24) {
        console.log("hi");
        msg.textContent = "Hello! Good Evening";
    }
    
}
setInterval(setTimeIndia, 10);
// Austrelia

function setTimeAus() {
    const easternTime = d.toLocaleString("en-AU", { timeZone: "Australia/Sydney" });
    // console.log(easternTime.split(" ")[1].split(":"));
    let hr = easternTime.split(" ")[1].split(":")[0];
    let min = easternTime.split(" ")[1].split(":")[1];
    let sec = easternTime.split(" ")[1].split(":")[2];
    let msr = Math.floor(parseInt(new Date().getMilliseconds()) / 10);

    // console.log(hr, min, sec, ms);
    if (parseInt(hr) >= 0 && parseInt(hr) <= 9) {
        aus_hh.textContent = '0' + hr;
    } else {
        aus_hh.textContent = hr;
    }

    aus_mm.textContent = min;
    aus_ss.textContent = sec;
    // ms.textContent = msr;
    if (parseInt(hr) >= 12 && parseInt(hr) <= 16) {
        aus_msg.textContent = "Hello! Good Afternoon";
    } else if (parseInt(hr) >= 16 && parseInt(hr) >= 24) (
        aus_msg.textContent = "Hello! Good Evening"
    )
}
setInterval(setTimeAus, 1000);
// US Time Zone

function setTimeUS() {
    const easternTime = d.toLocaleString("en-US", { timeZone: "America/New_York" });
    // console.log(easternTime.split(" ")[1].split(":"));
    let hr = easternTime.split(" ")[1].split(":")[0];
    let min = easternTime.split(" ")[1].split(":")[1];
    let sec = easternTime.split(" ")[1].split(":")[2];

    if (parseInt(hr) >= 0 && parseInt(hr) <= 9) {
        us_hh.textContent = '0' + hr;
    } else {
        us_hh.textContent = hr;
    }

    us_mm.textContent = min;
    us_ss.textContent = sec;
    // ms.textContent = msr;
    if (parseInt(hr) >= 12 && parseInt(hr) <= 16) {
        us_msg.textContent = "Hello! Good Afternoon";
    } else if (parseInt(hr) >= 16 && parseInt(hr) >= 24) (
        us_msg.textContent = "Hello! Good Evening"
    )
}
setInterval(setTimeUS, 100);
var d = new Date();
const easternTime = d.toLocaleString("en-US", { timeZone: "America/New_York" });
const eastAusTime = d.toLocaleString("en-AU", { timeZone: "Australia/Sydney" });


console.log();
// setTimeout(TimeSetUp(easternTime),100);