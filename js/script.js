document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu
  const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });

  // Video Modal
  const modal = document.querySelector('#videoModal');
  const videoButton = document.querySelector('.preview__video-button');
  const closeButton = document.querySelector('.modal__close-button');
  const videoPlayer = document.querySelector('#videoPlayer');

  // Open Modal when clicked
  videoButton.addEventListener('click', function () {
    // Show Modal
    modal.style.display = 'block';

    // Replace src attribute with video url
    videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw';
  });

  // Close Modal on close button click
  closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
    videoPlayer.src = '';
  });

  // Close Modal on outter click
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      videoPlayer.src = '';
    }
  });
});

// Navigation background scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll');
  }
});
