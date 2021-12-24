(function ($) {
    "use strict";

    var $window = $(window), $body = $('body');


    // ***************** sticky menu **********
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
        }
        else {
            $(".sticky-header").addClass("sticky");
        }
    });


    // humberger menu dropdown
    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

    // offcanvas menu toggle drop down
    function mobileOffCanvasMenu() {
        var $offCanvasNav = $('.offcanvas-menu'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.mobile-sub-menu');

        $offCanvasNavSubMenu.parent().prepend('<div class="offcanvas-menu-expand"></div>');

        $offCanvasNav.on('click', 'li a, .offcanvas-menu-expand', function (e) {
            var $this = $(this);
            if ($this.attr('href') === '#' || $this.hasClass('offcanvas-menu-expand')) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp();
                    $this.parent('li').find('li').removeClass('active');
                    $this.parent('li').find('ul:visible').slideUp();
                }
                else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.siblings('ul').slideDown();
                }
            }
        });
    }
    mobileOffCanvasMenu();


    // slider active 
    var heroSlider = new Swiper('.hero-slider .swiper-container', {
        slidesPerView: 1,
        speed: 5500,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // company logo slider 
    var company_logo_slider = new Swiper('.company-slider .swiper-container', {
        slidesPerView: 5,
        autoplay: true,
        speed: 1500,
        loop: true,

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        }
    });
    
})(jQuery);