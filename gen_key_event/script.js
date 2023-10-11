
document.addEventListener('keydown', (event) => {

if((event.ctrlKey && event.keyCode<=65 && event.keyCode<=90) ||(event.ctrlKey && event.keyCode>=48 && event.keyCode <=58)){
console.log("hello this is crtl key");
let msg_head = document.querySelector('.msg-box');
let msg = "You have pressed Ctrl + " + event.key + " key";
msg_head.textContent = msg;
let key_code=document.querySelector('.key');
let code=event.which;
key_code.textContent=code;
console.log(event.keyCode + ' ' + event.key);
event.style.animationName= 'slideInDown';

}else{
    let msg_head = document.querySelector('.msg-box');
    let msg = "You have pressed " + event.key + " key";
    msg_head.textContent = msg;
    let key_code=document.querySelector('.key');
    let code=event.which;
    key_code.textContent=code;
    // console.log(event.keyCode + ' ' + event.key);
}
})