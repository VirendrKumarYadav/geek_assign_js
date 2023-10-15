const dd_selectedData = document.querySelector('.method_sort');

dd_selectedData.addEventListener('change', () => {
    // console.log(dd_selectedData.value);
     const thead=document.querySelectorAll('thead td');
     for(let i=0; i<thead.length; i++){
     if(thead[i].getAttribute('value')=='1'||thead[i].getAttribute('value')=='2'){
        // console.log(""+thead[i]);
        if(thead[i].innerText==dd_selectedData.value){
          numSort(i)
        }
        
     }else if(thead[i].innerText==dd_selectedData.value){
        sorting(i);
        // console.log(dd_selectedData.value);
     }
     }

})
const tbody=document.querySelector('tbody');
function numSort(i) {
    let name_srt = document.querySelectorAll('tbody tr');
    let arr_tr=Array.from(name_srt);
    arr_tr.sort((a,b)=>{
        if(parseInt(a.children[i].innerText)<parseInt(b.children[i].innerText))
              return -1 
            else if(parseInt(a.children[i].innerText)>parseInt(b.children[i].innerText))
            return 1;
            else
            return 0;
    })
    
    tbody.replaceChildren(...arr_tr);
}

function sorting(i) {
    let name_srt = document.querySelectorAll('tbody tr');
    let arr_tr=Array.from(name_srt);
    arr_tr.sort((a,b)=>{
        if(a.children[i].innerText<b.children[i].innerText)
              return -1 
            else if(a.children[i].innerText>b.children[i].innerText)
            return 1;
            else
            return 0;
    })
    tbody.replaceChildren(...arr_tr);
    // console.log(arr_tr);
}

    
