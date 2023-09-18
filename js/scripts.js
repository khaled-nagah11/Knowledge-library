/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// toglle with menue and account
let subAccount = document.getElementById("subAccount");
let subMenu = document.getElementById("subMenu");
function toggleAccount() {
  subAccount.classList.toggle("open-account");
  if (subMenu.classList.contains("open-menu")) {
    subMenu.classList.remove("open-menu");
  }
}
function toggleMenu() {
  subMenu.classList.toggle("open-menu");
  if (subAccount.classList.contains("open-account")) {
    subAccount.classList.remove("open-account");
  }
}

var emailinputfooter = document.getElementById("email-input-footer")
var emailerror = document.getElementById("email-error")

function validateEmail(){
    if(!emailinputfooter.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{3,10}$/)){
        emailerror.innerHTML = "please enter a valid email";
        return false;
    }
    emailerror.innerHTML = "";
    return true;
}


//load button
// const loadmore =document.querySelector('.load-more');
// let currentItems = 3;
// loadmore.addEventListener('click', (e) =>{
//     const elementList = [...document.querySelectorAll('.post .li')];
//     e.target.classList.add('show-loader');

//     for(let i = currentItems; i <currentItems + 3; i++){
//         setTimeout( function(){
//             e.target.classList.remove('show-loader');
//             if(elementList[i]){
//                 elementList[i].style.display = 'flex';
//             }
//         }, 3000)
//     }
//     currentItems += 3;


//     //hide load button after fully load
//     if(currentItems >= elementList.length){
//         event.target.classList.add('loaded')
//     }

// })

let hiddenItems = document.querySelectorAll('.additional-content');
let numItemsToShow = 3;
let numHiddenItems = hiddenItems.length;
let currentIndex = 0;
let isLoading = false;

function showNextItems() {
  if (isLoading) return; // Prevent multiple clicks while loading

  isLoading = true;
  document.getElementById('load-more').style.display = 'none';
  document.getElementById('loader').style.display = 'block';

  setTimeout(function() {
    let nextIndex = currentIndex + numItemsToShow;
    if (nextIndex > numHiddenItems) {
      nextIndex = numHiddenItems;
    }
    for (let i = currentIndex; i < nextIndex; i++) {
      hiddenItems[i].style.display = 'block';
    }
    currentIndex = nextIndex;

    if (currentIndex >= numHiddenItems) {
      document.getElementById('load-more').style.display = 'none';
    } else {
      document.getElementById('load-more').style.display = 'block';
    }

    document.getElementById('loader').style.display = 'none';
    isLoading = false;
  }, 2000); // 2 second delay
}

document.getElementById('load-more').addEventListener('click', showNextItems);

  


