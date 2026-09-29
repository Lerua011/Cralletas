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
    '15 años mesa dulce.jpeg', 'Bodas.jpeg', 'Cocodrilo.jpeg', 'Figuras fondant.jpeg',
    'WhatsApp Image 2026-09-22 at 6.17.33 PM.jpeg', 'WhatsApp Image 2026-09-22 at 6.25.21 PM.jpeg',
    'WhatsApp Image 2026-09-22 at 6.30.57 PM (1).jpeg', 'WhatsApp Image 2026-09-22 at 6.30.57 PM (2).jpeg',
    'WhatsApp Image 2026-09-22 at 6.30.57 PM (4).jpeg', 'WhatsApp Image 2026-09-22 at 6.30.57 PM.jpeg',
    'WhatsApp Image 2026-09-22 at 6.30.58 PM (1).jpeg', 'WhatsApp Image 2026-09-22 at 6.30.58 PM (2).jpeg',
    'WhatsApp Image 2026-09-22 at 6.30.58 PM (3).jpeg', 'WhatsApp Image 2026-09-22 at 6.30.58 PM.jpeg',
    'WhatsApp Image 2026-09-22 at 6.30.59 PM (1).jpeg', 'WhatsApp Image 2026-09-22 at 6.30.59 PM.jpeg',
    'WhatsApp Image 2026-09-22 at 6.31.00 PM (1).jpeg', 'WhatsApp Image 2026-09-22 at 6.31.00 PM (2).jpeg',
    'WhatsApp Image 2026-09-22 at 6.31.00 PM.jpeg', 'WhatsApp Image 2026-09-22 at 6.31.01 PM (1).jpeg',
    'WhatsApp Image 2026-09-22 at 6.31.01 PM (2).jpeg', 'WhatsApp Image 2026-09-22 at 6.31.01 PM (3).jpeg',
    'WhatsApp Image 2026-09-22 at 6.31.01 PM (4).jpeg', 'WhatsApp Image 2026-09-22 at 6.31.01 PM (5).jpeg',
    'WhatsApp Image 2026-09-22 at 6.31.01 PM (6).jpeg', 'WhatsApp Image 2026-09-22 at 6.31.01 PM (7).jpeg',
    'WhatsApp Image 2026-09-22 at 6.31.01 PM (8).jpeg', 'WhatsApp Image 2026-09-22 at 6.31.01 PM.jpeg',
    'WhatsApp Image 2026-09-22 at 6.31.02 PM (1).jpeg', 'WhatsApp Image 2026-09-22 at 6.31.02 PM (2).jpeg',
    'WhatsApp Image 2026-09-22 at 6.31.02 PM (3).jpeg', 'WhatsApp Image 2026-09-22 at 6.31.02 PM (4).jpeg',
    'WhatsApp Image 2026-09-22 at 6.31.02 PM (5).jpeg', 'WhatsApp Image 2026-09-22 at 6.31.02 PM (6).jpeg',
    'WhatsApp Image 2026-09-22 at 6.31.02 PM.jpeg', 'WhatsApp Image 2026-09-22 at 8.46.57 PM (1).jpeg',
    'WhatsApp Image 2026-09-22 at 8.46.57 PM (2).jpeg', 'WhatsApp Image 2026-09-22 at 8.46.57 PM (3).jpeg',
    'WhatsApp Image 2026-09-22 at 8.46.57 PM.jpeg', 'WhatsApp Image 2026-09-22 at 8.46.58 PM (2).jpeg',
    'WhatsApp Image 2026-09-22 at 8.46.58 PM (3).jpeg', 'WhatsApp Image 2026-09-22 at 8.46.58 PM.jpeg',
    'WhatsApp Image 2026-09-22 at 8.46.59 PM (1).jpeg', 'WhatsApp Image 2026-09-22 at 8.46.59 PM (2).jpeg',
    'WhatsApp Image 2026-09-22 at 8.46.59 PM (3).jpeg', 'WhatsApp Image 2026-09-22 at 8.46.59 PM (4).jpeg',
    'WhatsApp Image 2026-09-22 at 8.46.59 PM.jpeg', 'WhatsApp Image 2026-09-28 at 8.25.22 PM.jpeg',
    'WhatsApp Image 2026-09-28 at 8.25.29 PM.jpeg'
  ];
  const featuredPhotos = {
    '15 años mesa dulce.jpeg': { alt: 'Mesa dulce preparada para una celebración de quince años', title: 'Una celebración para recordar' },
    'Bodas.jpeg': { alt: 'Queque decorado para una boda', title: 'Un día para decir sí' },
    'Cocodrilo.jpeg': { alt: 'Queque personalizado con diseño de cocodrilo', title: 'Diseños personalizados' },
    'Figuras fondant.jpeg': { alt: 'Queque decorado con una figura de fondant', title: 'Detalles hechos con cariño' }
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
