(function($) {
    "use strict";
    $(document).ready(function() {
        $('#main-menu').meanmenu({
            meanScreenWidth: "767",
            meanMenuContainer: '.mobile-nav-menu',
        });
        $(".testimonial-v1-all").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: false,
            dots: true,
            margin: 30,
            items: 3,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
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
        $(".why-choose-all").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: true,
            dots: true,
            margin: 30,
            items: 3,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
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
        $(".all-recently-added").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: true,
            dots: false,
            margin: 20,
            items: 4,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                768: {
                    items: 6
                },
                992: {
                    items: 4
                }
            }
        });
        $(".all-course").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: true,
            dots: true,
            items: 3,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
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
        $(".all-latest-news").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: true,
            dots: false,
            margin: 30,
            items: 3,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
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
        $(".all-testimonial").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: false,
            dots: true,
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $(".all-testimonial-v3").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: true,
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
        $(".all-slide").owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            autoplay: true,
            loop: true,
            navText: ["Previous", "Next"],
            mouseDrag: false,
            touchDrag: false,
        });
        $(".all-slide").on("translate.owl.carousel", function() {
            $(".slider-text h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".slider-text p").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slider-text ul").removeClass("animated fadeInDown").css("opacity", "0");
        });
        $(".all-slide").on("translated.owl.carousel", function() {
            $(".slider-text h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".slider-text p").addClass("animated fadeInDown").css("opacity", "1");
            $(".slider-text ul").addClass("animated fadeInDown").css("opacity", "1");
        });
        $(".all-patner").owlCarousel({
			autoplay: true,
			pagination: false,
			nav: false,
			dots: true,
			items: 4,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 2
				},
				600: {
					items: 3
				},
				768: {
					items: 4
				},
				992: {
					items: 4
				},
				1000: {
					items: 5
				}
			}
		});
        $.scrollUp({
			scrollText: '<i class="icofont-rocket-alt-1"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		});
		$('.counter').counterUp({
			delay: 1,
			time: 1000
		});
        (function() {
            var nav = $('.hd-sec');
            var scrolled = false;
            $(window).scroll(function() {
                if (120 < $(window).scrollTop() && !scrolled) {
                    nav.addClass('sticky_menu animated fadeInDown').animate({
                        'margin-top': '0px'
                    });
                    scrolled = true;
                }
                if (120 > $(window).scrollTop() && scrolled) {
                    nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
                    scrolled = false;
                }
            });
        }());
        $('.mfp-iframe').magnificPopup({
            type: 'iframe'
        });
        $('.gallery-photo').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
        });
        jQuery('.gallery-container').imagesLoaded(function() {
            $(".gallery-container").isotope({
                itemSelector: '.filtr-item',
                layoutMode: 'fitRows',
            });
            $("ul.simplefilter li").on("click", function() {
                $("ul.simplefilter li").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                $(".gallery-container").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        });
        $(window).on("load", function() {
            $('#preloader').fadeOut();
            $('#preloader-status').delay(200).fadeOut('slow');
            $('body').delay(200).css({
                'overflow-x': 'hidden'
            });
        });
    });
})(jQuery);