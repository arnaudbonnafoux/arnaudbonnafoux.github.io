// Fade-in animation on scroll using Intersection Observer
(function() {
  'use strict';

  function initFadeInAnimations() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    if (fadeInElements.length === 0) return;

    // Fallback for browsers/environments with partial API support.
    if (!('IntersectionObserver' in window)) {
      fadeInElements.forEach(element => element.classList.add('visible'));
      return;
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeInElements.forEach(element => {
      observer.observe(element);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFadeInAnimations, { once: true });
  } else {
    initFadeInAnimations();
  }
})();

(function() {
  'use strict';

  function initAboutProjectModal() {
    const modal = document.querySelector('#about-project-modal');
    const openButton = document.querySelector('.about-project-button');
    const headerImage = document.querySelector('header .visuel_1');
    const closeButton = modal?.querySelector('[data-modal-close]');

    if (!modal || !openButton || !headerImage || !closeButton) return;

    openButton.addEventListener('click', function() {
      const imageBounds = headerImage.getBoundingClientRect();
      modal.style.top = `${imageBounds.bottom + 12}px`;
      modal.style.left = `${Math.max(16, imageBounds.left)}px`;
      modal.showModal();
    });

    closeButton.addEventListener('click', function() {
      modal.close();
      openButton.focus();
    });

    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.close();
        openButton.focus();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAboutProjectModal, { once: true });
  } else {
    initAboutProjectModal();
  }
})();

// Protect images against download
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const protectedImages = document.querySelectorAll('.protected-image');
    
    protectedImages.forEach(img => {
      // Prevent drag and drop
      img.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
      });
      
      // Prevent context menu on right-click
      img.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
      });
      
      // Prevent double-click selection
      img.addEventListener('dblclick', function(e) {
        e.preventDefault();
        return false;
      });
      
      // Prevent copy
      img.addEventListener('copy', function(e) {
        e.preventDefault();
        return false;
      });
    });
  });
})();
