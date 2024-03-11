// import api from './api';
// import database from './database';
// import animations from './animations'
// import main from './main';

window.addEventListener('beforeunload',save);

// all links
let allLinks = document.querySelectorAll('.link')

// views
let allAccountsView = document.querySelector('#accounts');
let addAccountView = document.querySelector('#add-account');
let editAccountView = document.querySelector('#edit-account');
let views = document.querySelectorAll(".view");

// tbody
let accountTbody = allAccountsView.querySelector('tbody');
let editAccountTbody = editAccountView.querySelector('tbody');

// buttons
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
    for (let i = 0; i < views.length; i++) {
        views[i].style.display = 'none';
    }
    if(e instanceof Event){
        e.preventDefault();
        let id = `#${this.getAttribute("href")}`;
        document.querySelector(id).style.display = "block";
    }else {
        document.querySelector(e).style.display = "block";
    }
    window.scrollTo({
        top: 0,
    });
}

function displayEditAccountView(e) {
    e.preventDefault();
    currentIndex = this.getAttribute('data-index-edit')
    let currentAccount = accountsDB[currentIndex];
    eIdInput.value = currentAccount.id;
    eNameInput.value = currentAccount.name;
    eLastNameInput.value = currentAccount.lastName;
    eEmailInput.value = currentAccount.email;
    eMemberInput.value = currentAccount.member;
    eRoleInput.value = currentAccount.role;
    allAccountsView.style.display = "none";
    addAccountView.style.display = "none";
    editAccountView.style.display = "block";;
    window.scrollTo({
        top: 0,
    });
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
                        <a class="btn small btn-danger" href="javascript:;" data-index-delete="${index}">Izbriši</a>
                    </div>
                </td>
            </tr>
        `.trim();
    })
    accountTbody.innerHTML = text;
    let editBtns = document.querySelectorAll('[data-index-edit]');
    let deleteBtns = document.querySelectorAll('[data-index-delete]');
    deleteBtns.forEach((btn,index) => {
        btn.addEventListener('click', deleteAccount);
        editBtns[index].addEventListener('click', displayEditAccountView);
    }) 
};

function updateAccount(e){
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
    showView('#accounts');
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
    showView('#accounts');
}

function deleteAccount(e){
    let index = this.getAttribute('data-index-delete');
    if (confirm("Jeste li sigurni da želite izbrisati ovaj račun?")) {
        accountsDB.splice(index,1);
        createAccountsTable();
        showView('#accounts');
    }
}

function save(){
    localStorage.accountsDB = JSON.stringify(accountsDB);
}

// export default accounts;