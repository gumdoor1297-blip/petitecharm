// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});

// Floating Flowers Background
function createFlowers() {
    const flowersBg = document.getElementById('flowersBg');
    if (!flowersBg) return;
    
    const flowers = ['🌸', '🌺', '🌼', '🌻', '🌷', '🌹', '🌵️', '🌮'];
    
    for (let i = 0; i < 15; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + '%';
        flower.style.top = Math.random() * 100 + '%';
        flower.style.animationDelay = Math.random() * 5 + 's';
        flower.style.animationDuration = (10 + Math.random() * 10) + 's';
        flowersBg.appendChild(flower);
    }
}

// Initialize flowers when page loads
document.addEventListener('DOMContentLoaded', createFlowers);

// Form Submit Handler
function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon. 💕');
    e.target.reset();
}

// Add to Cart Handler
document.addEventListener('click', (e) => {
    if (e.target.closest('.add-to-cart')) {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        alert(`✨ ${productName} added to cart! 💖`);
    }
});

// FAQ Toggle
document.addEventListener('click', (e) => {
    if (e.target.closest('.faq-question')) {
        const question = e.target.closest('.faq-question');
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-question').forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.style.maxHeight = null;
        });
        
        // Toggle current FAQ
        if (!isActive) {
            question.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    }
});

// Sparkle Effect on Click
document.addEventListener('click', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = '✨';
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';
    sparkle.style.fontSize = '1.5rem';
    sparkle.style.color = '#ff6b9d';
    sparkle.style.position = 'fixed';
    sparkle.style.pointerEvents = 'none';
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
});

// Active Navigation Link
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Set active nav on page load
document.addEventListener('DOMContentLoaded', setActiveNav);

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}