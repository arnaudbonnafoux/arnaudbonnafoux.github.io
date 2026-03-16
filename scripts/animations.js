// Fade-in animation on scroll using Intersection Observer
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
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

    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });
  });
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
