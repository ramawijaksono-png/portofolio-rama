document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links and page sections
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (navLinksContainer.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinksContainer.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Function to show selected page with simple transition
    function showPage(pageId) {
        // Find current active page
        const currentPage = document.querySelector('.page-section.active');
        
        // If there's a current page, fade it out first
        if (currentPage && currentPage.id !== pageId) {
            currentPage.style.opacity = '0';
            currentPage.style.transform = 'translateY(20px)';
            
            // Wait for fade out to complete, then switch pages
            setTimeout(() => {
                // Hide all pages
                pageSections.forEach(section => {
                    section.classList.remove('active');
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(20px)';
                });
                
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Show selected page
                const selectedPage = document.getElementById(pageId);
                if (selectedPage) {
                    selectedPage.classList.add('active');
                    
                    // Fade in the new page
                    setTimeout(() => {
                        selectedPage.style.opacity = '1';
                        selectedPage.style.transform = 'translateY(0)';
                    }, 50);
                }
                
                // Add active class to clicked nav link
                const activeLink = document.querySelector(`[data-page="${pageId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }, 300);
        } else {
            // If no current page or same page, just switch immediately
            pageSections.forEach(section => {
                section.classList.remove('active');
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.classList.add('active');
                setTimeout(() => {
                    selectedPage.style.opacity = '1';
                    selectedPage.style.transform = 'translateY(0)';
                }, 50);
            }
            
            const activeLink = document.querySelector(`[data-page="${pageId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }
    
    // Add click event to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
    
    // Button click handlers for home page
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('fa-download')) {
                // Simulate CV download
                const link = document.createElement('a');
                link.href = '#';
                link.download = 'Rama_Wijaksono_CV.pdf';
                link.click();
            } else if (icon.classList.contains('fa-envelope')) {
                showPage('contact');
            } else if (icon.classList.contains('fa-user')) {
                showPage('profile');
            }
        });
    });
    
    // Contact item interactions
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const text = this.querySelector('span').textContent;
            
            if (icon.classList.contains('fa-envelope')) {
                window.location.href = 'mailto:ramawijaksono@gmail.com';
            } else if (icon.classList.contains('fa-whatsapp')) {
                window.open('https://wa.me/628123456789', '_blank');
            } else if (icon.classList.contains('fa-instagram')) {
                window.open('https://instagram.com/ramq_08_', '_blank');
            } else if (icon.classList.contains('fa-linkedin')) {
                window.open('https://linkedin.com/in/rama-wijaksono-sutarto', '_blank');
            }
        });
    });
    
    // Social media links on contact page
    document.querySelectorAll('.social-icon').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-whatsapp')) {
                window.open('https://wa.me/628123456789', '_blank');
            } else if (icon.classList.contains('fa-instagram')) {
                window.open('https://instagram.com/ramq_08_', '_blank');
            }
        });
    });
    
    // Simple scroll animations for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    document.querySelectorAll('.info-item, .skill-item, .cert-card, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize page transitions
    pageSections.forEach(section => {
        section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
    
    // Show initial page with animation
    const initialPage = document.querySelector('.page-section.active');
    if (initialPage) {
        setTimeout(() => {
            initialPage.style.opacity = '1';
            initialPage.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // Add error handling for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/350x350/1e293b/ffffff?text=Image+Not+Found';
        });
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Close mobile menu on resize to desktop
            if (window.innerWidth > 768) {
                navLinksContainer.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }, 250);
    });
    
    console.log('Website initialized successfully!');
});