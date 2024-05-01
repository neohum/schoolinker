(function ($) {
    'use strict';

    // Variables
    var $constrom_window = $(window);

    // Preloader Active Code
    $constrom_window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // ::  Sticky Header
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            $(".site-header--sticky").addClass("scrolling");
        } else {
            $(".site-header--sticky").removeClass("scrolling");
        }
        if (
            document.body.scrollTop > 700 ||
            document.documentElement.scrollTop > 700
        ) {
            $(".site-header--sticky.scrolling").addClass("reveal-header");
        } else {
            $(".site-header--sticky.scrolling").removeClass("reveal-header");
        }
    }

    // :: Price Table Switching
    function pricingTable() {
        let planCard = document.querySelectorAll('.pricing-card');
        let planCardlen = planCard.length;

        for (let i = 0; i < planCardlen; i++) {
            if (planCard[i].classList.contains('monthly-plan')) {
                planCard[i].classList.remove('monthly-plan');
                planCard[i].classList.add('yearly-plan');
            } else {
                planCard[i].classList.add('monthly-plan');
                planCard[i].classList.remove('yearly-plan');
            }
        }
    }

    let priceSwitching = document.getElementById('priceSwitching');
    if (priceSwitching) {
        priceSwitching.addEventListener('click', pricingTable);
    }

    // ::Welcome Slides Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome-slider-area');
        welcomeSlider.owlCarousel({
            items: 5,
            loop: true,
            autoplay: true,
            smartSpeed: 1800,
            margin: 20,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1366: {
                    items: 5
                }
            }
        });
    }


     // :: Client Slides Active Code
     if ($.fn.owlCarousel) {
        var topsellerSlider = $('.client-slider');
        topsellerSlider.owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 10,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    // :: Partner Slides Active Code
    if ($.fn.owlCarousel) {
        var topsellerSlider = $('.partner-slider');
        topsellerSlider.owlCarousel({
            items: 6,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 100,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
    }

    // :: Features-slider Active Code
    if ($.fn.owlCarousel) {
        var feature = $('.features-slider');
        feature.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 0,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                }
            }
        });
    }

    // :: Team slider Active Code
    if ($.fn.owlCarousel) {
        var feature = $('.member-slider-area');
        feature.owlCarousel({
            items: 6,
            loop: true,
            autoplay: true,
            autoplayHoverPause:false,
            smartSpeed: 1500,
            margin: 10,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                },
                1366: {
                    items: 6
                }
            }
        });
    }

    // :: Gallery Slides Active Code
    if ($.fn.owlCarousel) {
        var topsellerSlider = $('.gallery-slider');
        topsellerSlider.owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 10,
            dots: false,
            nav: true,
            navText: ['<i class="fas fa-long-arrow-alt-right"></i>', '<i class="fas fa-long-arrow-alt-left"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }

    if ($.fn.owlCarousel) {
        var topsellerSlider = $('.gallery-slider-2');
        topsellerSlider.owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 30,
            dots: false,
            nav: true,
            navText: ['<i class="fas fa-long-arrow-alt-right"></i>', '<i class="fas fa-long-arrow-alt-left"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    // :: Popup Video
    let playButton = document.querySelectorAll('.play-button').length;

    if (playButton > 0) {
        MediaBox('.play-button');
    }

    // :: Scroll to Top

    let scrollButton = document.getElementById('scrollTopButton');
    let topdistance = 600;

    if (scrollButton) {
        window.addEventListener('scroll', function () {
            if (document.body.scrollTop > topdistance || document.documentElement.scrollTop > topdistance) {
                scrollButton.classList.add('scrolltop-show');
                scrollButton.classList.remove('scrolltop-hide');
            } else {
                scrollButton.classList.add('scrolltop-hide');
                scrollButton.classList.remove('scrolltop-show');
            }
        });

        scrollButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });
    }
})(jQuery);