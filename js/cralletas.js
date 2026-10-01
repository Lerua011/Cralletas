const orderForm = document.getElementById('order-form');
if (orderForm) {
  orderForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = new FormData(orderForm);
    const name = String(data.get('nombre') || '').trim();
    const email = String(data.get('correo') || '').trim();
    const date = String(data.get('fecha') || '').trim();
    const portions = String(data.get('porciones') || '').trim();
    const idea = String(data.get('idea') || '').trim();
    const message = [
      'Hola, quiero consultar por un queque.',
      '',
      'Nombre: ' + name,
      'Correo: ' + email,
      'Fecha de celebración: ' + (date || 'Aún por definir'),
      'Porciones aproximadas: ' + (portions || 'Aún por definir'),
      'Idea para el queque: ' + idea
    ].join('\n');
    const whatsappUrl = 'https://wa.me/50683466687?text=' + encodeURIComponent(message);
    const whatsappWindow = window.open(whatsappUrl, '_blank');

    if (whatsappWindow) {
      whatsappWindow.opener = null;
      document.getElementById('form-note').textContent = 'WhatsApp se abrió con tu consulta lista. Revisa el mensaje y presiona Enviar.';
    } else {
      window.location.href = whatsappUrl;
    }
  });
}

const galleryImage = document.getElementById('gallery-image');
if (galleryImage) {
  const photoFiles = [
    'Foto 1.jpeg', 'foto 2.jpeg', 'Foto 3.jpeg',
    'WhatsApp Image 2026-09-29 at 3.34.13 PM (1).jpeg', 'WhatsApp Image 2026-09-29 at 3.34.13 PM.jpeg',
    'WhatsApp Image 2026-09-29 at 3.34.14 PM (1).jpeg', 'WhatsApp Image 2026-09-29 at 3.34.14 PM (2).jpeg',
    'WhatsApp Image 2026-09-29 at 3.34.14 PM (3).jpeg', 'WhatsApp Image 2026-09-29 at 3.34.14 PM (5).jpeg',
    'WhatsApp Image 2026-09-29 at 3.34.14 PM (6).jpeg', 'WhatsApp Image 2026-09-29 at 3.34.14 PM (7).jpeg',
    'WhatsApp Image 2026-09-29 at 3.34.14 PM.jpeg', 'WhatsApp Image 2026-09-29 at 3.34.15 PM (1).jpeg',
    'WhatsApp Image 2026-09-29 at 3.34.15 PM (2).jpeg', 'WhatsApp Image 2026-09-29 at 3.34.15 PM (4).jpeg',
    'WhatsApp Image 2026-09-29 at 3.34.15 PM (5).jpeg', 'WhatsApp Image 2026-09-29 at 3.34.15 PM (6).jpeg',
    'WhatsApp Image 2026-09-29 at 3.34.15 PM (7).jpeg', 'WhatsApp Image 2026-09-29 at 3.34.16 PM.jpeg'
  ];
  const featuredPhotos = {
    'Foto 1.jpeg': { alt: 'Queque rosa de dos niveles decorado con flores para un cumpleaños', title: 'Una celebración para recordar' },
    'foto 2.jpeg': { alt: 'Queque cubierto de chocolates de colores y barquillos', title: 'Queques con chocolates' },
    'Foto 3.jpeg': { alt: 'Queque temático de rock decorado como una chaqueta', title: 'Diseños personalizados' }
  };
  const slides = photoFiles.map(function (file) {
    const featured = featuredPhotos[file];
    return {
      src: 'Imagenes%20MAMA/' + encodeURIComponent(file),
      alt: featured ? featured.alt : 'Fotografía de un queque o postre de Cralletas',
      title: featured ? featured.title : 'Una creación de Cralletas'
    };
  });
  const thumbnailsContainer = document.getElementById('gallery-thumbnails');
  thumbnailsContainer.innerHTML = slides.map(function (slide, index) {
    return '<button class="gallery-thumb' + (index === 0 ? ' is-active' : '') + '" type="button" data-slide="' + index + '" aria-label="Ver foto ' + (index + 1) + ' de ' + slides.length + '" aria-pressed="' + (index === 0) + '"><img src="' + slide.src + '" alt="" loading="lazy"></button>';
  }).join('');
  const thumbnails = Array.from(thumbnailsContainer.querySelectorAll('.gallery-thumb'));
  let currentSlide = 0;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    galleryImage.src = slides[currentSlide].src;
    galleryImage.alt = slides[currentSlide].alt;
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
