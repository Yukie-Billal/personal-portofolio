$(document).ready(function () {
    var content = $('main').html();
    $('main').html("");
    setTimeout(() => {
        loadAll(content);
    }, 1500);
    function loadAll(content) {
        $('.splash-load').addClass('animate__animated animate__fadeOut');
        setTimeout(() => {
            $('.splash-load').removeClass('animate__animated animate__fadeOut');
            $('.splash-load').addClass('d-none');
            $('main').html(content);
            loadScript();
        }, 200);
    }
});

function loadScript() {
    $('#navbar-toggler').click(function (e) {
        var classList = $('#navbar-menu').attr('class').split(' ');
        var open = false;
        $.each(classList, function (index, value) {
            if (value == 'show') {
                open = true;
            }
        });
        if (open) {
            $('#navbar-menu').collapse('hide');
        } else {
            $('#navbar-menu').collapse('show')
        }
    })
    var section = [1, 2, 3, 4];
    // $.each($('[section-target]'), function (index, value) {
    //     $()
    // })
    $.each(section, function (index, value) {
        $('.click-scroll').eq(index).click(function (e) {
            var offsetTarget = $('#section_' + value).offset().top;
            var scrollTop = $(document).scrollTop();
            e.preventDefault();
            if (scrollTop < offsetTarget) {
                $('html, body').animate({
                    'scrollTop': offsetTarget - 88
                }, 300)
            }
            $('#navbar-menu').collapse('hide');
        })
    });
    $(document).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 40 && !$('#scroll-top').attr('class').split(' ').includes('animate__fadeInUp')) {
            $('#scroll-top').removeClass('animate__fadeOutDown');
            $('#scroll-top').removeClass('d-none');
            $('#scroll-top').addClass('animate__animated animate__fadeInUp');
        } else if (scrollTop <= 40 && $('#scroll-top').attr('class').split(' ').includes('animate__fadeInUp')) {
            $('#scroll-top').removeClass('animate__fadeInUp');
            $('#scroll-top').addClass('animate__fadeOutDown');
            setTimeout(() => {
                $('#scroll-top').addClass('d-none');
            }, 300);
            console.log();
        }

        if (scrollTop > 100) {
            $('#section_2').removeClass('hide');
            $('#section_2 .header-section').addClass('animate__animated animate__jackInTheBox');
        }
        if (scrollTop > 150) {
            animatedElement('#section_2 #brand-img span:nth-child(2)', 'animate__animated animate__fadeInLeft')

            setTimeout(() => {
                $('#section_2 #text-wrap').addClass('animate__animated animate__fadeInUp');
                $('#section_2 #brand-img img').addClass('animate__animated animate__fadeInUp');
                $('#section_2 #brand-img span:nth-child(3)').addClass('animate__animated animate__fadeInUp');
                $('#section_2 #brand-img span:nth-child(4)').addClass('animate__animated animate__fadeInUp');
                $('#section_2 #brand-img span:nth-child(5)').addClass('animate__animated animate__fadeInUp');
            }, 300);
        }
        if (scrollTop > $('#section_3').offset().top - $('#section_2').offset().top) {
            animatedElement('#section_3 .header-section', 'animate__animated animate__jackInTheBox')
            // console.log(scrollTop);
        }
    });
    // console.log($('#section_2').offset());
    // console.log($('#section_3').offset());
    function animatedElement(element, className) {
        $(element).addClass(className);
        $(element).removeClass('hide');
    }
    if ($(document).scrollTop() <= 40) {
        $('#scroll-top').addClass('d-none');
    } else {
        $('#scroll-top').removeClass('d-none');
    }
    $(document).find('#scroll-top').click(function () {
        $('html, body').animate({
            'scrollTop': 0
        }, 500)
    });

    // Scroll Event & Animation
    setTimeout(() => {
        $('#my-name').removeClass('d-none');
        $('#my-name').addClass('animate__animated animate__backInLeft');
    }, 400);

    // var activeText = 1;
    // var nextText = 2;
    // function aboutSlider() {
    //     // $('.about-' + activeText).removeClass('active');
    // }
    // setInterval(() => {
    //     aboutSlider()
    // }, 1500);
}