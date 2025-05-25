// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu if open
      mobileMenu.classList.add('hidden');
    });
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  // Form submission handling (logs to console)
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
      console.log('Form submitted:', { name, email, message });
      alert('Message sent! We will get back to you soon.');
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    } else {
      alert('Please fill out all fields.');
    }
    submitBtn.disabled = false;
  });