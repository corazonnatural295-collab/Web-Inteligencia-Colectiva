// Carrusel manual de testimonios
document.addEventListener('DOMContentLoaded', function () {
  const testimonials = document.querySelectorAll('.testimonial__content');
  const dots = document.querySelectorAll('.testimonials__dot');
  const leftArrow = document.querySelector('.testimonials__arrow--left');
  const rightArrow = document.querySelector('.testimonials__arrow--right');
  let current = 0;

  function showTestimonial(idx) {
    testimonials.forEach((el, i) => {
      el.classList.toggle('active', i === idx);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
    current = idx;
  }

  leftArrow.addEventListener('click', function () {
    let idx = current - 1;
    if (idx < 0) idx = testimonials.length - 1;
    showTestimonial(idx);
  });

  rightArrow.addEventListener('click', function () {
    let idx = (current + 1) % testimonials.length;
    showTestimonial(idx);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', function () {
      showTestimonial(i);
    });
  });

  showTestimonial(0);
});