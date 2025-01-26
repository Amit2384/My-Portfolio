// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('[data-lucide="menu"]');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isOpen = navLinks.classList.contains('active');
    menuIcon.innerHTML = isOpen ? 
        '<i data-lucide="x"></i>' : 
        '<i data-lucide="menu"></i>';
    lucide.createIcons();
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        menuIcon.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
    }
});

// Initialize EmailJS with your public key
window.onload = function() {
    emailjs.init("imTzZzf5B8mUR8k7T");
}

function sendEmail(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Show loading state
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<i data-lucide="loader"></i><span>Sending...</span>';
    submitButton.disabled = true;

    // Send email using EmailJS
    emailjs.send('service_wis5tld', 'template_lgp6qwh', {
        from_name: name,
        reply_to: email,
        message: message,
    })
    .then(function() {
        // Show success message
        alert('Message sent successfully!');
        // Reset form
        document.getElementById('contact-form').reset();
    })
    .catch(function(error) {
        // Show error message
        alert('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
    })
    .finally(function() {
        // Restore button state
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
        // Refresh Lucide icons
        lucide.createIcons();
    });
}

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            menuIcon.innerHTML = '<i data-lucide="menu"></i>';
            lucide.createIcons();
        }
    });
});

// Add header shadow on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});