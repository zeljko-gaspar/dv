// import api from './api';
// import database from './database';
// import animations from './animations'
// import main from './main';

window.addEventListener('beforeunload',save);

function save(){
    localStorage.accountsDB = JSON.stringify(accountsDB);
}

// all links
let allLinks = document.querySelectorAll('.link')

// views
// let homeView = document.querySelector('#home_view');
// let juniorView = document.querySelector('#junior_view');
// let mediorView = document.querySelector('#medior_view');
// let seniorView = document.querySelector('#senior_view');
// let coursesView = document.querySelector('#courses_view');
// let myCoursesView = document.querySelector('#my-courses_view');
let allAccountsView = document.querySelector('#accounts');
let addAccountView = document.querySelector('#add-account');
let editAccountView = document.querySelector('#edit-account');
let views = document.querySelectorAll(".view");

// tbody
let accountTbody = allAccountsView.querySelector('tbody');
let editAccountTbody = editAccountView.querySelector('tbody');

// buttons
// let homeBtn = document.querySelector('[href="home"]');
// let coursesBtn = document.querySelector('[href="courses"]');
// let myCoursesBtn = document.querySelector('[href="my-courses"]');
// let allAccountsBtn = document.querySelector('[href="accounts"]');
// let juniorBtn = document.querySelector('#junior-btn');
// let mediorBtn = document.querySelector('#medior-btn');
// let seniorBtn = document.querySelector('#senior-btn');
// let homeCoursesBtn = document.querySelector('#home-courses-btn');
let addAccountBtn = document.querySelector('#add-account-btn');
let saveAccountBtn = document.querySelector('#save-btn');
let updateAccountBtn = document.querySelector('#update-btn');

// inputs
let accountSearch = document.querySelector('#account-search');
let idInput = document.querySelector('input[name="id"]');
let nameInput = document.querySelector('input[name="name"]');
let lastNameInput = document.querySelector('input[name="lastName"]');
let emailInput = document.querySelector('input[name="email"]');
let memberInput = document.querySelector('input[name="member"]');
let roleInput = document.querySelector('input[name="role"]');
let eIdInput = document.querySelector('input[name="eId"]');
let eNameInput = document.querySelector('input[name="eName"]');
let eLastNameInput = document.querySelector('input[name="eLastName"]');
let eEmailInput = document.querySelector('input[name="eEmail"]');
let eMemberInput = document.querySelector('input[name="eMember"]');
let eRoleInput = document.querySelector('input[name="eRole"]');
let currentIndex = null;

// listeners
// homeBtn.addEventListener('click', displayHomeView);
// juniorBtn.addEventListener('click', displayJuniorView);
// mediorBtn.addEventListener('click', displayMediorView);
// seniorBtn.addEventListener('click', displaySeniorView);
// coursesBtn.addEventListener('click', displayCoursesView);
// homeCoursesBtn.addEventListener('click', displayCoursesView);
// myCoursesBtn.addEventListener('click', displayMyCoursesView);
// allAccountsBtn.addEventListener('click', displayAllAccountsView);
addAccountBtn.addEventListener('click', displayAddAccountView);
saveAccountBtn.addEventListener('click', saveNewAccount)
updateAccountBtn.addEventListener('click', updateAccount);
accountSearch.addEventListener('keyup',searchDb);

for (let i=0; i < allLinks.length; i++) {
    allLinks[i].addEventListener('click',showView);
}

// functions
function searchDb(e){
    let filtered = accountsDB.filter(account => {
        return account.name.includes(this.value) || account.lastName.includes(this.value) || account.email.includes(this.value)|| account.member.includes(this.value) || account.role.includes(this.value);
    })
    createAccountsTable(filtered); 
}

function showView(e){
    e.preventDefault();
    for (let i = 0; i < views.length; i++) {
        views[i].style.display = 'none';
    }
    let id = `#${this.getAttribute("href")}`;
    document.querySelector(id).style.display = "block";
    window.scrollTo({
        top: 0,
    });
}

// function displayHomeView(e) {
//     e.preventDefault();
//     window.scrollTo({
//         top: 0,
//     });
//     homeView.style.display = "block";
//     juniorView.style.display = "none";
//     mediorView.style.display = "none";
//     seniorView.style.display = "none";
//     coursesView.style.display = "none";
//     myCoursesView.style.display = "none";
//     allAccountsView.style.display = "none";
//     addAccountView.style.display = "none";
//     editAccountView.style.display = "none";
// }
// function displayJuniorView(e) {
//     e.preventDefault();
//     window.scrollTo({
//         top: 0,
//     });
//     homeView.style.display = "none";
//     juniorView.style.display = "block";
//     mediorView.style.display = "none";
//     seniorView.style.display = "none";
//     coursesView.style.display = "none";
//     myCoursesView.style.display = "none";
//     allAccountsView.style.display = "none";
//     addAccountView.style.display = "none";
//     editAccountView.style.display = "none";
// }
// function displayMediorView(e) {
//     e.preventDefault();
//     window.scrollTo({
//         top: 0,
//     });
//     homeView.style.display = "none";
//     juniorView.style.display = "none";
//     mediorView.style.display = "block";
//     seniorView.style.display = "none";
//     coursesView.style.display = "none";
//     myCoursesView.style.display = "none";
//     allAccountsView.style.display = "none";
//     addAccountView.style.display = "none";
//     editAccountView.style.display = "none";
// }
// function displaySeniorView(e) {
//     e.preventDefault();
//     window.scrollTo({
//         top: 0,
//     });
//     homeView.style.display = "none";
//     juniorView.style.display = "none";
//     mediorView.style.display = "none";
//     seniorView.style.display = "block";
//     coursesView.style.display = "none";
//     myCoursesView.style.display = "none";
//     allAccountsView.style.display = "none";
//     addAccountView.style.display = "none";
//     editAccountView.style.display = "none";
// }
// function displayCoursesView(e) {
//     e.preventDefault();
//     window.scrollTo({
//         top: 0,
//     });
//     homeView.style.display = "none";
//     juniorView.style.display = "none";
//     mediorView.style.display = "none";
//     seniorView.style.display = "none";
//     coursesView.style.display = "block";
//     myCoursesView.style.display = "none";
//     allAccountsView.style.display = "none";
//     addAccountView.style.display = "none";
//     editAccountView.style.display = "none";
// }
// function displayMyCoursesView(e) {
//     e.preventDefault();
//     window.scrollTo({
//         top: 0,
//     });
//     homeView.style.display = "none";
//     juniorView.style.display = "none";
//     mediorView.style.display = "none";
//     seniorView.style.display = "none";
//     coursesView.style.display = "none";
//     myCoursesView.style.display = "block";
//     allAccountsView.style.display = "none";
//     addAccountView.style.display = "none";
//     editAccountView.style.display = "none";
// }
function displayAllAccountsView(e) {
    if(e){
        e.preventDefault();
    }
    window.scrollTo({
        top: 0,
    });
    // homeView.style.display = "none";
    // juniorView.style.display = "none";
    // mediorView.style.display = "none";
    // seniorView.style.display = "none";
    // coursesView.style.display = "none";
    // myCoursesView.style.display = "none";
    allAccountsView.style.display = "block";
    // addAccountView.style.display = "none";
    // editAccountView.style.display = "none";
}
function displayAddAccountView(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
    });
    // homeView.style.display = "none";
    // juniorView.style.display = "none";
    // mediorView.style.display = "none";
    // seniorView.style.display = "none";
    // coursesView.style.display = "none";
    // myCoursesView.style.display = "none";
    // allAccountsView.style.display = "none";
    addAccountView.style.display = "block";
    // editAccountView.style.display = "none";
}
function displayEditAccountView(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
    });
    currentIndex = this.getAttribute('data-index-edit')
    let currentAccount = accountsDB[currentIndex];
    eIdInput.value = currentAccount.id;
    eNameInput.value = currentAccount.name;
    eLastNameInput.value = currentAccount.lastName;
    eEmailInput.value = currentAccount.email;
    eMemberInput.value = currentAccount.member;
    eRoleInput.value = currentAccount.role;
    // homeView.style.display = "none";
    // juniorView.style.display = "none";
    // mediorView.style.display = "none";
    // seniorView.style.display = "none";
    // coursesView.style.display = "none";
    // myCoursesView.style.display = "none";
    allAccountsView.style.display = "none";
    addAccountView.style.display = "none";
    editAccountView.style.display = "block";;
}

createAccountsTable();

function createAccountsTable(filtered) {
    let data = filtered || accountsDB;
    let text = "";
    data.forEach((account,index) => {
        text += `
            <tr>
                <td>${account.id}</td>
                <td>${account.name}</td>
                <td>${account.lastName}</td>
                <td>${account.email}</td>
                <td>${account.member}</td>
                <td>${account.role}</td>
                <td>
                    <div class="option-btns">
                        <a class="btn small btn-primary" href="javascript:;" data-index-edit="${index}">Izmeni</a>
                        <a class="btn small btn-warning" href="javascript:;" data-index="${index}">Izbriši</a>
                    </div>
                </td>
            </tr>
        `.trim();
    })
    accountTbody.innerHTML = text;
    let deleteBtns = document.querySelectorAll('[data-index]');
    let editBtns = document.querySelectorAll('[data-index-edit]');
    deleteBtns.forEach((btn,index) => {
        btn.addEventListener('click',deleteAccount);
        editBtns[index].addEventListener('click', displayEditAccountView);
    }) 
};

function updateAccount(){
    let updatedAccount = {
        id: eIdInput.value,
        name: eNameInput.value,
        lastName: eLastNameInput.value,
        email: eEmailInput.value,
        member: eMemberInput.value,
        role: eRoleInput.value,
    }
    accountsDB[currentIndex] = updatedAccount;
    createAccountsTable();
    displayAllAccountsView();
}

function saveNewAccount(e) {
    let newAccount = {
        id: idInput.value,
        name: nameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        member: memberInput.value,
        role: roleInput.value,
    }
    idInput.value = '';
    nameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    memberInput.value = '';
    roleInput.value = '';
    accountsDB.push(newAccount);
    createAccountsTable();
    displayAllAccountsView();
}

function deleteAccount(){
    let index = this.getAttribute('data-index');
        if (confirm("Jeste li sigurni da želite izbrisati ovaj račun?")) {
        accountsDB.splice(index,1);
        createAccountsTable();
        displayAllAccountsView();
    }
}

// export default accounts;