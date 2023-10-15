

const ball = document.getElementById("ball_container");


document.addEventListener("keydown", moveBall);

let t = 0
let left = 0;
function moveBall(event) {
    // key code
    let key = event.keyCode;
    // console.log(event.key + " " + key);
    let browserHeight = document.documentElement.clientHeight;
    let browserWidth = document.documentElement.clientWidth;
    let elementWidth = ball.offsetWidth;

  
//    if(event.keyCode =='38'){
//     ball.style.top = ball.offsetTop -10 + "px";
//     // console.log("");
//    }

//    if(event.keycode =='40'){
//     ball.style.bottom = ball.offsetTop+10 + "px";
//    }

//    if(event.keycode =='39'){
//     ball.style.left = ball.offsetLeft + 10 + "px";
//    }

//    if(event.keycode =='37'){
//     ball.style.right = ball.offsetLeft -10 + "px";
//    }
    //move with d & >
    if(key == 68 || key == 39){
        if(left + elementWidth + 10 <= browserWidth){
            ball.style.left = left+10+"px";
            left += 10;
        }else{
            ball.style.left = 1+"px";
            left = 0;
        }
    }

    //for the s and 
    if(key == 83 || key == 40){
        if(t + elementWidth + 10 <= browserHeight){
            ball.style.top = t+10+"px";
            t+=10;
        }
    }

    //for the w and ^ 
    if(key == 87 || key == 38){
        if(t - 10 >= 0){
            ball.style.top = t-10+"px";
            t-=10;
        }
    }


    //move with a & >
    if(key == 65 || key == 37){
        if(left - 10 >= 0){
            ball.style.left = left-10+"px";
            left -= 10;
        }
    }


}