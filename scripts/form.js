// Form validation and sanitization
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', function(e) {
      const emailField = document.getElementById('email');
      
      if (emailField) {
        const sanitized = emailField.value
          .trim()
          .toLowerCase()
          .replace(/[<>"'`;(){}\\]/g, '');
        
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        
        if (!emailRegex.test(sanitized)) {
          e.preventDefault();
          return;
        }
        
        emailField.value = sanitized;
        
        setTimeout(() => {
          emailField.value = '';
        }, 100);
      }
    });
  });
})();
