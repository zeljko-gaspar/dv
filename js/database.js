// import accounts from './accounts';
// import api from './api';
// import animations from './animations'
// import main from './main';

// let accountsDBLocal = [
//   {
//     id: 1,
//     name: 'Kristina',
//     lastName: 'Jovičić',
//     email: 'kristina.jovicic@example.com',
//     userName: 'kristina',
//     password: 'kristina',
//     member: 'junior member',
//     role: 'korisnik'
//   },
//   {
//     id: 2,
//     name: 'Željko',
//     lastName: 'Gašpar',
//     email: 'zeljko.gaspar@gmail.com',
//     userName: 'zeljko',
//     password: 'zeljko',
//     member: 'senior member',
//     role: 'korisnik'
//   },
//   {
//     id: 3,
//     name: 'Helena',
//     lastName: 'Ileš',
//     email: 'helena.iles@example.com',
//     userName: 'helena',
//     password: 'helena',
//     member: 'medior member',
//     role: 'korisnik'
//   },
//   {
//     id: 4,
//     name: 'Viktor',
//     lastName: 'Ileš',
//     email: 'viktor.iles@example.com',
//     userName: 'viktor',
//     password: 'viktor',
//     member: 'junior member',
//     role: 'korisnik'
//   },
//   {
//     id: 5,
//     name: 'Maksim',
//     lastName: 'Rokutov',
//     email: 'maksim.rokutov@example.com',
//     userName: 'maksim',
//     password: 'maksim',
//     member: 'senior member',
//     role: 'korisnik'
//   },
//   {
//     id: 6,
//     name: 'admin',
//     lastName: 'admin',
//     email: 'admin@example.com',
//     userName: 'admin',
//     password: 'admin',
//     member: 'senior member',
//     role: 'admin'
//   },
// ];

let accountsDB = [];
  
if(localStorage.accountsDB){
  accountsDB = JSON.parse(localStorage.accountsDB);
}

// export default database;