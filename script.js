// onload animation
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
  setInterval(loader, 3500);
}
window.onload=fadeOut;
// menu-bar and navbar

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');

// search form

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

section.forEach(sec => {
   let top = window.scrollY;
   let height = sec.offsetHeight;
   let offset = sec.offsetTop - 150;
   let id = sec.getAttribute('id');

  // IF THIS WILL REMOVE SEARCH FORM WILL STILL WORK
  if (top >= offset && top < offset + height) {
     navlinks.forEach(links =>{
       links.classList.remove('active');
       document.querySelector('header .navbar a [href*= '+id+']').classList.add('active')
     });
   };
});
}
 document.querySelector('#search-icon').onclick = () => {
   document.querySelector('#search-form').classList.toggle('active');
 }
document.querySelector('#close').onclick = () => {
   document.querySelector('#search-form').classList.remove('active');
 }

 //  swiper

 var swiper = new Swiper('.home-slider', {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
 });

var swiper2 = new Swiper('.myswiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3400,
    disableOnInteraction: false,
  },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    clickable: true,
    },
    
  loop: true,

});



function display() {
  dispWin = window.open('', 'newWin', 'toolbar=no, status=no, width=350, height=200');
  
  message = "<ul><li><strong>Fullname: </strong>" +
  document.form1.fullname.value;
  message += "<li><strong>Email Add: </strong>" +
  document.form1.emailaddress.value;
  message += "<li><strong>Phone: </strong>" +
  document.form1.phonenumber.value;
  message += "<li><strong>No. of Persons: </strong>" +
  document.form1.totalperson.value;
  message += "<li></strong>Booking Date: </strong>" +
  document.form1.bookingdate.value;
  message += "<li><strong>Message: </strong>" +
  document.form1.message.value + "</ul>";
  dispWin.document.write(message);
};

// header sticky and & back to top

const backTopBtn = document.querySelector(".back-top-btn");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    backTopBtn.classList.add("active");

  }
  else {
    backTopBtn.classList.remove("acive");
  }
}); 



// const backTopBtn = document.querySelector(".back-top-btn");

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 100) {
//     backTopBtn.classList.add("active");
//   }
//   else {
//     backTopBtn.classList.remove("active");
//   }
// });






