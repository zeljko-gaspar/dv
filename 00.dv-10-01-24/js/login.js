// import accounts from './accounts';
// import api from './api';
// import database from './database';
// import animations from './animations';
// import login from './main';

// login
let loginModalBtn = document.querySelector('#loginModal');
loginModalBtn.addEventListener('click', login);

let counter = 0;
let penaltyLogin = false;
function login() {
    counter++;
    if(penaltyLogin === true) {
        setTimeout(function(){
            penaltyLogin = false;
        },10000);
        return;
    }
    let username = prompt("Unesi korisničko ime");
    if(username === "admin"){
        let password = prompt("Unesi šifru");
        if(password === "admin"){
            document.getElementById('wellcomeUser').classList.add("show");
            setTimeout(() => {
                document.getElementById('wellcomeUser').classList.remove("show");
            }, 2000);
        } else{
            document.getElementById('passwordError').classList.add("show");
            setTimeout(() => {
                document.getElementById('passwordError').classList.remove("show");
            }, 2000);
            console.log("Pogrešna šifra")
            banUser(counter);
        }
    }else{
        document.getElementById('usernameError').classList.add("show");
            setTimeout(() => {
            document.getElementById('usernameError').classList.remove("show");
        }, 2000);
        console.log('Pogrešno korisničko ime');
        banUser(counter);
    }
}

function banUser(counter){
    if(counter > 2) {
        penaltyLogin = true;
        document.getElementById('banUser').classList.add("show");
        setTimeout(() => {
            document.getElementById('banUser').classList.remove("show");
        }, 5000);
        // loginModalBtn.removeEventListener('click', login);
        // preventDefault();
        return;
    }
    login();
}

// logika za logovanog usera 
// kada to bude gotovo, prvo korisnika pitamo ko je
// let loggedUser = (user === 'admin') ? "one" : "two"; 

// export default login;