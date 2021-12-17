var pass = false;
function passFun(){
    if(pass){
        document.getElementById("PassId").setAttribute("type" , "password");
        pass = false;
    }else{
        document.getElementById("PassId").setAttribute("type" , "text");
        pass = true;
    }
}

var Newpass = false;
function NewpassFun(){
    if(Newpass){
        document.getElementById("NewPassId").setAttribute("type" , "password");
        Newpass = false;
    }else{
        document.getElementById("NewPassId").setAttribute("type" , "text");
        Newpass = true;
    }
}

var NewpassAgain = false;
function NewpassAgainFun(){
    if(NewpassAgain){
        document.getElementById("NewpassAgainId").setAttribute("type" , "password");
        NewpassAgain = false;
    }else{
        document.getElementById("NewpassAgainId").setAttribute("type" , "text");
        NewpassAgain = true;
    }
}


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-btn").addClass('acitve');
        } else {
            $(".scroll-top-btn").removeClass('acitve');
        }
    });
    //scroll to top button
    $(".scroll-top-btn").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    
    

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.nav-content').toggleClass('active-nav');
        $('body').toggleClass('overflowNone')
    });

    $('.nav-content .navbar-nav .nav-item .nav-link').click(function(){
        $('.hamburger').removeClass('active');
        $('.nav-content').removeClass('active-nav');
        $('body').removeClass('overflowNone')
    });


    $('.owl-partner').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2 
            },
            600:{
                items:2
            },
            1000:{
                items:7
            }
        }
    });
});