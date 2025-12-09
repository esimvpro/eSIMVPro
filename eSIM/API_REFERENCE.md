# 📚 مرجع API - قسم التقييمات المتطور

## 🎯 نظرة عامة

هذا المستند يوفر مرجعاً كاملاً لجميع الدوال والخصائص المتاحة في نظام التقييمات.

## 📦 الفئات (Classes)

### TestimonialsAdvanced

الفئة الرئيسية لإدارة التقييمات.

#### Constructor
```javascript
const testimonials = new TestimonialsAdvanced();
```

#### الخصائص (Properties)

| الخاصية | النوع | الوصف |
|---------|------|-------|
| `reviews` | Array | مصفوفة التقييمات |
| `currentIndex` | Number | الفهرس الحالي |
| `autoPlayInterval` | Number | معرف الفاصل الزمني |

#### الدوال (Methods)

##### init()
```javascript
testimonials.init()
```
تهيئة النظام وبدء التشغيل.

**المعاملات**: لا يوجد  
**القيمة المرجعة**: void

---

##### renderReviews()
```javascript
testimonials.renderReviews()
```
عرض جميع التقييمات في الصفحة.

**المعاملات**: لا يوجد  
**القيمة المرجعة**: void

**مثال**:
```javascript
testimonials.renderReviews();
```

---

##### startAutoPlay()
```javascript
testimonials.startAutoPlay()
```
بدء الدوران التلقائي للتقييمات.

**المعاملات**: لا يوجد  
**القيمة المرجعة**: void

**الإعدادات الافتراضية**:
- الفاصل الزمني: 5000ms (5 ثوانٍ)

---

##### rotateReviews()
```javascript
testimonials.rotateReviews()
```
تدوير التقييمات مع تأثيرات الانتقال.

**المعاملات**: لا يوجد  
**القيمة المرجعة**: void

---

##### setupEventListeners()
```javascript
testimonials.setupEventListeners()
```
إعداد مستمعي الأحداث للتفاعل.

**المعاملات**: لا يوجد  
**القيمة المرجعة**: void

**الأحداث المدعومة**:
- `mouseenter`: إيقاف الدوران التلقائي
- `mouseleave`: استئناف الدوران التلقائي

---

##### animateStats()
```javascript
testimonials.animateStats()
```
تحريك الإحصائيات بأرقام متزايدة.

**المعاملات**: لا يوجد  
**القيمة المرجعة**: void

**الإحصائيات المتحركة**:
- عدد العملاء: 5000+
- التقييم: 4.9/5
- نسبة الرضا: 98%

---

##### addReview(reviewData)
```javascript
testimonials.addReview(reviewData)
```
إضافة تقييم جديد.

**المعاملات**:
| المعامل | النوع | مطلوب | الوصف |
|---------|------|-------|-------|
| `reviewData` | Object | نعم | بيانات التقييم |

**بنية reviewData**:
```javascript
{
    name: String,      // اسم العميل
    role: String,      // الوظيفة
    avatar: String,    // الحرف الأول
    rating: Number,    // التقييم (1-5)
    text: String,      // نص التقييم
    verified: Boolean, // حالة التحقق
    date: String       // التاريخ (YYYY-MM-DD)
}
```

**مثال**:
```javascript
testimonials.addReview({
    name: 'أحمد محمد',
    role: 'مهندس برمجيات',
    avatar: 'أ',
    rating: 5,
    text: 'خدمة ممتازة!',
    verified: true,
    date: '2025-01-20'
});
```

**القيمة المرجعة**: void

---

### ReviewModal

الفئة المسؤولة عن إدارة النافذة المنبثقة.

#### Constructor
```javascript
const reviewModal = new ReviewModal();
```

#### الخصائص (Properties)

| الخاصية | النوع | الوصف |
|---------|------|-------|
| `modal` | HTMLElement | عنصر النافذة المنبثقة |
| `form` | HTMLFormElement | نموذج التقييم |
| `rating` | Number | التقييم المحدد (افتراضي: 5) |

#### الدوال (Methods)

##### init()
```javascript
reviewModal.init()
```
تهيئة النافذة المنبثقة.

---

##### setupStarRating()
```javascript
reviewModal.setupStarRating()
```
إعداد نظام التقييم بالنجوم.

---

##### updateStars(index)
```javascript
reviewModal.updateStars(index)
```
تحديث عرض النجوم.

**المعاملات**:
| المعامل | النوع | مطلوب | الوصف |
|---------|------|-------|-------|
| `index` | Number | نعم | فهرس النجمة (0-4) |

---

##### setupFormSubmit()
```javascript
reviewModal.setupFormSubmit()
```
إعداد معالج إرسال النموذج.

---

##### submitReview(data)
```javascript
reviewModal.submitReview(data)
```
إرسال التقييم.

**المعاملات**:
| المعامل | النوع | مطلوب | الوصف |
|---------|------|-------|-------|
| `data` | Object | نعم | بيانات التقييم |

---

##### showSuccess()
```javascript
reviewModal.showSuccess()
```
عرض رسالة النجاح.

**المعاملات**: لا يوجد  
**القيمة المرجعة**: void

**المدة**: 3 ثوانٍ

---

##### open()
```javascript
reviewModal.open()
```
فتح النافذة المنبثقة.

---

##### close()
```javascript
reviewModal.close()
```
إغلاق النافذة المنبثقة.

---

## 🌐 الدوال العامة (Global Functions)

### openReviewModal()
```javascript
openReviewModal()
```
فتح نافذة التقييم.

**الاستخدام**:
```html
<button onclick="openReviewModal()">اترك تقييمك</button>
```

---

### closeReviewModal()
```javascript
closeReviewModal()
```
إغلاق نافذة التقييم.

**الاستخدام**:
```html
<button onclick="closeReviewModal()">إغلاق</button>
```

---

## 🎨 فئات CSS (CSS Classes)

### الحاويات الرئيسية

| الفئة | الوصف |
|------|-------|
| `.testimonials-advanced` | الحاوية الرئيسية |
| `.testimonials-header-advanced` | رأس القسم |
| `.testimonials-grid-advanced` | شبكة التقييمات |
| `.testimonials-stats-advanced` | حاوية الإحصائيات |

### عناصر التقييم

| الفئة | الوصف |
|------|-------|
| `.testimonial-card-advanced` | بطاقة التقييم |
| `.testimonial-header-advanced` | رأس البطاقة |
| `.testimonial-avatar-advanced` | الصورة الرمزية |
| `.testimonial-rating-advanced` | النجوم |
| `.testimonial-text-advanced` | نص التقييم |

### الإحصائيات

| الفئة | الوصف |
|------|-------|
| `.stat-item-advanced` | عنصر إحصائي |
| `.stat-number-advanced` | الرقم |
| `.stat-label-advanced` | التسمية |

### الأزرار

| الفئة | الوصف |
|------|-------|
| `.btn-review-advanced` | زر التقييم |
| `.testimonials-cta-advanced` | حاوية الزر |

---

## 🎭 الرسوم المتحركة (Animations)

### CSS Animations

| الاسم | المدة | الوصف |
|------|-------|-------|
| `float` | 20s | حركة عائمة |
| `shimmer` | 3s | تأثير لامع |
| `pulse` | 2s | نبض |
| `shine` | 3s | بريق |
| `fadeInUp` | 0.6s | ظهور من الأسفل |
| `fadeOut` | 0.5s | اختفاء |
| `modalSlideIn` | 0.5s | انزلاق النافذة |

### استخدام الرسوم المتحركة

```css
.element {
    animation: float 20s ease-in-out infinite;
}
```

---

## 🔧 الإعدادات (Configuration)

### تخصيص الألوان

```css
:root {
    --primary-color: #E60000;
    --secondary-color: #990000;
    --gold-color: #FFD700;
    --dark-bg: #0a0a0a;
}
```

### تخصيص الأوقات

```javascript
// في testimonials-advanced.js
const CONFIG = {
    autoPlayInterval: 5000,    // الدوران التلقائي
    animationDuration: 600,    // مدة الرسوم المتحركة
    successMessageDuration: 3000  // مدة رسالة النجاح
};
```

---

## 📊 بنية البيانات (Data Structures)

### Review Object

```typescript
interface Review {
    name: string;        // اسم العميل
    role: string;        // الوظيفة
    avatar: string;      // الحرف الأول
    rating: number;      // 1-5
    text: string;        // نص التقييم
    verified: boolean;   // حالة التحقق
    date: string;        // YYYY-MM-DD
}
```

### مثال كامل

```javascript
const review = {
    name: 'محمد العتيبي',
    role: 'مسافر دائم',
    avatar: 'م',
    rating: 5,
    text: 'استخدمتها في رحلة عمل لأوروبا وآسيا...',
    verified: true,
    date: '2025-01-15'
};
```

---

## 🎯 أمثلة متقدمة

### مثال 1: إضافة تقييمات متعددة

```javascript
const reviews = [
    { name: 'أحمد', role: 'مهندس', avatar: 'أ', rating: 5, text: '...', verified: true, date: '2025-01-20' },
    { name: 'فاطمة', role: 'طالبة', avatar: 'ف', rating: 5, text: '...', verified: true, date: '2025-01-19' },
    { name: 'خالد', role: 'طبيب', avatar: 'خ', rating: 4, text: '...', verified: false, date: '2025-01-18' }
];

const testimonials = new TestimonialsAdvanced();
reviews.forEach(review => testimonials.addReview(review));
```

### مثال 2: تخصيص سرعة الدوران

```javascript
class CustomTestimonials extends TestimonialsAdvanced {
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.rotateReviews();
        }, 3000); // 3 ثوانٍ بدلاً من 5
    }
}

const testimonials = new CustomTestimonials();
```

### مثال 3: معالج مخصص للإرسال

```javascript
const form = document.getElementById('reviewFormAdvanced');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        role: formData.get('role'),
        rating: 5,
        text: formData.get('review'),
        verified: false,
        date: new Date().toISOString().split('T')[0]
    };
    
    // إرسال إلى API
    try {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            testimonials.addReview(data);
            reviewModal.showSuccess();
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
```

---

## 🔍 استكشاف الأخطاء (Debugging)

### تفعيل وضع التصحيح

```javascript
// في testimonials-advanced.js
const DEBUG = true;

if (DEBUG) {
    console.log('Testimonials initialized');
    console.log('Reviews:', this.reviews);
}
```

### فحص الحالة

```javascript
// في Console
const testimonials = new TestimonialsAdvanced();
console.log(testimonials.reviews);
console.log(testimonials.currentIndex);
```

---

## 📞 الدعم

للمزيد من المساعدة:
- 📖 [TESTIMONIALS_README.md](TESTIMONIALS_README.md)
- 🔧 [INTEGRATION_GUIDE.md](INTEGRATION_GUIDE.md)
- 🚀 [QUICK_START.md](QUICK_START.md)

---

**الإصدار**: 1.0.0  
**آخر تحديث**: 2025  
**المطور**: Amazon Q Developer
