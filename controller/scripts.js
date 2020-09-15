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
        });

        $('.close').click(function() {
            $('.navbar').fadeIn();
        });

        $(document).mouseup(function(e) {
            let container = $('.modal-dialog');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.navbar').fadeIn();
            }
        });
    });

    $('.cake-image').click(function() {
        $('.navbar').hide();

        $('.close').click(function() {
            $('.navbar').fadeIn();
        });

        $(document).mouseup(function(e) {
            let container = $('.modal-dialog');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.navbar').fadeIn();
            }
        });
    });

    $('.search-icon').click(function() {
        $('.navbar').hide();

        $('.modal-close-button').click(function() {
            $('.navbar').fadeIn();
        });

        $('.close').click(function() {
            $('.navbar').fadeIn();
        });

        $(document).mouseup(function(e) {
            let container = $('.modal-dialog');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.navbar').fadeIn();
            }
        });
    });

    if (window.location.href.indexOf('main') > -1) {
        $('#main-page').css('color', '#e47277');
        $('.footer-main').css('color', '#e47277');
    } else {
        $('#main-page').css('color', '#5e3c3e');
        $('.footer-main').css('color', 'whitesmoke');
    }

    if (window.location.href.indexOf('cakes') > -1) {
        $('#cakes-page').css('color', '#e47277');
        $('.footer-cakes').css('color', '#e47277');
    } else {
        $('#cakes-page').css('color', '#5e3c3e');
        $('.footer-cakes').css('color', 'whitesmoke');
    }

    if (window.location.href.indexOf('order') > -1) {
        $('#order-page').css('color', '#e47277');
        $('.footer-order').css('color', '#e47277');
    } else {
        $('#order-page').css('color', '#5e3c3e');
        $('.footer-order').css('color', 'whitesmoke');
    }

    if (window.location.href.indexOf('contact') > -1) {
        $('#contact-page').css('color', '#e47277');
        $('.footer-contact').css('color', '#e47277');
    } else {
        $('#contact-page').css('color', '#5e3c3e');
        $('.footer-contact').css('color', 'whitesmoke');
    }

    $('.contact-send-button').on('click', function(event) {
        event.preventDefault();
        let emailText = $('#contact-textarea').val();
        if ($('#contact-textarea').val() == '') {
            alert("Üresen akartad elküldeni a mezőt!");
            return;
        } else {
            window.location = 'mailto:torcsiattila93@gmail.com?subject=&body=' + emailText;
            location.reload();
        }
    });
})