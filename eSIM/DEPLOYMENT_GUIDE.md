# 🚀 دليل النشر على GitHub Pages

## الخطوات:

### 1. إنشاء Repository على GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/esim-vpro.git
git push -u origin main
```

### 2. تفعيل GitHub Pages
1. اذهب إلى Settings في الـ Repository
2. اختر Pages من القائمة الجانبية
3. في Source اختر "GitHub Actions"
4. سيتم النشر تلقائياً

### 3. تكوين Formspree (اختياري)
1. سجل في https://formspree.io
2. أنشئ نموذج جديد
3. انسخ Form ID
4. في ملف `js/advanced-support-system.js` استبدل:
```javascript
this.apiEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
```

### 4. الوصول للموقع
بعد النشر، الموقع سيكون متاح على:
```
https://YOUR_USERNAME.github.io/esim-vpro/
```

## ⚙️ الميزات المفعلة:

✅ نظام الدعم الذكي بالذكاء الاصطناعي
✅ إشعارات احترافية في الوقت الفعلي
✅ دعم 3 لغات (عربي، إنجليزي، فرنسي)
✅ Progressive Web App (PWA)
✅ Service Worker للعمل بدون إنترنت
✅ تصميم متجاوب 100%
✅ GitHub Actions للنشر التلقائي

## 🔧 التحديثات المستقبلية:

لتحديث الموقع:
```bash
git add .
git commit -m "Update description"
git push
```

سيتم النشر تلقائياً خلال دقائق!

## 📞 الدعم:

للمساعدة في النشر:
- البريد: support@esimvpro.com
- واتساب: +44 123 456 7890

---

**تم التطوير بأحدث التقنيات لضمان أفضل أداء على GitHub Pages** 🚀
