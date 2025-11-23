// Carrusel tipo swipe para Modelos de Negocio
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.models-carousel .card');
  const dots = document.querySelectorAll('.models-carousel__dot');
  const leftArrow = document.querySelector('.models-carousel__arrow--left');
  const rightArrow = document.querySelector('.models-carousel__arrow--right');
  let current = 0;

  function showCard(idx) {
    cards.forEach((el, i) => {
      el.classList.toggle('active', i === idx);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
    current = idx;
  }

  leftArrow.addEventListener('click', function () {
    let idx = current - 1;
    if (idx < 0) idx = cards.length - 1;
    showCard(idx);
  });

  rightArrow.addEventListener('click', function () {
    let idx = (current + 1) % cards.length;
    showCard(idx);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', function () {
      showCard(i);
    });
  });

  // Swipe support
  let startX = null;
  const track = document.querySelector('.models-carousel__track');
  track.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  });
  track.addEventListener('touchend', function (e) {
    if (startX === null) return;
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) {
      // Swipe right
      let idx = current - 1;
      if (idx < 0) idx = cards.length - 1;
      showCard(idx);
    } else if (startX - endX > 50) {
      // Swipe left
      let idx = (current + 1) % cards.length;
      showCard(idx);
    }
    startX = null;
  });

  showCard(0);
});