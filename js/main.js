$(function () {
    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    });

    $('.header__btn-menu').on('click', function () {
        $('.header__menu ul').slideToggle()
    });
});




