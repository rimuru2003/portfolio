// Function to check if element is in viewport
export function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
  }
  
  // Reveal elements on scroll
  export function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
  
    for (let i = 0; i < reveals.length; i++) {
      if (isElementInViewport(reveals[i])) {
        reveals[i].classList.add('visible');
      }
    }
  }
  
  // Initialize reveal on scroll
  export function initRevealOnScroll() {
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run on page load
  }
  