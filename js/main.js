 

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1000: {
            items: 4,
        },
    },
});

let toggleBtn = document.getElementById("toggle-btn");
let resMenu = document.getElementById("res-menu");

toggleBtn.addEventListener("click", function(){
    resMenu.classList.toggle("translate-y-[-100%]");
});


 let loadingScreen = document.getElementById("loading");

 window.addEventListener("load", function(){
    loadingScreen.classList.add("hidden")
 })
 
   
            