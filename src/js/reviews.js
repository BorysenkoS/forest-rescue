// SWIPER

const swiper = new Swiper('.swiper2', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 3,
  speed: 800,
  allowTouchMove: false,
  navigation: {
    nextEl: '.button-next',
  },
});

// Rotate for icons

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const icon = button.querySelector('.icon');

    if (icon) {
      icon.classList.toggle('rotate');
    }
  });
});

// Accordion

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
