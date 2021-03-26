document.querySelector(".menu-btn").addEventListener("click", () =>{  /*Cuando en menu-btn escuche un click, entonces*/
    document.querySelector(".nav-menu").classList.toggle("show");    /* al elemento nav menu le voy a activar o desactivar con toggle la clase show */
    console.log("hello fsdkjfadjfa");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{delay:500});
ScrollReveal().reveal('.cards-banner-one',{delay:500});
ScrollReveal().reveal('.cards-banner-two',{delay:500});