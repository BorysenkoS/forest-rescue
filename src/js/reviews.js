const swiper = new Swiper('.swiper2', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 3,
  speed: 800,
  navigation: {
    nextEl: '.button-next',
  },
  simulateTouch: false,
  keyboard: false,
  mousewheel: false,
});

document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle('active');

    if (button.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      accordionContent.style.paddingBottom = '36px';
    } else {
      accordionContent.style.maxHeight = 0;
      accordionContent.style.paddingTop = 0;
      accordionContent.style.paddingBottom = 0;
    }
  });
});
