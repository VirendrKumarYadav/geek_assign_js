

const ball = document.getElementById("ball_container");


document.addEventListener("keydown", moveBall);

let t = 0
let left = 0;
function moveBall(event) {
    // key code
    let key = event.keyCode;
    console.log(event.key + " " + key);
    let height = document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;
    

  
   if(event.keyCode =='38'){
    ball.style.top = ball.offsetTop -10 + "px";
    // console.log("");
   }

   if(event.keycode =='40'){
    ball.style.bottom = ball.offsetTop+10 + "px";
   }

   if(event.keycode =='39'){
    ball.style.left = ball.offsetLeft + 10 + "px";
   }

   if(event.keycode =='37'){
    ball.style.right = ball.offsetLeft -10 + "px";
   }


}