// Advanced Testimonials System with Real-time Features
class TestimonialsAdvanced {
    constructor() {
        this.reviews = [
            {
                name: 'محمد العتيبي',
                role: 'مسافر دائم',
                avatar: 'م',
                rating: 5,
                text: 'استخدمتها في رحلة عمل لأوروبا وآسيا. الاتصال كان ممتاز في كل مكان، والسعر أوفر بكثير من الشرائح التقليدية. أنصح بها بشدة!',
                verified: true,
                date: '2025-01-15'
            },
            {
                name: 'فاطمة الشمري',
                role: 'طالبة في بريطانيا',
                avatar: 'ف',
                rating: 5,
                text: 'كطالبة في بريطانيا، هذه الخدمة وفرت علي الكثير. الإنترنت سريع جداً والرقم البريطاني ساعدني في التواصل المحلي. خدمة رائعة!',
                verified: true,
                date: '2025-01-12'
            },
            {
                name: 'عبدالرحمن القحطاني',
                role: 'مصور محترف',
                avatar: 'ع',
                rating: 5,
                text: 'كمصور أسافر كثيراً، هذه الخدمة غيرت حياتي! استخدمتها في 12 دولة والتغطية كانت ممتازة في كل مكان. التفعيل سهل والسعر معقول جداً.',
                verified: true,
                date: '2025-01-10'
            },
            {
                name: 'سارة المطيري',
                role: 'رائدة أعمال',
                avatar: 'س',
                rating: 5,
                text: 'أسافر كثيراً للمؤتمرات والاجتماعات. هذه الخدمة وفرت علي الوقت والمال. الاتصال مستقر والدعم الفني ممتاز. أنصح بها لكل رجال الأعمال.',
                verified: true,
                date: '2025-01-08'
            },
            {
                name: 'خالد الدوسري',
                role: 'مهندس برمجيات',
                avatar: 'خ',
                rating: 5,
                text: 'كمهندس أعمل عن بعد، أحتاج إنترنت سريع ومستقر. هذه الخدمة فاقت توقعاتي! السرعة ممتازة والتغطية واسعة. استخدمتها في 8 دول بدون مشاكل.',
                verified: true,
                date: '2025-01-05'
            },
            {
                name: 'نورة الحربي',
                role: 'مدونة سفر',
                avatar: 'ن',
                rating: 5,
                text: 'كمدونة سفر، أحتاج إنترنت دائم لنشر المحتوى. هذه الخدمة مثالية! التفعيل سريع والسعر ممتاز. استخدمتها في 15 دولة والتجربة كانت رائعة.',
                verified: true,
                date: '2025-01-03'
            }
        ];
        
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        this.init();
    }

    init() {
        this.renderReviews();
        this.startAutoPlay();
        this.setupEventListeners();
        this.animateStats();
        this.setupShowMore();
    }

    renderReviews() {
        const grid = document.querySelector('.testimonials-grid-advanced');
        if (!grid) return;

        grid.innerHTML = this.reviews.map((review, index) => `
            <div class="testimonial-card-advanced" data-index="${index}" style="animation: fadeInUp 0.6s ease ${index * 0.1}s both;">
                <div class="testimonial-header-advanced">
                    <div class="testimonial-avatar-advanced">${review.avatar}</div>
                    <div class="testimonial-info-advanced">
                        <h4>${review.name}</h4>
                        <span class="testimonial-role-advanced">${review.role}</span>
                    </div>
                </div>
                <div class="testimonial-rating-advanced">
                    ${'★'.repeat(review.rating)}
                </div>
                <p class="testimonial-text-advanced">${review.text}</p>
                ${review.verified ? '<div style="margin-top: 15px; color: #4CAF50; font-size: 0.9rem; font-weight: 600;"><i class="fas fa-check-circle"></i> عميل موثق</div>' : ''}
                <div class="testimonial-footer-advanced"></div>
            </div>
        `).join('');
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.rotateReviews();
        }, 5000);
    }

    rotateReviews() {
        const cards = document.querySelectorAll('.testimonial-card-advanced');
        if (cards.length === 0) return;

        cards.forEach((card, index) => {
            card.style.animation = 'fadeOut 0.5s ease';
            setTimeout(() => {
                card.style.animation = 'fadeInUp 0.6s ease';
            }, 500);
        });
    }

    setupEventListeners() {
        const cards = document.querySelectorAll('.testimonial-card-advanced');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                clearInterval(this.autoPlayInterval);
            });
            
            card.addEventListener('mouseleave', () => {
                this.startAutoPlay();
            });
        });
    }

    animateStats() {
        const stats = [
            { element: '.stat-number-advanced:nth-child(1)', target: 5000, suffix: '+' },
            { element: '.stat-number-advanced:nth-child(2)', target: 4.9, suffix: '/5' },
            { element: '.stat-number-advanced:nth-child(3)', target: 98, suffix: '%' }
        ];

        stats.forEach(stat => {
            const element = document.querySelector(stat.element);
            if (!element) return;

            let current = 0;
            const increment = stat.target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.target) {
                    current = stat.target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + stat.suffix;
            }, 20);
        });
    }

    addReview(reviewData) {
        this.reviews.unshift(reviewData);
        this.renderReviews();
        this.setupEventListeners();
    }

    setupShowMore() {
        const grid = document.querySelector('.testimonials-grid-advanced');
        const container = grid.parentElement;
        
        if (!grid || !container) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'testimonials-slider-container';
        container.insertBefore(wrapper, grid);
        wrapper.appendChild(grid);

        const prevBtn = document.createElement('button');
        prevBtn.className = 'btn-scroll prev';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn-scroll next';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        
        wrapper.appendChild(prevBtn);
        wrapper.appendChild(nextBtn);

        const scrollAmount = grid.offsetWidth;

        prevBtn.addEventListener('click', () => {
            grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        grid.addEventListener('scroll', () => {
            nextBtn.disabled = grid.scrollLeft <= 0;
            prevBtn.disabled = grid.scrollLeft >= grid.scrollWidth - grid.offsetWidth - 10;
        });

        nextBtn.disabled = grid.scrollLeft <= 0;
    }
}

// Review Modal Handler
class ReviewModal {
    constructor() {
        this.modal = document.getElementById('reviewModalAdvanced');
        this.form = document.getElementById('reviewFormAdvanced');
        this.rating = 5;
        this.init();
    }

    init() {
        this.setupStarRating();
        this.setupFormSubmit();
    }

    setupStarRating() {
        const stars = document.querySelectorAll('.star-rating-advanced span');
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                this.rating = index + 1;
                this.updateStars(index);
            });
        });
    }

    updateStars(index) {
        const stars = document.querySelectorAll('.star-rating-advanced span');
        stars.forEach((star, i) => {
            star.style.color = i <= index ? '#FFD700' : '#ddd';
        });
    }

    setupFormSubmit() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(this.form);
            const reviewData = {
                name: formData.get('name'),
                role: formData.get('role'),
                avatar: formData.get('name').charAt(0),
                rating: this.rating,
                text: formData.get('review'),
                verified: false,
                date: new Date().toISOString().split('T')[0]
            };

            this.submitReview(reviewData);
        });
    }

    submitReview(data) {
        // Simulate API call
        setTimeout(() => {
            this.showSuccess();
            this.form.reset();
            this.rating = 5;
            this.updateStars(4);
        }, 1000);
    }

    showSuccess() {
        const successMsg = document.createElement('div');
        successMsg.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #4CAF50, #45a049);
            color: white;
            padding: 20px 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(76, 175, 80, 0.4);
            z-index: 10000;
            animation: slideInRight 0.5s ease;
        `;
        successMsg.innerHTML = '<i class="fas fa-check-circle"></i> شكراً لك! تم إرسال تقييمك بنجاح';
        document.body.appendChild(successMsg);

        setTimeout(() => {
            successMsg.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => successMsg.remove(), 500);
        }, 3000);
    }

    open() {
        if (this.modal) {
            this.modal.style.display = 'flex';
        }
    }

    close() {
        if (this.modal) {
            this.modal.style.display = 'none';
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = new TestimonialsAdvanced();
    const reviewModal = new ReviewModal();

    // Global functions for modal
    window.openReviewModal = () => reviewModal.open();
    window.closeReviewModal = () => reviewModal.close();
});

// CSS Animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0.5;
        }
    }

    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
