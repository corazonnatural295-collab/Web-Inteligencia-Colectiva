// Swipe horizontal para modelos de negocio (sin modificar tamaño ni estilos)
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.models-carousel-track');
  let isDown = false;
  let startX;
  let scrollLeft;

  if (!track) return;

  track.style.overflowX = 'auto';
  track.style.cursor = 'grab';
  track.style.scrollBehavior = 'smooth';
  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('active');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.classList.remove('active');
  });
  track.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('active');
  });
  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.2; // velocidad
    track.scrollLeft = scrollLeft - walk;
  });

  // Soporte para touch
  let touchStartX = null;
  let touchScrollLeft = null;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = track.scrollLeft;
  });
  track.addEventListener('touchmove', (e) => {
    if (touchStartX === null) return;
    const x = e.touches[0].pageX;
    const walk = (x - touchStartX) * 1.2;
    track.scrollLeft = touchScrollLeft - walk;
  });
  track.addEventListener('touchend', () => {
    touchStartX = null;
    touchScrollLeft = null;
  });
});