// Advanced Testimonials System with Complex Algorithms
class TestimonialsEngine {
    constructor() {
        this.state = {
            currentIndex: 0,
            isAnimating: false,
            isPaused: false,
            touchStart: 0,
            touchEnd: 0,
            velocity: 0,
            momentum: 0
        };
        this.config = {
            autoPlayDelay: 5000,
            transitionDuration: 800,
            swipeThreshold: 50,
            momentumMultiplier: 0.3,
            easingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        };
        this.testimonials = this.generateTestimonials();
        this.autoPlayTimer = null;
        this.viewportObserver = null;
        this.animationFrame = null;
        this.init();
    }

    generateTestimonials() {
        return [
            {
                id: 1,
                text: "خدمة رائعة! استخدمت eSIM V Pro في 15 دولة مختلفة والسرعة كانت ممتازة في كل مكان. التفعيل كان فوريًا والدعم الفني متاح 24/7.",
                author: "محمد العلي",
                location: "الإمارات العربية المتحدة",
                avatar: "م",
                rating: 5,
                verified: true
            },
            {
                id: 2,
                text: "أفضل استثمار للمسافرين! وفرت الكثير من المال مقارنة بالتجوال الدولي. الإنترنت غير محدود حقًا وسرعة 5G مذهلة.",
                author: "سارة أحمد",
                location: "المملكة العربية السعودية",
                avatar: "س",
                rating: 5,
                verified: true
            },
            {
                id: 3,
                text: "استخدمته في رحلتي إلى أوروبا وآسيا. التغطية ممتازة في جميع الدول والتفعيل كان سهل جدًا. أنصح به بشدة!",
                author: "عمر الخطيب",
                location: "قطر",
                avatar: "ع",
                rating: 5,
                verified: true
            },
            {
                id: 4,
                text: "خدمة احترافية بكل المقاييس. الرقم البريطاني المجاني ميزة رائعة والمكالمات واضحة جدًا. سأجدد الاشتراك بالتأكيد.",
                author: "ليلى حسن",
                location: "الكويت",
                avatar: "ل",
                rating: 5,
                verified: true
            },
            {
                id: 5,
                text: "تجربة سلسة من البداية للنهاية. الدفع آمن والتفعيل فوري. استخدمته في أمريكا وكندا بدون أي مشاكل.",
                author: "خالد المنصور",
                location: "البحرين",
                avatar: "خ",
                rating: 5,
                verified: true
            },
            {
                id: 6,
                text: "الأفضل على الإطلاق! جربت عدة خدمات eSIM لكن هذه الأفضل من حيث السرعة والتغطية والسعر. خدمة العملاء ممتازة.",
                author: "فاطمة الزهراء",
                location: "عمان",
                avatar: "ف",
                rating: 5,
                verified: true
            }
        ];
    }

    init() {
        this.render();
        this.attachEventListeners();
        this.startAutoPlay();
        this.initIntersectionObserver();
        this.preloadNextCards();
    }

    render() {
        const section = document.createElement('section');
        section.className = 'testimonials-pro';
        section.id = 'testimonials';
        
        section.innerHTML = `
            <div class="container">
                <div class="testimonials-header">
                    <span class="testimonials-badge">⭐ آراء العملاء</span>
                    <h2 class="testimonials-title">ماذا يقول عملاؤنا؟</h2>
                    <p class="testimonials-subtitle">آلاف العملاء حول العالم يثقون بخدماتنا</p>
                </div>
                
                <div class="testimonials-carousel">
                    <div class="testimonials-track" id="testimonialsTrack">
                        ${this.renderCards()}
                    </div>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" id="prevBtn" aria-label="السابق">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <div class="carousel-indicators" id="indicators">
                        ${this.renderIndicators()}
                    </div>
                    <button class="carousel-btn" id="nextBtn" aria-label="التالي">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                </div>
                
                <div class="testimonials-stats">
                    <div class="stat-box">
                        <span class="stat-number" data-target="15000">0</span>
                        <span class="stat-label">عميل سعيد</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-number" data-target="89">0</span>
                        <span class="stat-label">دولة مدعومة</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-number">4.9</span>
                        <span class="stat-label">تقييم العملاء</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-number">99.9%</span>
                        <span class="stat-label">نسبة الرضا</span>
                    </div>
                </div>
            </div>
        `;
        
        const footer = document.querySelector('.footer');
        footer.parentNode.insertBefore(section, footer);
    }

    renderCards() {
        return this.testimonials.map(testimonial => `
            <div class="testimonial-card" data-id="${testimonial.id}">
                <div class="testimonial-quote">"</div>
                <div class="testimonial-content">
                    <div class="testimonial-rating">
                        ${this.renderStars(testimonial.rating)}
                    </div>
                    <p class="testimonial-text">${testimonial.text}</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">${testimonial.avatar}</div>
                        <div class="author-info">
                            <h4>${testimonial.author}</h4>
                            <div class="author-location">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${testimonial.location}</span>
                            </div>
                            ${testimonial.verified ? '<span class="verified-badge"><i class="fas fa-check-circle"></i> عميل موثق</span>' : ''}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderStars(rating) {
        return Array(rating).fill('<span class="star">★</span>').join('');
    }

    renderIndicators() {
        return this.testimonials.map((_, index) => 
            `<div class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
        ).join('');
    }

    attachEventListeners() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const track = document.getElementById('testimonialsTrack');
        const indicators = document.querySelectorAll('.indicator');
        const carousel = document.querySelector('.testimonials-carousel');

        // Advanced button navigation with debouncing
        const navigateWithDebounce = this.debounce((direction) => {
            this.navigate(direction);
        }, 100);

        prevBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            this.triggerButtonEffect(prevBtn);
            navigateWithDebounce('prev');
        });

        nextBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            this.triggerButtonEffect(nextBtn);
            navigateWithDebounce('next');
        });

        // Indicator navigation with smooth transition
        indicators.forEach(indicator => {
            indicator.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                if (index !== this.state.currentIndex) {
                    this.goToSlide(index);
                }
            });
        });

        // Advanced touch handling with momentum
        let touchStartTime = 0;
        track?.addEventListener('touchstart', (e) => {
            this.state.touchStart = e.changedTouches[0].screenX;
            touchStartTime = Date.now();
            this.state.isPaused = true;
            this.pauseAutoPlay();
        }, { passive: true });

        track?.addEventListener('touchmove', (e) => {
            const currentX = e.changedTouches[0].screenX;
            const diff = currentX - this.state.touchStart;
            this.state.velocity = diff / (Date.now() - touchStartTime);
        }, { passive: true });

        track?.addEventListener('touchend', (e) => {
            this.state.touchEnd = e.changedTouches[0].screenX;
            this.handleAdvancedSwipe();
            this.state.isPaused = false;
            this.startAutoPlay();
        });

        // Keyboard navigation with animation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.navigate('next');
            }
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.navigate('prev');
            }
        });

        // Smart pause/resume on hover
        carousel?.addEventListener('mouseenter', () => {
            this.state.isPaused = true;
            this.pauseAutoPlay();
        });

        carousel?.addEventListener('mouseleave', () => {
            this.state.isPaused = false;
            this.startAutoPlay();
        });

        // Visibility API for performance
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAutoPlay();
            } else if (!this.state.isPaused) {
                this.startAutoPlay();
            }
        });
    }

    navigate(direction) {
        if (this.state.isAnimating) return;
        
        this.state.isAnimating = true;
        
        // Calculate next index with circular navigation
        const nextIndex = this.calculateNextIndex(direction);
        
        // Animate transition
        this.animateTransition(this.state.currentIndex, nextIndex, direction);
        
        this.state.currentIndex = nextIndex;
        this.updateCarousel();
        
        // Reset animation lock with RAF
        this.animationFrame = requestAnimationFrame(() => {
            setTimeout(() => {
                this.state.isAnimating = false;
                cancelAnimationFrame(this.animationFrame);
            }, this.config.transitionDuration);
        });
    }

    goToSlide(index) {
        if (this.state.isAnimating || index === this.state.currentIndex) return;
        
        this.state.isAnimating = true;
        
        const direction = index > this.state.currentIndex ? 'next' : 'prev';
        this.animateTransition(this.state.currentIndex, index, direction);
        
        this.state.currentIndex = index;
        this.updateCarousel();
        
        this.animationFrame = requestAnimationFrame(() => {
            setTimeout(() => {
                this.state.isAnimating = false;
                cancelAnimationFrame(this.animationFrame);
            }, this.config.transitionDuration);
        });
    }

    updateCarousel() {
        const track = document.getElementById('testimonialsTrack');
        if (!track) return;
        
        const cards = track.querySelectorAll('.testimonial-card');
        if (cards.length === 0) return;
        
        // Calculate precise offset with momentum
        const cardWidth = cards[0].offsetWidth;
        const gap = 40;
        const baseOffset = -this.state.currentIndex * (cardWidth + gap);
        const momentumOffset = this.state.momentum * this.config.momentumMultiplier;
        const finalOffset = baseOffset + momentumOffset;
        
        // Apply transform with hardware acceleration
        track.style.transition = `transform ${this.config.transitionDuration}ms ${this.config.easingFunction}`;
        track.style.transform = `translate3d(${finalOffset}px, 0, 0)`;
        
        // Reset momentum
        this.state.momentum = 0;
        
        this.updateIndicators();
        this.applyCardEffects();
    }

    updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            const isActive = index === this.state.currentIndex;
            indicator.classList.toggle('active', isActive);
            indicator.setAttribute('aria-current', isActive ? 'true' : 'false');
        });
    }

    applyCardEffects() {
        const cards = document.querySelectorAll('.testimonial-card');
        cards.forEach((card, index) => {
            const distance = Math.abs(index - this.state.currentIndex);
            const isActive = index === this.state.currentIndex;
            
            // Calculate dynamic opacity and scale
            const opacity = isActive ? 1 : Math.max(0.3, 1 - (distance * 0.3));
            const scale = isActive ? 1 : Math.max(0.8, 1 - (distance * 0.1));
            const translateY = isActive ? 0 : distance * 15;
            const blur = isActive ? 0 : Math.min(distance * 2, 5);
            
            // Apply effects with RAF for smooth animation
            requestAnimationFrame(() => {
                card.style.transition = `all ${this.config.transitionDuration}ms ${this.config.easingFunction}`;
                card.style.opacity = opacity;
                card.style.transform = `scale(${scale}) translateY(${translateY}px) translateZ(0)`;
                card.style.filter = `blur(${blur}px)`;
                card.style.zIndex = isActive ? 10 : 1;
            });
        });
    }

    handleAdvancedSwipe() {
        const diff = this.state.touchStart - this.state.touchEnd;
        const absDiff = Math.abs(diff);
        
        // Calculate momentum based on velocity
        this.state.momentum = this.state.velocity * 100;
        
        // Determine swipe direction with threshold
        if (absDiff > this.config.swipeThreshold) {
            const direction = diff > 0 ? 'next' : 'prev';
            this.navigate(direction);
        } else if (Math.abs(this.state.velocity) > 0.5) {
            // Fast swipe detection
            const direction = this.state.velocity < 0 ? 'next' : 'prev';
            this.navigate(direction);
        }
    }

    startAutoPlay() {
        this.pauseAutoPlay();
        if (!this.state.isPaused) {
            this.autoPlayTimer = setTimeout(() => {
                if (!this.state.isAnimating && !this.state.isPaused) {
                    this.navigate('next');
                    this.startAutoPlay();
                }
            }, this.config.autoPlayDelay);
        }
    }

    pauseAutoPlay() {
        if (this.autoPlayTimer) {
            clearTimeout(this.autoPlayTimer);
            this.autoPlayTimer = null;
        }
    }

    initIntersectionObserver() {
        const options = {
            threshold: 0.3,
            rootMargin: '0px'
        };

        this.viewportObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateStats();
                    this.viewportObserver.unobserve(entry.target);
                }
            });
        }, options);

        const section = document.querySelector('.testimonials-pro');
        if (section) {
            this.viewportObserver.observe(section);
        }
    }

    animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number[data-target]');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.dataset.target);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current).toLocaleString('ar-EG');
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target.toLocaleString('ar-EG');
                }
            };
            
            updateCounter();
        });
    }

    preloadNextCards() {
        const cards = document.querySelectorAll('.testimonial-card');
        cards.forEach((card, index) => {
            const distance = Math.abs(index - this.state.currentIndex);
            if (distance <= 2) {
                card.style.willChange = 'transform, opacity, filter';
            } else {
                card.style.willChange = 'auto';
            }
        });
    }

    calculateNextIndex(direction) {
        const total = this.testimonials.length;
        if (direction === 'next') {
            return (this.state.currentIndex + 1) % total;
        } else {
            return (this.state.currentIndex - 1 + total) % total;
        }
    }

    animateTransition(fromIndex, toIndex, direction) {
        const cards = document.querySelectorAll('.testimonial-card');
        const fromCard = cards[fromIndex];
        const toCard = cards[toIndex];
        
        if (fromCard && toCard) {
            // Animate out
            fromCard.style.transition = `all ${this.config.transitionDuration * 0.6}ms ease-out`;
            fromCard.style.opacity = '0.3';
            fromCard.style.transform = `scale(0.8) translateX(${direction === 'next' ? '-50px' : '50px'})`;
            
            // Animate in
            setTimeout(() => {
                toCard.style.transition = `all ${this.config.transitionDuration * 0.8}ms ease-in-out`;
                toCard.style.opacity = '1';
                toCard.style.transform = 'scale(1) translateX(0)';
            }, this.config.transitionDuration * 0.3);
        }
    }

    triggerButtonEffect(button) {
        button.style.transform = 'scale(0.9)';
        button.style.boxShadow = '0 5px 15px rgba(230,0,0,0.3)';
        
        setTimeout(() => {
            button.style.transform = '';
            button.style.boxShadow = '';
        }, 200);
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new TestimonialsEngine();
    });
} else {
    new TestimonialsEngine();
}
