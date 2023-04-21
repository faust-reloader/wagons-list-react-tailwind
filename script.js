const fakeThead = document.querySelector('#fake-thead');
const scrollableDiv = document.querySelector('#scrollable-div');
const { offsetHeight: theadHeight } = document.querySelector('table thead');

const { offsetTop: scrollableDivTop, offsetHeight: scrollableDivHeight } = scrollableDiv;
const scrollableDivBottom = scrollableDivTop + scrollableDivHeight;

window.addEventListener('scroll', () => {
  const isScrolledIntoView = window.scrollY > scrollableDivTop && window.scrollY < scrollableDivBottom;
  fakeThead.classList.toggle('hidden', !isScrolledIntoView);
  if (isScrolledIntoView) {
    fakeThead.classList.remove('hidden');
    fakeThead.style.width = scrollableDiv.clientWidth;
    fakeThead.style.top = theadHeight;
    fakeThead.style.height = theadHeight;
    fakeThead.style.margin = '-' + theadHeight + ' auto';
    fakeThead.innerHTML = scrollableDiv.innerHTML;
  }
});

scrollableDiv.addEventListener('scroll', () => {
  fakeThead.scrollLeft = scrollableDiv.scrollLeft;
});

window.addEventListener('resize', () => {
  window.dispatchEvent(new Event('scroll'));
});