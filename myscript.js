$(document).ready(function () {


    $('.banner-slick').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows: false,
    });

    //
    $('.dichvu-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slick-contrung').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        arrows: true,
        centerMode: true,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                },

            },

            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },

            }
        ]
    });

    $('.banggiadichvu-slick').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        arrows: true,
        centerMode: true,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]
    });

    $('.rate-slick').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        arrows: false,
        centerMode: false,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]
    });

    //Hỏi đáp
    var originalHtml = $(".dap-content").html();
    $("#question-advance").addClass("active");
    $('.question').click(function () {
        $('.question').removeClass("active");
        $(this).addClass("active");
        if ($(this).index() !== 0) {
            $(".dap-content").html("kkkk<br>kkkk<br>kkkk<br>kkkk<br>kkkk<br>kkkk<br>kkkk<br>kkkk<br>kkkk<br>kkkk<br>kkkk<br>kkkk<br>");
        }
        else {
            $(".dap-content").html(originalHtml);
        }

    });

    $("#hoi-item-child-advance").slideToggle("fast");
    $("#icon-dropdown-advance").addClass("active");
    $(".icon-dropdown").click(function () {
        $(this).closest(".hoi-item-parent").siblings(".hoi-item-child").slideToggle("fast");
        $(this).toggleClass("active");
    });

    var firstChildmenu = $('.sanpham-menu-contain > :first-child');
    firstChildmenu.addClass("active");
    $(".sanpham-menu-filter").click(function () {
        $(".sanpham-menu-filter").removeClass("active");
        $(this).addClass("active");
    });


    //header-small
    $(".header-navbar-icon",).click(function () {
        $(".header-small").toggleClass("active");
        $(".header-navbar-icon").toggleClass("active");
        $(".screen-opacity").toggleClass("active");
        $('.screen-opacity').css('pointer-events', 'auto');
    });
    $(".screen-opacity").click(function () {
        $(".header-small").toggleClass("active");
        $(".screen-opacity").toggleClass("active");
        $(".header-navbar-icon").toggleClass("active");
        $('.screen-opacity').css('pointer-events', 'none');
    });



    //radio custom
    $(".radio-custom").click(function () {
        $(this).closest(".filter-product").find(".radio-active").removeClass("active");
        $(this).find(".radio-active").addClass("active");
    });

    //toggle-filter
    $(".icon-dropdown").click(function () {
        // $(this).closest(".hoi-item-parent").siblings(".hoi-item-child").slideToggle("fast");
        $(this).closest(".filter-sanpham-title").siblings(".filter-product").slideToggle("fast");
        $(this).find(".filter-sanpham-title").find(".icon-dropdown").addClass("active");
    });
    $("#back-to-top").hide();
    $(window).scroll(function () {
        var e = $(window).scrollTop();
        if (e > 300) {
            $("#back-to-top").show();
        } else {
            $("#back-to-top").hide();
        }
    });

    //Search

    $(".search-button, .search-close").click(function () {
        $(".search").toggleClass("active");
    });

    AOS.init({
        offset: 0,
        duration: 1000,
        easing: 'ease',
        once: false,          // Hiệu ứng có chạy lại khi cuộn lại hay không
        mirror: true,        // Hiệu ứng có chạy khi cuộn ngược lại hay không
    });

    setTimeout(() => { AOS.refresh(); }, 500);
    let scrollRef = 0;
    window.addEventListener('scroll', function () {
        // increase value up to 10, then refresh AOS
        scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    });

    //Chi tiết sản phẩm
    $('.chitietsanpham-slick-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.chitietsanpham-slick-nav'
    });
    $('.chitietsanpham-slick-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.chitietsanpham-slick-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0,
        arrows: false,
    });

    var firstChild = $('.menu > :first-child');
    firstChild.addClass("active");
    $(".menu-item").click(function () {
        $(".menu-item").removeClass("active");
        $(this).addClass("active");
    });

    $(".fancybox").fancybox();
});

