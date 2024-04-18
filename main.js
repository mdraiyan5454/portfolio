$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Web desiner", "Frontend Developer",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

   
});



ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 500,
});

ScrollReveal().reveal('.home-content, heading, .skill-img', { origin: 'top' });
ScrollReveal().reveal('', { origin: 'bottom' });
ScrollReveal().reveal('.about', {origin: 'left'});
ScrollReveal().reveal('.service', {origin: 'right'});