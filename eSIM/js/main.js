// ============================================
// ESIM STORE - MAIN JAVASCRIPT
// Modern, Interactive & Fast - Advanced Hero Edition
// ============================================

// ============================================
// ADVANCED HERO ANIMATIONS & EFFECTS
// ============================================

// Particles Animation System
class ParticlesSystem {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        this.particleCount = 30;
        this.particles = [];
        this.init();
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 3 + 4;
        const delay = Math.random() * 2;
        const left = Math.random() * 100;
        const offsetX = (Math.random() - 0.5) * 200;
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = left + '%';
        particle.style.bottom = '-10px';
        particle.style.setProperty('--duration', duration + 's');
        particle.style.setProperty('--delay', delay + 's');
        particle.style.setProperty('--offset-x', offsetX + 'px');
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';
        
        this.container.appendChild(particle);
        
        // Remove particle after animation completes
        setTimeout(() => {
            particle.remove();
            this.createParticle(); // Create new particle
        }, (duration + delay) * 1000);
    }
}

// Counter Animation
class CounterAnimation {
    constructor(element, target, duration = 2000) {
        this.element = element;
        this.target = parseInt(target);
        this.duration = duration;
        this.current = 0;
        this.start = null;
        this.isAnimating = false;
    }

    animate(timestamp) {
        if (!this.start) this.start = timestamp;
        const progress = (timestamp - this.start) / this.duration;

        if (progress < 1) {
            this.current = Math.floor(progress * this.target);
            this.element.textContent = this.current;
            requestAnimationFrame((ts) => this.animate(ts));
        } else {
            this.element.textContent = this.target;
            this.isAnimating = false;
        }
    }

    start_animation() {
        if (!this.isAnimating) {
            this.isAnimating = true;
            requestAnimationFrame((ts) => this.animate(ts));
        }
    }
}

// Hero Advanced Effects
class HeroEffects {
    constructor() {
        this.init();
    }

    init() {
        this.initParticles();
        this.initCounters();
        this.initButtonEffects();
        this.initScrollIndicator();
    }

    initParticles() {
        new ParticlesSystem('particlesContainer');
    }

    initCounters() {
        const counterElements = document.querySelectorAll('.stat-number[data-target]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    const counter = new CounterAnimation(entry.target, entry.target.dataset.target);
                    counter.start_animation();
                }
            });
        }, { threshold: 0.5 });

        counterElements.forEach(element => {
            observer.observe(element);
        });
    }

    initButtonEffects() {
        const buttons = document.querySelectorAll('.btn-premium');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                const glow = button.querySelector('.btn-glow');
                if (glow) {
                    const rect = button.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    glow.style.left = x + 'px';
                    glow.style.top = y + 'px';
                    glow.style.animation = 'none';
                    setTimeout(() => {
                        glow.style.animation = 'glowExpand 0.6s ease-out forwards';
                    }, 10);
                }
            });

            button.addEventListener('click', (e) => {
                // Ripple effect
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                button.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    initScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const nextSection = document.getElementById('countries');
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }
}

// Initialize Hero Effects when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    new HeroEffects();
});

// ============================================
// Countries Data - 120+ Countries
const COUNTRIES = [
    // Europe
    { name: 'ألمانيا', code: 'DE', flag: '🇩🇪' },
    { name: 'فرنسا', code: 'FR', flag: '🇫🇷' },
    { name: 'إيطاليا', code: 'IT', flag: '🇮🇹' },
    { name: 'إسبانيا', code: 'ES', flag: '🇪🇸' },
    { name: 'بريطانيا', code: 'GB', flag: '🇬🇧' },
    { name: 'بولندا', code: 'PL', flag: '🇵🇱' },
    { name: 'هولندا', code: 'NL', flag: '🇳🇱' },
    { name: 'بلجيكا', code: 'BE', flag: '🇧🇪' },
    { name: 'السويد', code: 'SE', flag: '🇸🇪' },
    { name: 'النرويج', code: 'NO', flag: '🇳🇴' },
    { name: 'سويسرا', code: 'CH', flag: '🇨🇭' },
    { name: 'النمسا', code: 'AT', flag: '🇦🇹' },
    { name: 'الدنمارك', code: 'DK', flag: '🇩🇰' },
    { name: 'فنلندا', code: 'FI', flag: '🇫🇮' },
    { name: 'تشيكيا', code: 'CZ', flag: '🇨🇿' },
    { name: 'المجر', code: 'HU', flag: '🇭🇺' },
    { name: 'رومانيا', code: 'RO', flag: '🇷🇴' },
    { name: 'اليونان', code: 'GR', flag: '🇬🇷' },
    { name: 'البرتغال', code: 'PT', flag: '🇵🇹' },
    { name: 'إيرلندا', code: 'IE', flag: '🇮🇪' },

    // Asia
    { name: 'اليابان', code: 'JP', flag: '🇯🇵' },
    { name: 'كوريا الجنوبية', code: 'KR', flag: '🇰🇷' },
    { name: 'تايلاند', code: 'TH', flag: '🇹🇭' },
    { name: 'ماليزيا', code: 'MY', flag: '🇲🇾' },
    { name: 'سنغافورة', code: 'SG', flag: '🇸🇬' },
    { name: 'الفلبين', code: 'PH', flag: '🇵🇭' },
    { name: 'إندونيسيا', code: 'ID', flag: '🇮🇩' },
    { name: 'فيتنام', code: 'VN', flag: '🇻🇳' },
    { name: 'الصين', code: 'CN', flag: '🇨🇳' },
    { name: 'الهند', code: 'IN', flag: '🇮🇳' },
    { name: 'باكستان', code: 'PK', flag: '🇵🇰' },
    { name: 'بنغلادش', code: 'BD', flag: '🇧🇩' },
    { name: 'تايوان', code: 'TW', flag: '🇹🇼' },
    { name: 'هونج كونج', code: 'HK', flag: '🇭🇰' },
    { name: 'تركيا', code: 'TR', flag: '🇹🇷' },
    { name: 'الإمارات', code: 'AE', flag: '🇦🇪' },
    { name: 'السعودية', code: 'SA', flag: '🇸🇦' },
    { name: 'مصر', code: 'EG', flag: '🇪🇬' },

    // Americas
    { name: 'الولايات المتحدة', code: 'US', flag: '🇺🇸' },
    { name: 'كندا', code: 'CA', flag: '🇨🇦' },
    { name: 'المكسيك', code: 'MX', flag: '🇲🇽' },
    { name: 'البرازيل', code: 'BR', flag: '🇧🇷' },
    { name: 'الأرجنتين', code: 'AR', flag: '🇦🇷' },
    { name: 'تشيلي', code: 'CL', flag: '🇨🇱' },
    { name: 'كولومبيا', code: 'CO', flag: '🇨🇴' },
    { name: 'بيرو', code: 'PE', flag: '🇵🇪' },
    { name: 'الإكوادور', code: 'EC', flag: '🇪🇨' },
    { name: 'فنزويلا', code: 'VE', flag: '🇻🇪' },

    // Africa
    { name: 'جنوب أفريقيا', code: 'ZA', flag: '🇿🇦' },
    { name: 'نيجيريا', code: 'NG', flag: '🇳🇬' },
    { name: 'كينيا', code: 'KE', flag: '🇰🇪' },
    { name: 'تنزانيا', code: 'TZ', flag: '🇹🇿' },
    { name: 'الكاميرون', code: 'CM', flag: '🇨🇲' },
    { name: 'المغرب', code: 'MA', flag: '🇲🇦' },
    { name: 'تونس', code: 'TN', flag: '🇹🇳' },
    { name: 'الجزائر', code: 'DZ', flag: '🇩🇿' },
    { name: 'ليبيا', code: 'LY', flag: '🇱🇾' },
    { name: 'السودان', code: 'SD', flag: '🇸🇩' },

    // Middle East
    { name: 'إيران', code: 'IR', flag: '🇮🇷' },
    { name: 'العراق', code: 'IQ', flag: '🇮🇶' },
    { name: 'لبنان', code: 'LB', flag: '🇱🇧' },
    { name: 'الأردن', code: 'JO', flag: '🇯🇴' },
    { name: 'فلسطين', code: 'PS', flag: '🇵🇸' },
    { name: 'إسرائيل', code: 'IL', flag: '🇮🇱' },
    { name: 'الكويت', code: 'KW', flag: '🇰🇼' },
    { name: 'قطر', code: 'QA', flag: '🇶🇦' },
    { name: 'البحرين', code: 'BH', flag: '🇧🇭' },
    { name: 'عمان', code: 'OM', flag: '🇴🇲' },
    { name: 'اليمن', code: 'YE', flag: '🇾🇪' },
    { name: 'سوريا', code: 'SY', flag: '🇸🇾' },

    // Oceania
    { name: 'أستراليا', code: 'AU', flag: '🇦🇺' },
    { name: 'نيوزيلندا', code: 'NZ', flag: '🇳🇿' },
    { name: 'فيجي', code: 'FJ', flag: '🇫🇯' },
    { name: 'بابوا غينيا الجديدة', code: 'PG', flag: '🇵🇬' },

    // Additional Countries (to reach 120+)
    { name: 'بنما', code: 'PA', flag: '🇵🇦' },
    { name: 'جامايكا', code: 'JM', flag: '🇯🇲' },
    { name: 'بورتوريكو', code: 'PR', flag: '🇵🇷' },
    { name: 'إثيوبيا', code: 'ET', flag: '🇪🇹' },
    { name: 'أوغندا', code: 'UG', flag: '🇺🇬' },
    { name: 'موريشيوس', code: 'MU', flag: '🇲🇺' },
    { name: 'بوليفيا', code: 'BO', flag: '🇧🇴' },
    { name: 'باراجواي', code: 'PY', flag: '🇵🇾' },
    { name: 'أوروجواي', code: 'UY', flag: '🇺🇾' },
    { name: 'غواتيمالا', code: 'GT', flag: '🇬🇹' },
    { name: 'هندوراس', code: 'HN', flag: '🇭🇳' },
    { name: 'السلفادور', code: 'SV', flag: '🇸🇻' },
    { name: 'كوستاريكا', code: 'CR', flag: '🇨🇷' },
    { name: 'نيكاراجوا', code: 'NI', flag: '🇳🇮' },
    { name: 'بليز', code: 'BZ', flag: '🇧🇿' },
    { name: 'ترينيداد وتوباغو', code: 'TT', flag: '🇹🇹' },
    { name: 'باربادوس', code: 'BB', flag: '🇧🇧' },
    { name: 'جزر الكايمان', code: 'KY', flag: '🇰🇾' },
    { name: 'جزر العذراء البريطانية', code: 'VG', flag: '🇻🇬' },
    { name: 'جزر العذراء الأمريكية', code: 'VI', flag: '🇻🇮' },
    { name: 'لوكسمبرج', code: 'LU', flag: '🇱🇺' },
    { name: 'مالطا', code: 'MT', flag: '🇲🇹' },
    { name: 'قبرص', code: 'CY', flag: '🇨🇾' },
    { name: 'كرواتيا', code: 'HR', flag: '🇭🇷' },
    { name: 'سلوفينيا', code: 'SI', flag: '🇸🇮' },
    { name: 'سلوفاكيا', code: 'SK', flag: '🇸🇰' },
    { name: 'بلغاريا', code: 'BG', flag: '🇧🇬' },
    { name: 'أوكرانيا', code: 'UA', flag: '🇺🇦' },
    { name: 'روسيا', code: 'RU', flag: '🇷🇺' },
    { name: 'كازاخستان', code: 'KZ', flag: '🇰🇿' },
    { name: 'أوزبكستان', code: 'UZ', flag: '🇺🇿' },
    { name: 'تاجيكستان', code: 'TJ', flag: '🇹🇯' },
    { name: 'قيرغيزستان', code: 'KG', flag: '🇰🇬' },
    { name: 'تركمانستان', code: 'TM', flag: '🇹🇲' },
    { name: 'أفغانستان', code: 'AF', flag: '🇦🇫' },
    { name: 'نيبال', code: 'NP', flag: '🇳🇵' },
    { name: 'سريلانكا', code: 'LK', flag: '🇱🇰' },
    { name: 'المالديف', code: 'MV', flag: '🇲🇻' },
    { name: 'بوتان', code: 'BT', flag: '🇧🇹' },
    { name: 'كمبوديا', code: 'KH', flag: '🇰🇭' },
    { name: 'لاوس', code: 'LA', flag: '🇱🇦' },
    { name: 'ميانمار', code: 'MM', flag: '🇲🇲' },
    { name: 'بنما', code: 'PA', flag: '🇵🇦' },
];

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    renderCountriesGrid();
    initFAQ();
    initCountrySearch();
    initScrollAnimations();
});

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navMenu.classList.remove('active');
        }
    });
}

// ============================================
// COUNTRIES GRID
// ============================================

function renderCountriesGrid() {
    const countriesGrid = document.getElementById('countriesGrid');
    if (!countriesGrid) return;

    countriesGrid.innerHTML = COUNTRIES.map((country, index) => `
        <div class="country-item" style="animation-delay: ${index * 0.05}s" data-country="${country.name}">
            <div class="country-flag">${country.flag}</div>
            <div class="country-name">${country.name}</div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.country-item').forEach(item => {
        item.addEventListener('click', function() {
            const countryName = this.dataset.country;
            showCountryDetails(countryName);
        });
    });
}

function showCountryDetails(countryName) {
    alert(`لقد اخترت: ${countryName}\n\nسيتم نقلك إلى صفحة الباقات المتاحة لهذه الدولة.`);
    // In production, navigate to pricing page for this country
}

// ============================================
// COUNTRY SEARCH
// ============================================

function initCountrySearch() {
    const searchInput = document.getElementById('countrySearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const countryItems = document.querySelectorAll('.country-item');

        countryItems.forEach(item => {
            const countryName = item.dataset.country.toLowerCase();
            if (countryName.includes(searchTerm)) {
                item.style.display = '';
                item.style.animation = 'fadeIn 0.3s ease-out';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// ============================================
// FAQ ACCORDION - ENHANCED
// ============================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length === 0) {
        console.warn('No FAQ items found');
        return;
    }
    
    console.log(`Initializing ${faqItems.length} FAQ items`);

    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (!question || !answer) {
            console.warn(`FAQ item ${index} missing question or answer`);
            return;
        }

        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                console.log(`FAQ item ${index} opened`);
            } else {
                item.classList.remove('active');
                console.log(`FAQ item ${index} closed`);
            }
        });
    });
    
    console.log('FAQ initialization complete');
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const elements = document.querySelectorAll('[class*="card"], [class*="grid"]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    elements.forEach(element => observer.observe(element));
}

// ============================================
// BUTTON INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Hero buttons
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            // Handle button actions
            if (this.textContent.includes('اشترِ')) {
                handlePurchaseClick();
            } else if (this.textContent.includes('اختر')) {
                handleCountrySelection();
            }
        });
    });
});

function handlePurchaseClick() {
    console.log('Purchase button clicked');
    // Scroll to plans section
    const plansSection = document.getElementById('plans');
    if (plansSection) {
        plansSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleCountrySelection() {
    console.log('Country selection clicked');
    const countriesSection = document.getElementById('countries');
    if (countriesSection) {
        countriesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// SCROLL TO TOP
// ============================================

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show scroll to top button when scrolling
window.addEventListener('scroll', function() {
    const scrollTopBtn = document.querySelector('.scroll-to-top');
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
});

// ============================================
// UTILITIES
// ============================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add active state to navbar links on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLink.style.color = 'var(--color-secondary)';
            } else {
                navLink.style.color = 'var(--color-text)';
            }
        }
    });
});

// Performance optimization - lazy load images if needed
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🌍 Welcome to eSIM Store 🚀', 'font-size: 20px; color: #00D4FF; font-weight: bold;');
console.log('%cPremium eSIM Service for 120+ Countries\nDesigned with ❤️ for the Arab World', 'font-size: 14px; color: #6D28D9;');
console.log('%cMade with modern web technologies', 'color: #10B981; font-weight: bold;');