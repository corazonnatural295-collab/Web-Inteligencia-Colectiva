// Acordeón para servicios estratégicos
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.accordion-card');
  cards.forEach((card, idx) => {
    const header = card.querySelector('.accordion-header');
    header.addEventListener('click', function () {
      if (card.classList.contains('active')) {
        card.classList.remove('active');
      } else {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      }
    });
  });
});