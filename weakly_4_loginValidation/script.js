
const form = document.querySelector('form');
let singnIn_btn = document.querySelector('button');
let uname = document.querySelector('#username');
let password = document.querySelector('#password');


// singnIn_btn.addEventListener('click', () => {
form.addEventListener('submit', () => {

    let user = uname.value;
    let pass = password.value;
    console.log(usernameValidation(user));
    console.log(passwordValidation(pass));

    if (usernameValidation(user) == false) {
        // alert()
        alert("Username Formate Should Be: 1.First Latter should be Capital 2.Atleast one Special Character 3. Username Should be minimum 8 characters");
    } else if (passwordValidation(pass) == false) {
        alert("Password is worng formate");
    } else if (passwordValidation(pass) == false && usernameValidation(uname) == false) {
        alert("Username and Password is worng formate");
    } else {
        alert("Login Sucessfully." + 'UserId: ' + user + " Password: " + pass);
    }
})
// })


// UserName Validation 
function usernameValidation(username) {
    let flag_spl = false, caps_flag = false, length_flag = false, num_flag = false;
    let splUname = username.split('');

    username.split('').forEach(element => {
        // special characters
        if ((element.charCodeAt() >= 32 && element.charCodeAt() <= 47) || (element.charCodeAt() >= 58 && element.charCodeAt() <= 64) || (element.charCodeAt() >= 91 && element.charCodeAt() <= 96) || (element.charCodeAt() >= 123 && element.charCodeAt() <= 126)) {
            console.log(element);
            flag_spl = true;
        }
        if ((element.charCodeAt() >= 48 && element.charCodeAt() <= 57)) {
            num_flag = true;
        }
    });

    // Caps char
    if (splUname[0].charCodeAt() >= 65 && splUname[1].charCodeAt() <= 90) {
        console.log(splUname[0]);
        caps_flag = true;
    }
    // length of char
    if (splUname.length == 8) {
        length_flag = true;
    }
    // console.log(splUname.length);

    //  small latter
    //   if(element.charCodeAt()>=97 && element.charCodeAt()<=122){
    //      console.log(element);
    //   }

    return flag_spl == true && flag_spl == true && length_flag == true && num_flag == true;

}
// let ststus=usernameValidation("V@f99999")
// console.log(ststus);

// Password validation
function passwordValidation(password) {
    let splUname = password.split('');
    let flag_spl = false, charLen_flag = false;

    password.split('').forEach(element => {
        // special characters
        if ((element.charCodeAt() >= 32 && element.charCodeAt() <= 47) || (element.charCodeAt() >= 58 && element.charCodeAt() <= 64) || (element.charCodeAt() >= 91 && element.charCodeAt() <= 96) || (element.charCodeAt() >= 123 && element.charCodeAt() <= 126)) {
            flag_spl = true;
        }

    });

    if (splUname.length >= 8 && splUname.length <= 20) {
        charLen_flag = true;
    }

    return flag_spl == true && charLen_flag == true;

}




// Toster Setup
const notifications = document.querySelector(".notifications"),
    button = document.querySelector(".submit");


const toastDetails = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Login Sucessfully.',
    },
    error: {
        icon: 'fa-circle-xmark',
        text: 'Error: This is an error toast.',
    },
    warning: {
        icon: 'fa-triangle-exclamation',
        text: 'Warning: This is a warning toast.',
    },
    info: {
        icon: 'fa-circle-info',
        text: 'Info: This is an information toast.',
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId);
}

const createToast = (id) => {
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;

    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast);
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});