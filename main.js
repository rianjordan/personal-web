// Aprian Ditia - Enhanced Crypto Trader Website JavaScript
// Professional animations and interactions

class EnhancedCryptoTraderWebsite {
    constructor() {
        this.isLoaded = false;
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.initPageLoader();
        this.initTypewriter();
        this.initHeroAnimations();
        this.initScrollAnimations();
        this.initHoverEffects();
        this.initSmoothScrolling();
        this.initScrollIndicator();
        this.initGlitchEffect();
        
        // Initialize after a short delay
        setTimeout(() => {
            this.isLoaded = true;
            this.hidePageLoader();
        }, 1500);
    }

    // Page loader animation
    initPageLoader() {
        const loader = document.getElementById('pageLoader');
        
        // Animate loader text
        const loaderText = loader.querySelector('.loader-text');
        
        // Fade in loader text
        gsap.to(loaderText, {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        });
    }

    hidePageLoader() {
        const loader = document.getElementById('pageLoader');
        
        gsap.to(loader, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            onComplete: () => {
                loader.style.display = 'none';
                this.startHeroAnimations();
            }
        });
    }

    // Initialize typewriter effect for hero tagline
    initTypewriter() {
        const typed = new Typed('#typed-text', {
            strings: [
                'Trading for a living. Turning chaos into opportunity.',
                'Where precision meets profit in digital markets.',
                'Algorithmic strategies with human intuition.',
                'Transforming volatility into victory.'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Enhanced hero animations with staggered sequence
    initHeroAnimations() {
        // Set initial states
        gsap.set('.hero-title', { opacity: 0, y: 50 });
        gsap.set('.hero-subtitle', { opacity: 0, y: 30 });
        gsap.set('.hero-tagline', { opacity: 0, y: 30 });
        gsap.set('.hero-cta', { opacity: 0, y: 30 });
        gsap.set('.scroll-indicator', { opacity: 0 });
    }

    startHeroAnimations() {
        // Staggered hero animation sequence
        const heroTimeline = gsap.timeline();
        
        heroTimeline
            .to('.hero-title', {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'back.out(1.7)'
            })
            .to('.hero-subtitle', {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'back.out(1.7)'
            }, '-=0.8')
            .to('.hero-tagline', {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'back.out(1.7)'
            }, '-=0.6')
            .to('.hero-cta', {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'back.out(1.7)'
            }, '-=0.4')
            .to('.scroll-indicator', {
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.2');
    }

    // Enhanced scroll-triggered animations
    initScrollAnimations() {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // About section animation
        gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            }
        })
        .to('.about-content', {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power3.out'
        })
        .to('.about-image', {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power3.out'
        }, '-=1');

        // Skills section animation with stagger
        gsap.timeline({
            scrollTrigger: {
                trigger: '#skills',
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            }
        })
        .to('#skills .fade-in-up', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .to('.skill-card', {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.7)'
        }, '-=0.5');

        // Vision section animation
        gsap.timeline({
            scrollTrigger: {
                trigger: '#vision',
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            }
        })
        .to('#vision .fade-in-up', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out'
        });

        // Connect section animation
        gsap.timeline({
            scrollTrigger: {
                trigger: '#connect',
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            }
        })
        .to('#connect .fade-in-up', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .to('.social-icon', {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }, '-=0.3');

        // Footer animation
        gsap.to('footer', {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: 'footer',
                start: 'top 95%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Enhanced hover effects
    initHoverEffects() {
        // Skill cards hover effects
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        // Social icon hover effect
        const socialIcon = document.querySelector('.social-icon');
        if (socialIcon) {
            socialIcon.addEventListener('mouseenter', () => {
                gsap.to(socialIcon, {
                    scale: 1.2,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                });
            });
            
            socialIcon.addEventListener('mouseleave', () => {
                gsap.to(socialIcon, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                });
            });
        }

        // Avatar hover effect
        const avatar = document.querySelector('.avatar-image');
        if (avatar) {
            avatar.addEventListener('mouseenter', () => {
                gsap.to(avatar, {
                    scale: 1.05,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
            
            avatar.addEventListener('mouseleave', () => {
                gsap.to(avatar, {
                    scale: 1,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        }
    }

    // Initialize glitch effect for vision quote
    initGlitchEffect() {
        const glitchText = document.querySelector('.glitch-text');
        
        if (glitchText) {
            glitchText.addEventListener('mouseenter', () => {
                this.triggerGlitch(glitchText);
            });
        }
    }

    triggerGlitch(element) {
        const originalText = element.textContent;
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        let glitchCount = 0;
        const maxGlitches = 8;
        
        const glitchInterval = setInterval(() => {
            let glitchedText = '';
            for (let i = 0; i < originalText.length; i++) {
                if (Math.random() > 0.6 && originalText[i] !== ' ') {
                    glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                } else {
                    glitchedText += originalText[i];
                }
            }
            element.textContent = glitchedText;
            
            glitchCount++;
            if (glitchCount >= maxGlitches) {
                clearInterval(glitchInterval);
                element.textContent = originalText;
            }
        }, 60);
    }

    // Initialize smooth scrolling for navigation links
    initSmoothScrolling() {
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                this.scrollToSection(targetId.substring(1));
            });
        });
    }

    // Smooth scroll to section
    scrollToSection(sectionId) {
        const targetElement = document.getElementById(sectionId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Initialize scroll indicator
    initScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        
        // Hide scroll indicator after scrolling starts
        let hasScrolled = false;
        
        window.addEventListener('scroll', () => {
            if (!hasScrolled && window.scrollY > 100) {
                hasScrolled = true;
                gsap.to(scrollIndicator, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                    onComplete: () => {
                        scrollIndicator.style.display = 'none';
                    }
                });
            }
        });
    }
}

// Initialize the enhanced website
const website = new EnhancedCryptoTraderWebsite();

// Global scroll to section function for button clicks
window.scrollToSection = function(sectionId) {
    website.scrollToSection(sectionId);
};

// Add resize handler for responsive adjustments
window.addEventListener('resize', () => {
    // Recalculate animations on resize
    ScrollTrigger.refresh();
});

// Add performance optimization
window.addEventListener('load', () => {
    // Mark page as fully loaded
    document.body.classList.add('fully-loaded');
    
    // Add subtle entrance animation
    gsap.from('body', {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
    });
});

// Respect user's motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable complex animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

// Add intersection observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));
});