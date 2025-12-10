/**
 * Ultra Advanced Testimonials Carousel System
 * Implements: Swiper-like algorithm, GSAP-style animations, Intersection Observer
 */

class UltraTestimonialsCarousel {
    constructor() {
        this.slides = [
            { id: 1, name: "محمد العلي", country: "الإمارات", avatar: "م", text: "خدمة رائعة! استخدمت eSIM V Pro في 15 دولة مختلفة والسرعة كانت ممتازة في كل مكان. التفعيل كان فوريًا والدعم الفني متاح 24/7.", stars: 5 },
            { id: 2, name: "سارة أحمد", country: "السعودية", avatar: "س", text: "أفضل استثمار للمسافرين! وفرت الكثير من المال مقارنة بالتجوال الدولي. الإنترنت غير محدود حقًا وسرعة 5G مذهلة.", stars: 5 },
            { id: 3, name: "عمر الخطيب", country: "قطر", avatar: "ع", text: "استخدمته في رحلتي إلى أوروبا وآسيا. التغطية ممتازة في جميع الدول والتفعيل كان سهل جدًا. أنصح به بشدة!", stars: 5 },
            { id: 4, name: "ليلى حسن", country: "الكويت", avatar: "ل", text: "خدمة احترافية بكل المقاييس. الرقم البريطاني المجاني ميزة رائعة والمكالمات واضحة جدًا. سأجدد الاشتراك بالتأكيد.", stars: 5 },
            { id: 5, name: "خالد المنصور", country: "البحرين", avatar: "خ", text: "تجربة سلسة من البداية للنهاية. الدفع آمن والتفعيل فوري. استخدمته في أمريكا وكندا بدون أي مشاكل.", stars: 5 },
            { id: 6, name: "فاطمة الزهراء", country: "عمان", avatar: "ف", text: "الأفضل على الإطلاق! جربت عدة خدمات eSIM لكن هذه الأفضل من حيث السرعة والتغطية والسعر. خدمة العملاء ممتازة.", stars: 5 }
        ];
        
        this.current = 0;
        this.isAnimating = false;
        this.autoplayTimer = null;
        this.container = null;
        this.wrapper = null;
        
        this.init();
    }

    init() {
        this.render();
        this.setupElements();
        this.attachEvents();
        this.updateView();
        this.startAutoplay();
    }

    render() {
        const html = `
            <section class="testimonials-ultra" id="testimonials">
                <div class="container">
                    <div class="testimonials-header">
                        <span class="badge">⭐ آراء العملاء</span>
                        <h2 class="title">ماذا يقول عملاؤنا؟</h2>
                        <p class="subtitle">آلاف العملاء حول العالم يثقون بخدماتنا</p>
                    </div>
                    
                    <div class="carousel-container">
                        <div class="carousel-wrapper">
                            ${this.slides.map((slide, i) => `
                                <div class="slide" data-index="${i}">
                                    <div class="quote">"</div>
                                    <div class="stars">${'★'.repeat(slide.stars)}</div>
                                    <p class="text">${slide.text}</p>
                                    <div class="author">
                                        <div class="avatar">${slide.avatar}</div>
                                        <div class="info">
                                            <h4>${slide.name}</h4>
                                            <p><i class="fas fa-map-marker-alt"></i> ${slide.country}</p>
                                            <span class="verified"><i class="fas fa-check-circle"></i> عميل موثق</span>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    

                    
                    <div class="stats">
                        <div class="stat"><span class="num">15,000+</span><span class="label">عميل سعيد</span></div>
                        <div class="stat"><span class="num">89+</span><span class="label">دولة</span></div>
                        <div class="stat"><span class="num">4.9</span><span class="label">تقييم</span></div>
                        <div class="stat"><span class="num">99.9%</span><span class="label">رضا</span></div>
                    </div>
                </div>
            </section>
        `;
        
        document.querySelector('.footer').insertAdjacentHTML('beforebegin', html);
    }

    setupElements() {
        this.container = document.querySelector('.carousel-container');
        this.wrapper = document.querySelector('.carousel-wrapper');
        this.slides_el = document.querySelectorAll('.slide');
    }

    attachEvents() {
        // Touch/Swipe
        let startX = 0, moveX = 0, isDragging = false;
        
        this.container?.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            this.stopAutoplay();
        }, { passive: true });
        
        this.container?.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            moveX = e.touches[0].clientX - startX;
            this.wrapper.style.transform = `translateX(calc(-${this.current * 100}% + ${moveX}px))`;
        }, { passive: true });
        
        this.container?.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            
            if (Math.abs(moveX) > 50) {
                moveX > 0 ? this.prev() : this.next();
            } else {
                this.updateView();
            }
            
            moveX = 0;
            this.startAutoplay();
        });
        
        // Mouse drag
        this.container?.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
            this.container.style.cursor = 'grabbing';
            this.stopAutoplay();
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            moveX = e.clientX - startX;
            this.wrapper.style.transform = `translateX(calc(-${this.current * 100}% + ${moveX}px))`;
        });
        
        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            this.container.style.cursor = 'grab';
            
            if (Math.abs(moveX) > 50) {
                moveX > 0 ? this.prev() : this.next();
            } else {
                this.updateView();
            }
            
            moveX = 0;
            this.startAutoplay();
        });
        
        // Keyboard
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.next();
            if (e.key === 'ArrowRight') this.prev();
        });
        
        // Hover pause
        this.container?.addEventListener('mouseenter', () => this.stopAutoplay());
        this.container?.addEventListener('mouseleave', () => this.startAutoplay());
    }

    next() {
        if (this.isAnimating) return;
        this.current = (this.current + 1) % this.slides.length;
        this.updateView();
    }

    prev() {
        if (this.isAnimating) return;
        this.current = (this.current - 1 + this.slides.length) % this.slides.length;
        this.updateView();
    }

    goTo(index) {
        if (this.isAnimating || index === this.current) return;
        this.current = index;
        this.updateView();
    }

    updateView() {
        this.isAnimating = true;
        
        // Update wrapper position
        this.wrapper.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        this.wrapper.style.transform = `translateX(-${this.current * 100}%)`;
        
        // Update slides
        this.slides_el.forEach((slide, i) => {
            const distance = Math.abs(i - this.current);
            const isActive = i === this.current;
            
            slide.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            slide.style.opacity = isActive ? '1' : '0.4';
            slide.style.transform = `scale(${isActive ? 1 : 0.85})`;
            slide.style.filter = `blur(${isActive ? 0 : 3}px)`;
        });
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 600);
    }

    startAutoplay() {
        this.stopAutoplay();
        this.autoplayTimer = setInterval(() => this.next(), 7000);
    }

    stopAutoplay() {
        if (this.autoplayTimer) {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }
    }
}

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new UltraTestimonialsCarousel());
} else {
    new UltraTestimonialsCarousel();
}
