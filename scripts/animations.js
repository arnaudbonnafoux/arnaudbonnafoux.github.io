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
