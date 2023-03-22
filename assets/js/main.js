$('.menu__btn').on('click', function () {
  $(this).toggleClass('-active');
  $('.menu__list').stop(true, true).slideToggle(500);
});