class AdvancedSupportSystem {
    constructor() {
        this.apiEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
        this.knowledgeBase = this.initKnowledgeBase();
        this.init();
    }

    init() {
        this.attachFormListener();
        this.initServiceWorker();
    }

    initKnowledgeBase() {
        return {
            ar: {
                esim_info: {patterns: ['ما هو', 'esim', 'تعريف', 'شرح', 'معلومات', 'ماهي', 'ما هي'], response: 'السيد/السيدة المحترم/ة،\n\neSIM (Embedded SIM) هي تقنية شريحة رقمية مدمجة في الجهاز، تتيح لكم الاتصال بشبكات الاتصالات المحمولة دون الحاجة لشريحة فعلية قابلة للإزالة.\n\nالمزايا الرئيسية:\n• تفعيل فوري إلكتروني خلال دقائق\n• تغطية عالمية في 89+ دولة عبر 6 قارات\n• أمان وحماية متقدمة للبيانات\n• صديقة للبيئة (بدون بلاستيك)\n• سهولة التبديل بين الشبكات\n• دعم أجهزة متعددة (Dual SIM)\n\nنحن في خدمتكم لأي استفسار إضافي.\n\nمع أطيب التحيات،\nفريق eSIM V Pro'},
                activation: {patterns: ['تفعيل', 'كيف أفعل', 'خطوات', 'طريقة', 'تشغيل', 'استخدام', 'كيفية', 'البدء'], response: 'السيد/السيدة المحترم/ة،\n\nإليكم خطوات تفعيل خدمة eSIM بالتفصيل:\n\n📱 الخطوة 1: اختيار الباقة\n- زوروا موقعنا الإلكتروني\n- اختاروا الباقة المناسبة (5-14 شهر)\n\n💳 الخطوة 2: إتمام الدفع\n- الدفع الآمن عبر USDT\n- تأكيد فوري للمعاملة\n\n📧 الخطوة 3: استلام رمز QR\n- يصلكم على بريدكم الإلكتروني فوراً\n- تحققوا من البريد الوارد والمزعج\n\n⚙️ الخطوة 4: التفعيل على الجهاز\n- iPhone: الإعدادات > شبكة الجوال > إضافة خطة بيانات\n- Android: الإعدادات > الاتصالات > مدير SIM\n\n📷 الخطوة 5: مسح رمز QR\n- استخدموا كاميرا الجهاز\n- اتبعوا التعليمات على الشاشة\n\n✅ الخطوة 6: التفعيل النهائي\n- فعّلوا "تجوال البيانات"\n- اختاروا eSIM كخط بيانات أساسي\n- أعيدوا تشغيل الجهاز\n\n⏱️ مدة التفعيل: أقل من دقيقتين\n👥 الدعم الفني متاح 24/7 لمساعدتكم\n\nمع أطيب التحيات،\nفريق eSIM V Pro'},
                pricing: {patterns: ['سعر', 'أسعار', 'كم', 'تكلفة', 'باقات', 'اشتراك', 'رسوم', 'مبلغ', 'قيمة'], response: 'السيد/السيدة المحترم/ة،\n\nيسعدنا تقديم باقاتنا المتميزة:\n\n💎 باقة 5 أشهر: 40 USDT\n(مثالية للتجربة والسفر القصير)\n\n💎 باقة 10 أشهر: 55 USDT\n(الأكثر طلباً - قيمة ممتازة)\n\n💎 باقة 12 شهر: 65 USDT\n(الأفضل للمقيمين بالخارج)\n\n💎 باقة 14 شهر: 70 USDT\n(الباقة البريميوم - أطول مدة)\n\n✨ جميع الباقات تتضمن:\n✅ إنترنت غير محدود بسرعة 5G/4G\n✅ مكالمات ورسائل SMS مجانية\n✅ رقم بريطاني مجاني (+44)\n✅ دعم Hotspot بدون قيود\n✅ تغطية في 89+ دولة عبر 6 قارات\n✅ بدون رسوم خفية أو إضافية\n✅ تفعيل فوري خلال دقائق\n✅ دعم فني 24/7\n\n💰 السعر المعروض نهائي وشامل جميع الخدمات\n🎁 عروض خاصة متاحة للعائلات والشركات\n\nمع أطيب التحيات،\nفريق eSIM V Pro'},
                countries: {patterns: ['دول', 'أين', 'تغطية', 'مناطق'], response: 'السيد/السيدة المحترم/ة،\n\nتغطيتنا العالمية تشمل 89+ دولة:\n\n🌍 الشرق الأوسط: الإمارات، السعودية، مصر، الأردن، لبنان\n🌍 أوروبا: جميع دول الاتحاد الأوروبي، المملكة المتحدة\n🌍 آسيا: تركيا، الصين، اليابان، كوريا، تايلاند\n🌍 أمريكا: الولايات المتحدة، كندا، المكسيك\n🌍 أفريقيا: جنوب أفريقيا، المغرب، تونس\n🌍 أوقيانوسيا: أستراليا، نيوزيلندا'},
                support: {patterns: ['مشكلة', 'مساعدة', 'دعم', 'لا يعمل'], response: 'السيد/السيدة المحترم/ة،\n\nفريق الدعم الفني متاح لخدمتكم:\n\n📧 البريد: support@esimvpro.com\n📱 واتساب: +44 123 456 7890\n💬 الدردشة المباشرة: متاحة على الموقع\n⏰ أوقات العمل: 24/7\n⚡ زمن الاستجابة: أقل من 5 دقائق\n\nيرجى تزويدنا بـ:\n• رقم الطلب\n• نوع الجهاز\n• وصف تفصيلي للمشكلة'},
                network: {patterns: ['شبكة', 'اتصال', 'بطيء', 'ضعيف'], response: 'السيد/السيدة المحترم/ة،\n\nحلول مشاكل الشبكة:\n\n🔧 الخطوات الأساسية:\n1. إعادة تشغيل الجهاز\n2. تفعيل/إيقاف وضع الطيران (30 ثانية)\n3. التأكد من تفعيل "تجوال البيانات"\n4. التحقق من اختيار eSIM كخط البيانات\n\n⚙️ الإعدادات المتقدمة:\n• اختيار الشبكة يدوياً\n• تحديث إعدادات APN\n• إعادة تثبيت ملف تعريف eSIM\n\nإذا استمرت المشكلة، يرجى التواصل مع الدعم الفني'}
            },
            en: {
                esim_info: {patterns: ['what is esim', 'define', 'explain'], response: 'Dear Sir/Madam,\n\neSIM (Embedded SIM) is a digital SIM technology embedded in your device, allowing mobile network connectivity without a physical card.\n\nBenefits:\n• Instant electronic activation\n• Global coverage in 89+ countries\n• Advanced security\n• Eco-friendly\n\nWe are at your service for any inquiries.'},
                activation: {patterns: ['activate', 'how to', 'steps'], response: 'Dear Sir/Madam,\n\nActivation steps:\n1. Choose your plan\n2. Complete payment via USDT\n3. Receive QR code instantly\n4. Settings > Mobile Network > Add eSIM\n5. Scan QR code\n6. Enable "Data Roaming"\n\nActivation time: Less than 2 minutes\nTechnical support available 24/7'},
                pricing: {patterns: ['price', 'cost', 'how much'], response: 'Dear Sir/Madam,\n\nAvailable plans:\n\n📱 5 months: 40 USDT\n📱 10 months: 55 USDT\n📱 12 months: 65 USDT\n📱 14 months: 70 USDT\n\nAll plans include:\n✓ Unlimited 5G/4G internet\n✓ Free calls & SMS\n✓ Free UK number\n✓ Hotspot support\n✓ Coverage in 89+ countries\n✓ No hidden fees'},
                support: {patterns: ['problem', 'help', 'support'], response: 'Dear Sir/Madam,\n\nTechnical support available:\n\n📧 Email: support@esimvpro.com\n📱 WhatsApp: +44 123 456 7890\n💬 Live Chat: Available on website\n⏰ Hours: 24/7\n⚡ Response time: Less than 5 minutes'}
            },
            fr: {
                esim_info: {patterns: ['quest ce que esim', 'définir'], response: 'Cher/Chère Monsieur/Madame,\n\neSIM est une technologie SIM numérique intégrée permettant la connectivité mobile sans carte physique.\n\nAvantages:\n• Activation instantanée\n• Couverture mondiale dans 89+ pays\n• Sécurité avancée\n• Écologique'},
                support: {patterns: ['problème', 'aide', 'support'], response: 'Cher/Chère Monsieur/Madame,\n\nSupport technique disponible:\n\n📧 Email: support@esimvpro.com\n📱 WhatsApp: +44 123 456 7890\n💬 Chat en direct: Disponible sur le site\n⏰ Horaires: 24/7\n⚡ Temps de réponse: Moins de 5 minutes'}
            }
        };
    }

    attachFormListener() {
        document.addEventListener('submit', (e) => {
            if (e.target.id === 'contactForm') {
                e.preventDefault();
                this.handleFormSubmit(e.target);
            }
        });
    }

    async handleFormSubmit(form) {
        const formData = new FormData(form);
        const messageText = formData.get('message');
        
        if (!messageText || messageText.trim().length < 5) {
            this.showNotification('error', 'يرجى كتابة رسالة صحيحة', 'الرسالة قصيرة جداً');
            return;
        }

        const language = this.detectLanguage(messageText);
        
        this.showNotification('info', 'جاري المعالجة...', 'يتم تحليل رسالتك والبحث عن أفضل رد');

        setTimeout(async () => {
            const response = this.generateResponse(messageText, language);
            await this.sendToFormspree(messageText, response);
            this.showResponseNotification(response, language);
            form.reset();
        }, 2000);
    }

    detectLanguage(text) {
        if (/[\u0600-\u06FF]/.test(text)) return 'ar';
        if (/[àâäéèêëïîôùûüÿæœç]/i.test(text)) return 'fr';
        return 'en';
    }

    generateResponse(message, language) {
        const kb = this.knowledgeBase[language] || this.knowledgeBase['ar'];
        const text = message.toLowerCase();
        
        for (const [key, data] of Object.entries(kb)) {
            for (const pattern of data.patterns) {
                if (text.includes(pattern.toLowerCase())) {
                    return data.response;
                }
            }
        }

        const defaults = {
            ar: 'السيد/السيدة المحترم/ة،\n\nشكراً لتواصلكم معنا.\n\nتلقينا رسالتكم وسيقوم فريقنا المتخصص بمراجعتها والرد عليكم خلال 5 دقائق.\n\nفي الأثناء، يمكنكم:\n• زيارة صفحة الأسئلة الشائعة\n• التواصل عبر واتساب: +44 123 456 7890\n• البريد الإلكتروني: support@esimvpro.com\n\nنحن هنا لمساعدتكم!\n\nمع أطيب التحيات،\nفريق eSIM V Pro',
            en: 'Dear Sir/Madam,\n\nThank you for contacting us.\n\nWe received your message and our specialized team will review it and respond within 5 minutes.\n\nMeanwhile, you can:\n• Visit our FAQ page\n• Contact via WhatsApp: +44 123 456 7890\n• Email: support@esimvpro.com\n\nWe are here to help!\n\nBest regards,\neSIM V Pro Team',
            fr: 'Cher/Chère Monsieur/Madame,\n\nMerci de nous avoir contactés.\n\nNous avons reçu votre message et notre équipe spécialisée le examinera et répondra dans 5 minutes.\n\nEn attendant, vous pouvez:\n• Visiter notre page FAQ\n• Contacter via WhatsApp: +44 123 456 7890\n• Email: support@esimvpro.com\n\nNous sommes là pour vous aider!\n\nCordialement,\nÉquipe eSIM V Pro'
        };

        return defaults[language];
    }

    async sendToFormspree(message, response) {
        try {
            await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    message: message,
                    response: response,
                    timestamp: new Date().toISOString()
                })
            });
        } catch (error) {
            console.log('Formspree integration pending');
        }
    }

    showNotification(type, title, message) {
        if (window.notificationSystem) {
            window.notificationSystem[type](title, message, 5000);
        }
    }

    showResponseNotification(response, lang) {
        const titles = {
            ar: '🤖 رد تلقائي من نظام الدعم الذكي',
            en: '🤖 Automated Response from AI Support',
            fr: '🤖 Réponse Automatisée du Support IA'
        };

        if (window.notificationSystem) {
            window.notificationSystem.message(
                titles[lang],
                response.substring(0, 200) + '...',
                [
                    {
                        label: lang === 'ar' ? '📖 قراءة الرد الكامل' : lang === 'fr' ? '📖 Lire la Réponse' : '📖 Read Full Response',
                        primary: true,
                        callback: () => this.showFullResponse(response, titles[lang])
                    },
                    {
                        label: lang === 'ar' ? '✅ تم' : lang === 'fr' ? '✅ OK' : '✅ OK',
                        primary: false
                    }
                ],
                0
            );
        }
    }

    showFullResponse(response, title) {
        const modal = document.createElement('div');
        modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.95);backdrop-filter:blur(10px);z-index:999999;display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn 0.3s;';
        modal.innerHTML = `
            <div style="background:linear-gradient(145deg,#ffffff,#f8f9fa);border-radius:30px;padding:50px;max-width:800px;width:100%;max-height:85vh;overflow-y:auto;position:relative;box-shadow:0 30px 90px rgba(0,0,0,0.5);animation:slideUp 0.4s;">
                <button onclick="this.parentElement.parentElement.remove()" style="position:absolute;top:25px;left:25px;width:45px;height:45px;border-radius:50%;background:linear-gradient(135deg,rgba(230,0,0,0.1),rgba(230,0,0,0.05));border:2px solid rgba(230,0,0,0.2);color:#E60000;font-size:24px;cursor:pointer;transition:all 0.3s;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.background='linear-gradient(135deg,#E60000,#990000)';this.style.color='white';this.style.transform='rotate(90deg)';" onmouseout="this.style.background='linear-gradient(135deg,rgba(230,0,0,0.1),rgba(230,0,0,0.05))';this.style.color='#E60000';this.style.transform='rotate(0)';">&times;</button>
                <div style="display:flex;align-items:center;gap:15px;margin-bottom:30px;padding-bottom:25px;border-bottom:3px solid rgba(230,0,0,0.1);">
                    <div style="width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#E60000,#990000);display:flex;align-items:center;justify-content:center;font-size:35px;box-shadow:0 15px 40px rgba(230,0,0,0.4);">🤖</div>
                    <h2 style="color:#E60000;margin:0;font-size:28px;font-weight:900;">${title}</h2>
                </div>
                <div style="color:#444;line-height:2;white-space:pre-wrap;font-size:16px;font-weight:500;">${response}</div>
                <div style="margin-top:30px;padding-top:25px;border-top:2px solid rgba(230,0,0,0.1);text-align:center;">
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background:linear-gradient(135deg,#E60000,#990000);color:white;padding:15px 40px;border-radius:50px;border:none;font-weight:800;font-size:16px;cursor:pointer;box-shadow:0 10px 30px rgba(230,0,0,0.4);transition:all 0.3s;" onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='0 15px 40px rgba(230,0,0,0.6)';" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 10px 30px rgba(230,0,0,0.4)';">✓ تم القراءة</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    initServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').catch(() => {});
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.advancedSupportSystem = new AdvancedSupportSystem();
});
