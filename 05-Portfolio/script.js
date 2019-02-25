$(window).scroll(function() { //toggle between black and white navbar text using bootstrap
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $(".navbar").removeClass("navbar-light"); 
        $(".navbar").addClass("navbar-dark");
        // alert("dab");
    } else {
        $(".navbar").removeClass("navbar-dark");
        $(".navbar").addClass("navbar-light");
    }
});
