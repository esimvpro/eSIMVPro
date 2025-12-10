class TestimonialsCarousel {
    constructor() {
        this.testimonials = [
            { name: "عبدالله المزروعي", country: "الإمارات", avatar: "ع", stars: 5, text: "والله خدمة روعة! استخدمتها في الإمارات والسرعة خيالية. التفعيل فوري والدعم موجود 24/7. الرقم البريطاني شغال معاي بدون مشاكل. ما قصروا أبدًا!" },
            { name: "نورة القحطاني", country: "السعودية", avatar: "ن", stars: 5, text: "صراحة أحسن خدمة جربتها في السعودية! النت مفتوح وسرعة 5G خرافية. وفرت فلوس كثير ومافي قيود. الرقم البريطاني يشتغل عندنا عادي. أنصح فيها بقوة!" },
            { name: "حمد الكواري", country: "قطر", avatar: "ح", stars: 4, text: "استخدمتها في قطر والتغطية ممتازة في كل مكان. السرعة قوية والتفعيل سهل واضح. الرقم الدولي ميزة حلوة للتواصل. بصراحة تستاهل كل ريال!" },
            { name: "مريم العتيبي", country: "الكويت", avatar: "م", stars: 5, text: "صج خدمة محترفة! استخدمها في الكويت والنت سريع مرة. الرقم البريطاني مجاني والمكالمات واضحة. باجدد الاشتراك أكيد وبنصح كل ربعي فيها!" },
            { name: "يوسف الدوسري", country: "البحرين", avatar: "ي", stars: 5, text: "تجربة ممتازة في البحرين! الدفع آمن والتفعيل فوري. النت يشتغل في كل مكان بسرعة عالية. الرقم الدولي مفيد للشغل. صدق خدمة ممتازة!" },
            { name: "سلطان البلوشي", country: "عمان", avatar: "س", stars: 4, text: "بصراحة الأفضل في عمان! جربت خدمات ثانية بس هذي الأحسن من ناحية السرعة والتغطية. النت مفتوح والسعر معقول. خدمة العملاء متعاونين!" },
            { name: "حسين الربيعي", country: "العراق", avatar: "ح", stars: 5, text: "والله خدمة جبارة! استعملتها بالعراق وكانت زينة جداً. النت ماكو مشكلة أبداً والسرعة خيال. الرقم البريطاني يشتغل عدل. صدك أنصح بيها، تستاهل كل فلس!" },
            { name: "ياسمين التريكي", country: "تونس", avatar: "ي", stars: 4, text: "برشا خدمة باهية في تونس! الكونيكسيون ياسر قوي والتفعيل سهل. النت يخدم في كل بلاصة وما فماش مشاكل. نورمال نجدد الاشتراك، خدمة توب!" },
            { name: "Mustafa Öztürk", country: "تركيا", avatar: "M", stars: 5, text: "Çok güzel hizmet! استخدمتها في تركيا والسرعة رائعة جداً. التفعيل سريع والدعم الفني ممتاز. الرقم الدولي مفيد للأعمال. بصراحة أفضل eSIM جربتها!" }
        ];
        
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.createHTML();
        this.startAutoplay();
    }

    createHTML() {
        const section = document.createElement('section');
        section.className = 'testimonials-section';
        section.innerHTML = `
            <div class="container">
                <div class="testimonials-header">
                    <span class="badge"><i class="fas fa-users" style="color: #FFD700;"></i> يثق بنا 15,000+ عميل</span>
                    <h2 class="title">ماذا يقول عملاؤنا</h2>
                    <p class="subtitle">تجارب واقعية من مسافرين في 89 دولة</p>
                    <div style="display: flex; justify-content: center; gap: 30px; margin-top: 15px; flex-wrap: wrap;">
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.95rem; color: #666;">
                            <i class="fas fa-star" style="color: #FFD700; font-size: 1.1rem;"></i>
                            <span style="font-weight: 700; color: #E60000; font-size: 1.1rem;">4.9</span>
                            <span style="color: #999;">/5.0</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.95rem; color: #666;">
                            <i class="fas fa-comment-dots" style="color: #2196F3; font-size: 1.1rem;"></i>
                            <span style="font-weight: 700; color: #1a1a1a;">8,500+</span>
                            <span>تقييم</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.95rem; color: #666;">
                            <i class="fas fa-thumbs-up" style="color: #4CAF50; font-size: 1.1rem;"></i>
                            <span style="font-weight: 700; color: #1a1a1a;">98.7%</span>
                            <span>ينصحون</span>
                        </div>
                    </div>
                </div>
                
                <div class="testimonial-box">
                    <div class="quote-icon"><img src="IMAGES/ChatGPT Image 6 déc. 2025, 12_42_13.png" alt="Logo"></div>
                    <div class="stars"></div>
                    <p class="testimonial-text"></p>
                    <div class="author-info">
                        <div class="avatar"></div>
                        <div class="details">
                            <h4 class="author-name"></h4>
                            <p class="author-location"><i class="fas fa-map-marker-alt"></i> <span></span></p>
                            <span class="verified-badge"><i class="fas fa-check-circle"></i> عميل موثق</span>
                        </div>
                    </div>
                </div>
                
                <div class="add-review-section" id="addReviewSection" style="display: none;">
                    <button class="btn-add-review" id="btnAddReview">
                        <i class="fas fa-star"></i> أضف تقييمك
                    </button>
                </div>
                

            </div>
        `;
        
        document.querySelector('.footer').insertAdjacentElement('beforebegin', section);
        this.updateContent();
        this.checkUserLogin();
    }
    
    checkUserLogin() {
        const userData = localStorage.getItem('user');
        if (userData) {
            const user = JSON.parse(userData);
            const section = document.getElementById('addReviewSection');
            if (section) {
                section.style.display = 'block';
                document.getElementById('btnAddReview').addEventListener('click', () => this.openReviewModal(user));
            }
        }
    }
    
    openReviewModal(user) {
        const modal = document.createElement('div');
        modal.className = 'review-modal';
        modal.innerHTML = `
            <div class="review-modal-content">
                <button class="review-close" onclick="this.closest('.review-modal').remove()">&times;</button>
                <div style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-comment-dots" style="font-size: 3rem; color: #E60000; margin-bottom: 15px;"></i>
                    <h3>أضف تقييمك</h3>
                </div>
                <form id="reviewForm">
                    <div class="review-user-info">
                        <div class="review-avatar">${user.name ? user.name.charAt(0) : 'م'}</div>
                        <div>
                            <h4>${user.name || 'مستخدم'}</h4>
                            <p><i class="fas fa-map-marker-alt"></i> ${user.country || 'الدولة'}</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label><i class="fas fa-star-half-alt"></i> التقييم</label>
                        <div class="rating-input">
                            <i class="fas fa-star star-input" data-rating="1"></i>
                            <i class="fas fa-star star-input" data-rating="2"></i>
                            <i class="fas fa-star star-input" data-rating="3"></i>
                            <i class="fas fa-star star-input" data-rating="4"></i>
                            <i class="fas fa-star star-input" data-rating="5"></i>
                        </div>
                        <input type="hidden" id="reviewRating" value="5">
                    </div>
                    <div class="form-group">
                        <label><i class="fas fa-pen-fancy"></i> تقييمك</label>
                        <textarea id="reviewText" rows="5" placeholder="شاركنا تجربتك مع eSIM V Pro..." required></textarea>
                    </div>
                    <button type="submit" class="btn-submit-review">
                        <i class="fas fa-check-circle"></i> إرسال التقييم
                    </button>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
        
        const stars = modal.querySelectorAll('.star-input');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = star.dataset.rating;
                document.getElementById('reviewRating').value = rating;
                stars.forEach((s, i) => {
                    s.style.color = i < rating ? '#FFD700' : '#666';
                });
            });
        });
        
        modal.querySelector('#reviewForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const text = document.getElementById('reviewText').value;
            
            this.testimonials.push({
                name: user.name || 'مستخدم',
                country: user.country || 'الدولة',
                avatar: user.name ? user.name.charAt(0) : 'م',
                text: text
            });
            
            modal.remove();
            alert('شكراً لك! تم إضافة تقييمك بنجاح ✅');
        });
    }

    updateContent() {
        const current = this.testimonials[this.currentIndex];
        const box = document.querySelector('.testimonial-box');
        
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            document.querySelector('.testimonial-text').textContent = current.text;
            document.querySelector('.avatar').textContent = current.avatar;
            document.querySelector('.author-name').textContent = current.name;
            document.querySelector('.author-location span').textContent = current.country;
            
            const starsContainer = document.querySelector('.stars');
            starsContainer.innerHTML = '';
            for (let i = 0; i < 5; i++) {
                const star = document.createElement('i');
                star.className = i < current.stars ? 'fas fa-star' : 'far fa-star';
                starsContainer.appendChild(star);
            }
            
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, 300);
    }

    startAutoplay() {
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
            this.updateContent();
        }, 7000);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new TestimonialsCarousel());
} else {
    new TestimonialsCarousel();
}
