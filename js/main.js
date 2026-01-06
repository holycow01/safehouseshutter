/**
 * Safehouse Shutter - Main JavaScript
 * Professional Impact Windows & Doors
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initHeader();
  initMobileNav();
  initAnimations();
  initFAQ();
  initForms();
  initSmoothScroll();
});

/**
 * Header scroll behavior
 */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove scrolled class
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

/**
 * Mobile navigation toggle
 */
function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn = document.querySelector('.mobile-nav-close');
  const navLinks = document.querySelectorAll('.mobile-nav-links a');

  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileNav);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  function closeMobileNav() {
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      closeMobileNav();
    }
  });
}

/**
 * Scroll animations using Intersection Observer
 */
function initAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay for elements
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

/**
 * FAQ accordion functionality
 */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * Form handling and validation
 */
function initForms() {
  const forms = document.querySelectorAll('.contact-form');
  
  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const submitBtn = form.querySelector('.form-submit');
  const originalText = submitBtn.textContent;
  
  // Basic validation
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;
  
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add('error');
    } else {
      field.classList.remove('error');
    }
  });
  
  // Email validation
  const emailField = form.querySelector('input[type="email"]');
  if (emailField && emailField.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
      isValid = false;
      emailField.classList.add('error');
    }
  }
  
  // Phone validation
  const phoneField = form.querySelector('input[type="tel"]');
  if (phoneField && phoneField.value) {
    const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
    if (!phoneRegex.test(phoneField.value)) {
      isValid = false;
      phoneField.classList.add('error');
    }
  }
  
  if (!isValid) {
    showNotification('Please fill in all required fields correctly.', 'error');
    return;
  }
  
  // Show loading state
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  // Simulate form submission (replace with actual submission logic)
  setTimeout(() => {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    form.reset();
    showNotification('Thank you! We\'ll contact you shortly for your free estimate.', 'success');
  }, 1500);
}

/**
 * Show notification message
 */
function showNotification(message, type = 'success') {
  // Remove existing notifications
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()">&times;</button>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: ${type === 'success' ? '#38a169' : '#e53e3e'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
  .form-control.error {
    border-color: #e53e3e !important;
  }
`;
document.head.appendChild(style);

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (!target) return;
      
      e.preventDefault();
      
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

/**
 * Lazy load images (for future use with actual images)
 */
function initLazyLoad() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if (!lazyImages.length) return;
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
}

/**
 * Counter animation for statistics
 */
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  });
}

/**
 * Initialize counter animation on scroll
 */
const counterSection = document.querySelector('.hero-stats');
if (counterSection) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.disconnect();
    }
  }, { threshold: 0.5 });
  
  observer.observe(counterSection);
}

/**
 * WhatsApp click-to-chat
 */
function openWhatsApp() {
  const phone = '19543990262';
  const message = encodeURIComponent('Hi! I\'m interested in getting a free estimate for impact windows/doors.');
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// Expose to global scope for onclick handlers
window.openWhatsApp = openWhatsApp;

