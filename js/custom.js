/*global $ */
(function($) {
    "use strict";

    // DATE 
    var event = new Date();
    var options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };

    var ArabicDate = event.toLocaleDateString('ar-EG', options);
    $('.dateBox').text(ArabicDate);


    // NICE SELECT 
    $('.customSelect').niceSelect();


    $('.menuBtn').on('click', function(e){
        e.stopPropagation();
        $('.navMenu').toggleClass('menuShow');
    });

    $(document).on('click', function(){
        $('.navMenu').removeClass('menuShow');
    });

    $('.navMenu').on('click', function(e){
        e.stopPropagation();
    });

    // CUSTOM TABS 
    $('.tabsWrapper .TabsList a').click(function (e) {
        e.preventDefault();
        
        var itemId = $(this).attr("href");

        $('.tabsWrapper .TabsList a').removeClass('activeTab');
        $(this).addClass('activeTab');
        
        $('.tabsWrapper .tabsContent .tabContent').removeClass('activeContent'); 
        $(itemId).addClass('activeContent');    
    });

    // ADS SLIDE 
    $('.adsOwl').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: false,
        dots:true,
        autoplaySpeed: 3000,
        smartSpeed: 3000,
        dragEndSpeed: 3000,
        slidSpeed: 900,
        paginationSpeed: 900,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    $('.bookVersionOwl').owlCarousel({
        rtl: true,
        margin: 40,
        autoplay: true,
        loop: false,
        nav: true,
        dots:true,
        autoplaySpeed: 3000,
        smartSpeed: 3000,
        dragEndSpeed: 3000,
        slidSpeed: 900,
        paginationSpeed: 900,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1100: {
                items: 3
            },
            1300: {
                items: 4
            }
        }
    });
})(jQuery);

