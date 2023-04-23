const fakeThead = $('#fake-thead');
const scrollableDiv = $('#scrollable-div');
const theadHeight = $('table thead').outerHeight();

const scrollableDivTop = scrollableDiv.offset().top;
const scrollableDivHeight = scrollableDiv.outerHeight();
const scrollableDivBottom = scrollableDivTop + scrollableDivHeight;

$(window).on('scroll', () => {
  const isScrolledIntoView = $(window).scrollTop() > scrollableDivTop && $(window).scrollTop() < scrollableDivBottom;
  fakeThead.toggleClass('hidden', !isScrolledIntoView);
  if (isScrolledIntoView) {
    fakeThead.removeClass('hidden');
    fakeThead.css({
      width: scrollableDiv.innerWidth(),
      top: theadHeight,
      height: theadHeight,
      margin: '-' + theadHeight + ' auto'
    });
    fakeThead.html(scrollableDiv.html());
  }
});

scrollableDiv.on('scroll', () => {
  fakeThead.scrollLeft(scrollableDiv.scrollLeft());
});

$(window).on('resize', () => {
  $(window).trigger('scroll');
});