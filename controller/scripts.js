$(document).ready(function (event) {
    $('.emailsend').click(function () {
        window.open('mailto:torcsiattila93@gmail.com?subject=Süti rendelés');
    });
});

$(document).ready(function() {
    $('.scroll-up-button').hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scroll-up-button').fadeIn();
        } else {
            $('.scroll-up-button').fadeOut();
        }
    })

    $('.scroll-up-button').click(function(){
        $('html, body').animate({scrollTop : 0}, -10);
        return false;
    });

    $('.details-button').click(function() {
        $('.navbar').hide();

        $('.modal-close-button').click(function() {
            $('.navbar').fadeIn();
        })

        $('.close').click(function() {
            $('.navbar').fadeIn();
        })
    })
})