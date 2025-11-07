// Your custom JavaScript here
console.log('Jekyll site loaded!');

// Example: Add active class to current nav link
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Gallery Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const galleryItems = document.querySelectorAll('[data-lightbox-trigger]');

  if (galleryItems.length > 0) {
    let currentIndex = 0;
    let galleryData = [];

    // Build gallery data array
    galleryItems.forEach((item, index) => {
      galleryData.push({
        image: item.dataset.image,
        caption: item.dataset.caption
      });

      // Add click listener to open lightbox
      item.addEventListener('click', function() {
        currentIndex = index;
        openLightbox();
      });
    });

    function openLightbox() {
      const data = galleryData[currentIndex];
      lightboxImage.src = data.image;
      lightboxCaption.textContent = data.caption || '';
      lightboxCaption.style.display = data.caption ? 'block' : 'none';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable scrolling
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % galleryData.length;
      openLightbox();
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
      openLightbox();
    }

    // Close button
    lightboxClose.addEventListener('click', closeLightbox);

    // Navigation buttons
    lightboxNext.addEventListener('click', function(e) {
      e.stopPropagation();
      showNext();
    });

    lightboxPrev.addEventListener('click', function(e) {
      e.stopPropagation();
      showPrev();
    });

    // Close on background click
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('active')) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      }
    });
  }
});
