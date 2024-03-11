// import accounts from './accounts';
// import api from './api';
// import database from './database';
// import animations from './animations';
// import login from './login';

(async function(){
// let question = await API.getAllData();
// console.log(question);
let modalTitle = document.querySelector('.modalTitle');
let modalTeacher = document.querySelector('.modalTeacher');
let modalImage = document.querySelector('.modalImage');
let modalCategory = document.querySelector('.modalCategory');
let modalDescription = document.querySelector('.modalDescription');
let buyJuniorAlert = document.querySelector('#buyJunior');
let buyMediorAlert = document.querySelector('#buyMedior');
let buySeniorAlert = document.querySelector('#buySenior');
let mainRow = document.querySelector('.card-container');
let getAllData = API.getAllData();

// listeners
buyJuniorAlert.addEventListener('click',successfulPurchase);
buyMediorAlert.addEventListener('click',successfulPurchase);
buySeniorAlert.addEventListener('click',successfulPurchase);

function successfulPurchase(){
    document.querySelector('#purchaseAlert').classList.add("show");
    setTimeout(() => {
        document.querySelector('#purchaseAlert').classList.remove("show");
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
    // Select all nav-items inside the navbar
    let navItems = document.querySelectorAll('.navbar-nav .nav-item');
    // Add click event listener to each nav-item
    navItems.forEach(function (item) {
      item.addEventListener('click', function () {
        // Close the navbar by finding the toggle button and clicking it
        let navbarToggle = document.querySelector('.navbar-toggler');
        if (navbarToggle && window.innerWidth < 992) {
          navbarToggle.click();
        }
      });
    });
  });

// testiraj
// async function info() {
//     let allProducts = await API.getAllData();
//     console.log(allProducts);
// }
// info();

getAllData.then(data => coursesItems(data));

// display page
function coursesItems(data){
    let courses = data.courses;
    let cards = '';
    courses.forEach(course => {
        cards += `
            <div class="col-4 mb-2 card-item">
                <div class="card mb-3">
                    <div class="card-header">
                        <h3>${course.teacher}<span class="badge bg-info float-end">${course.category}</span></h3>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <img src="${course.image}" alt="" class="img-fluid" />
                    </div>
                    </div>
                    <div class="card-footer">
                    <h4>${course.title}</h4>
                        <a href="javascript:;" class="btn btn-warning btn-sm read-more" data-id="${course.id}">Detaljnije</a>
                    </div>
                </div>
            </div>
        `.trim();    
    });
    mainRow.innerHTML = cards;
    let productDetail = document.querySelectorAll('[data-id]');
    productDetail.forEach(btns => btns.addEventListener('click',showDetails));
    function showDetails(){
        let productId = this.getAttribute('data-id');
        let oneProduct = API.oneProduct(productId);
        oneProduct.then(currnetProduct => {
            modalTitle.innerHTML = currnetProduct.title;
            modalTeacher.innerHTML = currnetProduct.teacher;
            modalImage.src = currnetProduct.image;
            modalCategory.innerHTML = currnetProduct.category;
            modalDescription.innerHTML = currnetProduct.description;
            const myModalAlternative = new bootstrap.Modal('#courseModal');
            myModalAlternative.show();
        })
    }
}

})()

