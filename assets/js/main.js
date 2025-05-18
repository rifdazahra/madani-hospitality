/**
 * Madani Group Hospitality - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
    
    // Language switcher functionality
    const langButtons = document.querySelectorAll('.lang-menu a');
    
    if (langButtons.length) {
        langButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                const currentUrl = window.location.pathname;
                const baseUrl = '/madani-hospitality';
                
                // Here we'd need to implement the actual language switching logic
                // For now, we'll just change the current language display
                const currentLangDisplay = document.querySelector('.lang-current');
                currentLangDisplay.textContent = this.textContent;
                
                // In a real implementation, we would redirect to the translated page
                // window.location.href = `${baseUrl}/${lang}${currentUrl.replace(baseUrl, '')}`;
                
                // For now, just store the language preference in localStorage
                localStorage.setItem('preferredLanguage', lang);
            });
        });
    }
    
    // Property gallery image switching
    const thumbnails = document.querySelectorAll('.thumbnail:not(.more-photos)');
    const mainImage = document.querySelector('.main-image img');
    
    if (thumbnails.length && mainImage) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').getAttribute('src');
                const imgAlt = this.querySelector('img').getAttribute('alt');
                
                mainImage.setAttribute('src', imgSrc);
                mainImage.setAttribute('alt', imgAlt);
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add subtle batik background pattern
    const body = document.querySelector('body');
    const batikBg = document.createElement('div');
    batikBg.classList.add('batik-bg');
    body.appendChild(batikBg);
    
    // Add active class to current page in navigation
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        if (currentPath === linkPath || 
            (currentPath.includes(linkPath) && linkPath !== '/')) {
            link.classList.add('active');
        }
    });
    
    // Initialize property filtering if on properties page
    const filterButtons = document.querySelectorAll('.filter-button');
    const propertyCards = document.querySelectorAll('.property-card');
    
    if (filterButtons.length && propertyCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter properties
                propertyCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                    } else {
                        if (card.classList.contains(filter)) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // Simple form validation for contact form
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Here you would normally submit the form
                // For now, just show a success message
                const formMessage = document.createElement('div');
                formMessage.classList.add('form-message', 'success');
                formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                
                contactForm.appendChild(formMessage);
                contactForm.reset();
                
                // Remove message after 5 seconds
                setTimeout(() => {
                    formMessage.remove();
                }, 5000);
            }
        });
    }
}); 