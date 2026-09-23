const orderForm = document.getElementById('order-form');
if (orderForm) {
  orderForm.addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('form-note').textContent = 'Gracias por contarnos tu idea. Este formulario todavía no está conectado para recibir mensajes; puedes encontrarnos en Instagram o Facebook.';
  });
}

const galleryImage = document.getElementById('gallery-image');
if (galleryImage) {
  const slides = [
    { src: 'Imagenes%20MAMA/15%20a%C3%B1os%20mesa%20dulce.jpeg', alt: 'Mesa dulce preparada para una celebración de quince años', title: 'Una celebración para recordar' },
    { src: 'Imagenes%20MAMA/Bodas.jpeg', alt: 'Queque decorado para una boda', title: 'Un día para decir “sí”' },
    { src: 'Imagenes%20MAMA/Figuras%20fondant.jpeg', alt: 'Queque decorado con una figura de koala en fondant', title: 'Detalles hechos con cariño' }
  ];
  const thumbnails = Array.from(document.querySelectorAll('.gallery-thumb'));
  let currentSlide = 0;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    galleryImage.src = slides[currentSlide].src;
    galleryImage.alt = slides[currentSlide].alt;
    galleryImage.parentElement.style.backgroundImage = 'url("' + slides[currentSlide].src + '")';
    document.getElementById('gallery-title').textContent = slides[currentSlide].title;
    document.getElementById('gallery-counter').textContent = String(currentSlide + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
    thumbnails.forEach(function (thumbnail, thumbnailIndex) {
      const isActive = thumbnailIndex === currentSlide;
      thumbnail.classList.toggle('is-active', isActive);
      thumbnail.setAttribute('aria-pressed', String(isActive));
    });
  }

  document.getElementById('gallery-prev').addEventListener('click', function () { showSlide(currentSlide - 1); });
  document.getElementById('gallery-next').addEventListener('click', function () { showSlide(currentSlide + 1); });
  thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function () { showSlide(Number(thumbnail.dataset.slide)); });
  });
  showSlide(0);
  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') showSlide(currentSlide - 1);
    if (event.key === 'ArrowRight') showSlide(currentSlide + 1);
  });
}
