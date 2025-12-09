class AutoReplySystem {
    constructor() {
        this.knowledgeBase = this.initKnowledgeBase();
        this.processingQueue = [];
        this.init();
    }

    init() {
        this.attachFormListener();
        this.startQueueProcessor();
    }

    initKnowledgeBase() {
        return {
            ar: {
                esim_info: {patterns: ['ما هو esim', 'تعريف', 'شرح', 'معلومات', 'ماهي'], response: 'السيد/السيدة المحترم/ة،\n\neSIM (Embedded SIM) هي تقنية شريحة اتصال رقمية مدمجة في الجهاز، تتيح لكم الاتصال بشبكات الاتصالات المحمولة دون الحاجة لشريحة فعلية قابلة للإزالة.\n\nالمزايا الرئيسية:\n• تفعيل فوري إلكتروني\n• تغطية عالمية في 89+ دولة\n• أمان وحماية متقدمة\n• صديقة للبيئة\n• سهولة التبديل بين الشبكات\n\nنحن في خدمتكم لأي استفسار إضافي.'},
                activation: {patterns: ['تفعيل', 'كيف أفعل', 'خطوات', 'طريقة', 'تشغيل', 'استخدام'], response: 'السيد/السيدة المحترم/ة،\n\nإليكم خطوات تفعيل خدمة eSIM:\n\n1. اختيار الباقة المناسبة من موقعنا الإلكتروني\n2. إتمام عملية الدفع الآمن عبر USDT\n3. استلام رمز QR Code فوراً على بريدكم الإلكتروني\n4. الانتقال إلى: الإعدادات > شبكة الجوال > إضافة خطة بيانات\n5. مسح رمز QR باستخدام كاميرا الجهاز\n6. اتباع التعليمات الظاهرة على الشاشة\n7. تفعيل "تجوال البيانات" من الإعدادات\n\nمدة التفعيل: أقل من دقيقتين\nالدعم الفني متاح 24/7 لمساعدتكم.'},
                pricing: {patterns: ['سعر', 'أسعار', 'كم', 'تكلفة', 'باقات', 'اشتراك', 'رسوم'], response: 'السيد/السيدة المحترم/ة،\n\nباقاتنا المتاحة:\n\n📱 باقة 5 أشهر: 40 USDT\n📱 باقة 10 أشهر: 55 USDT\n📱 باقة 12 شهر: 65 USDT\n📱 باقة 14 شهر: 70 USDT\n\nجميع الباقات تشمل:\n✓ إنترنت غير محدود بسرعة 5G/4G\n✓ مكالمات ورسائل SMS مجانية\n✓ رقم بريطاني مجاني\n✓ دعم Hotspot\n✓ تغطية في 89+ دولة\n✓ بدون رسوم خفية أو إضافية\n\nالسعر المعروض نهائي وشامل جميع الخدمات.'},
                countries: {patterns: ['دول', 'أين', 'تغطية', 'مناطق', 'عالمي', 'دولي'], response: 'السيد/السيدة المحترم/ة،\n\nتغطيتنا العالمية تشمل 89+ دولة عبر 6 قارات:\n\n🌍 الشرق الأوسط: الإمارات، السعودية، مصر، الأردن، لبنان، الكويت، قطر، البحرين، عمان\n🌍 أوروبا: جميع دول الاتحاد الأوروبي، المملكة المتحدة، سويسرا، النرويج\n🌍 آسيا: تركيا، الصين، اليابان، كوريا، تايلاند، ماليزيا، سنغافورة، الهند\n🌍 أمريكا: الولايات المتحدة، كندا، المكسيك، البرازيل\n🌍 أفريقيا: جنوب أفريقيا، المغرب، تونس، كينيا\n🌍 أوقيانوسيا: أستراليا، نيوزيلندا\n\nللاطلاع على القائمة الكاملة، يرجى زيارة صفحة "الدول المدعومة" على موقعنا.'},
                compatibility: {patterns: ['جهازي', 'متوافق', 'يدعم', 'ايفون', 'سامسونج', 'هواوي', 'اوبو', 'شاومي', 'موبايل', 'هاتف'], response: 'السيد/السيدة المحترم/ة،\n\nالأجهزة المتوافقة مع خدمة eSIM:\n\n📱 Apple iPhone:\niPhone XS, XR, 11, 12, 13, 14, 15, 16 (جميع الإصدارات)\n\n📱 Samsung Galaxy:\nS20, S21, S22, S23, S24 وما بعدها\nZ Fold/Flip Series\n\n📱 Google Pixel: 3 وما بعدها\n📱 Huawei: P40 وما بعدها\n📱 Oppo: Find X3 وما بعدها\n📱 Xiaomi: 12T وما بعدها\n\nللتحقق من توافق جهازكم:\nالإعدادات > عام > حول > ابحث عن رقم EID\n\nوجود رقم EID يعني أن جهازكم يدعم eSIM.'},
                payment: {patterns: ['دفع', 'طريقة الدفع', 'كيف أدفع', 'سداد', 'تحويل', 'بطاقة'], response: 'السيد/السيدة المحترم/ة،\n\nطرق الدفع المتاحة:\n\n💳 العملات الرقمية: USDT (Tether)\n\nمميزات الدفع:\n✓ معاملات آمنة ومشفرة 100%\n✓ تأكيد فوري للدفع\n✓ استلام رمز QR خلال دقائق\n✓ حماية كاملة للبيانات المالية\n✓ بدون رسوم معالجة إضافية\n\nبعد إتمام الدفع، سيتم إرسال رمز التفعيل تلقائياً إلى بريدكم الإلكتروني المسجل.\n\nللاستفسارات المالية: billing@esimvpro.com'},
                support: {patterns: ['مشكلة', 'مساعدة', 'دعم', 'لا يعمل', 'عطل', 'خلل', 'صيانة'], response: 'السيد/السيدة المحترم/ة،\n\nفريق الدعم الفني متاح لخدمتكم على مدار الساعة:\n\n📧 البريد الإلكتروني: support@esimvpro.com\n📱 واتساب: +44 123 456 7890\n💬 الدردشة المباشرة: متاحة على الموقع\n⏰ أوقات العمل: 24/7\n⚡ زمن الاستجابة: أقل من 5 دقائق\n\nيرجى تزويدنا بالمعلومات التالية عند التواصل:\n• رقم الطلب\n• نوع الجهاز\n• وصف تفصيلي للمشكلة\n• لقطات شاشة إن أمكن\n\nنحن ملتزمون بحل جميع استفساراتكم بأسرع وقت ممكن.'},
                delivery: {patterns: ['متى يصل', 'توصيل', 'استلام', 'وصول', 'شحن'], response: 'السيد/السيدة المحترم/ة،\n\neSIM هي خدمة رقمية بالكامل:\n\n⚡ التسليم الفوري:\n• لا يوجد شحن فعلي\n• لا حاجة للانتظار\n• استلام رمز QR فوراً عبر البريد الإلكتروني\n• التفعيل خلال دقائق من الشراء\n\nخطوات الاستلام:\n1. إتمام عملية الدفع\n2. التحقق من البريد الإلكتروني (الوارد والمزعج)\n3. تحميل رمز QR المرفق\n4. البدء بالتفعيل مباشرة\n\nفي حال عدم استلام الرمز خلال 10 دقائق، يرجى التواصل معنا فوراً.'},
                refund: {patterns: ['استرجاع', 'استرداد', 'إلغاء', 'إرجاع', 'تعويض'], response: 'السيد/السيدة المحترم/ة،\n\nسياسة الاسترداد والإلغاء:\n\n✅ قبل التفعيل:\n• استرداد كامل 100% خلال 24 ساعة من الشراء\n• معالجة الطلب خلال 3-5 أيام عمل\n• إعادة المبلغ بنفس طريقة الدفع\n\n❌ بعد التفعيل:\n• لا يمكن استرداد المبلغ بعد مسح رمز QR\n• الخدمة تعتبر مستخدمة فور التفعيل\n\nللحالات الاستثنائية:\n• مشاكل تقنية موثقة\n• عدم توافق الخدمة (بعد التحقق)\n\nلطلب الاسترداد: refunds@esimvpro.com\nمع إرفاق رقم الطلب وسبب الطلب.'},
                network: {patterns: ['شبكة', 'اتصال', 'بطيء', 'ضعيف', 'انقطاع', 'تقطيع'], response: 'السيد/السيدة المحترم/ة،\n\nحلول مشاكل الشبكة:\n\n🔧 الخطوات الأساسية:\n1. إعادة تشغيل الجهاز بالكامل\n2. تفعيل/إيقاف وضع الطيران (30 ثانية)\n3. التأكد من تفعيل "تجوال البيانات"\n4. التحقق من اختيار eSIM كخط البيانات الأساسي\n\n⚙️ الإعدادات المتقدمة:\n• اختيار الشبكة يدوياً من القائمة\n• تحديث إعدادات APN\n• إعادة تثبيت ملف تعريف eSIM\n• التحقق من تغطية المنطقة\n\n📍 إعدادات APN:\nAPN: internet\nاسم المستخدم: (فارغ)\nكلمة المرور: (فارغ)\n\nإذا استمرت المشكلة، يرجى التواصل مع الدعم الفني مع ذكر:\n• موقعكم الجغرافي\n• نوع الجهاز\n• رسالة الخطأ إن وجدت'},
                speed: {patterns: ['سرعة', '5g', '4g', 'lte', 'أداء', 'جودة'], response: 'السيد/السيدة المحترم/ة،\n\nمواصفات السرعة والأداء:\n\n⚡ تقنيات الشبكة:\n• 5G: حيث متوفر (سرعة تصل إلى 1 Gbps)\n• 4G/LTE: في معظم الدول (سرعة تصل إلى 150 Mbps)\n• 3G: في المناطق النائية\n\n📊 الأداء:\n✓ بيانات غير محدودة بدون حد أقصى للسرعة\n✓ بدون تقييد أو تباطؤ\n✓ جودة عالية للبث المباشر 4K\n✓ زمن استجابة منخفض للألعاب\n\nالعوامل المؤثرة على السرعة:\n• تغطية الشبكة المحلية\n• الموقع الجغرافي\n• الازدحام على الشبكة\n• مواصفات الجهاز\n\nنضمن أفضل أداء ممكن في جميع المناطق المدعومة.'},
                hotspot: {patterns: ['هوت سبوت', 'مشاركة', 'واي فاي شخصي', 'نقطة اتصال', 'تيثرينج'], response: 'السيد/السيدة المحترم/ة،\n\nخدمة نقطة الاتصال الشخصية (Hotspot):\n\n✅ مدعومة بالكامل في جميع الباقات\n✅ بدون رسوم إضافية\n✅ بدون حد أقصى للاستخدام\n\nطريقة التفعيل:\n\n📱 iPhone:\nالإعدادات > نقطة اتصال شخصية > تفعيل\n\n📱 Android:\nالإعدادات > الشبكة والإنترنت > نقطة اتصال > تفعيل\n\nالأجهزة المدعومة:\n• أجهزة الكمبيوتر المحمولة\n• الأجهزة اللوحية\n• الهواتف الأخرى\n• أجهزة الألعاب\n\nملاحظة: يمكن توصيل عدة أجهزة في نفس الوقت حسب إمكانيات جهازكم.'},
                calls: {patterns: ['مكالمات', 'اتصال', 'رسائل', 'sms', 'صوت', 'هاتف'], response: 'السيد/السيدة المحترم/ة،\n\nخدمات الاتصال المتضمنة:\n\n📞 المكالمات الصوتية:\n✓ مكالمات محلية ودولية مجانية\n✓ جودة صوت عالية HD\n✓ بدون حد أقصى للدقائق\n\n💬 الرسائل النصية:\n✓ رسائل SMS مجانية\n✓ رسائل MMS مدعومة\n✓ إرسال واستقبال غير محدود\n\n🇬🇧 الرقم البريطاني:\n✓ رقم افتراضي مجاني من المملكة المتحدة\n✓ يعمل في جميع الدول المدعومة\n✓ الاحتفاظ بالرقم طوال مدة الاشتراك\n\nملاحظة: تطبيقات المراسلة (WhatsApp, Telegram, etc.) تعمل بشكل طبيعي عبر الإنترنت.'},
                qr_code: {patterns: ['qr', 'رمز', 'لم يصل', 'كود', 'باركود'], response: 'السيد/السيدة المحترم/ة،\n\nفي حال عدم استلام رمز QR:\n\n🔍 خطوات التحقق:\n1. فحص صندوق الوارد في البريد الإلكتروني\n2. التحقق من مجلد الرسائل المزعجة (Spam/Junk)\n3. البحث عن رسائل من: noreply@esimvpro.com\n4. التأكد من صحة عنوان البريد المسجل\n5. الانتظار 10-15 دقيقة (قد يتأخر الإرسال)\n\n📧 إعادة الإرسال:\nفي حال عدم الاستلام بعد 15 دقيقة:\n• تواصل معنا عبر: support@esimvpro.com\n• أو واتساب: +44 123 456 7890\n• مع ذكر رقم الطلب\n\nسنقوم بإعادة إرسال الرمز فوراً إلى بريد بديل إذا لزم الأمر.\n\nيمكنكم أيضاً تحميل الرمز من حسابكم على الموقع.'},
                account: {patterns: ['حساب', 'تسجيل', 'دخول', 'اشتراك', 'عضوية'], response: 'السيد/السيدة المحترم/ة،\n\nإدارة الحساب:\n\n🔐 إنشاء حساب جديد:\n1. زيارة الصفحة الرئيسية\n2. النقر على "تسجيل"\n3. إدخال البيانات المطلوبة\n4. تأكيد البريد الإلكتروني\n\n✨ مميزات الحساب:\n• تتبع جميع طلباتكم\n• إدارة الباقات النشطة\n• الوصول لرموز QR السابقة\n• سجل الفواتير والمدفوعات\n• تحديث البيانات الشخصية\n• دعم فني أسرع\n\n🔑 استعادة كلمة المرور:\nالنقر على "نسيت كلمة المرور" في صفحة تسجيل الدخول\n\n📧 للمساعدة: accounts@esimvpro.com'},
                multiple: {patterns: ['أكثر من جهاز', 'جهازين', 'نقل', 'تحويل', 'عدة أجهزة'], response: 'السيد/السيدة المحترم/ة،\n\nاستخدام eSIM على أجهزة متعددة:\n\n⚠️ القيود:\n• يعمل eSIM على جهاز واحد فقط في نفس الوقت\n• لا يمكن استخدامه على جهازين متزامنين\n\n🔄 نقل eSIM لجهاز آخر:\n1. حذف ملف تعريف eSIM من الجهاز الأول:\n   الإعدادات > شبكة الجوال > حذف الخطة\n2. مسح رمز QR نفسه على الجهاز الجديد\n3. اتباع خطوات التفعيل\n\n📝 ملاحظات مهمة:\n• بعض الباقات تسمح بالمسح مرة واحدة فقط\n• في حال استنفاد عدد مرات المسح، تواصل معنا\n• يمكن شراء باقات متعددة لأجهزة مختلفة\n\nللاستفسارات: support@esimvpro.com'}
            },
            en: {
                esim_info: {patterns: ['what is esim', 'define', 'explain'], response: 'eSIM is a digital SIM embedded in your device for mobile network access without physical card. Works in 190+ countries with instant activation.'},
                activation: {patterns: ['activate', 'how to', 'steps'], response: 'Easy activation: 1) Choose plan 2) Pay securely 3) Receive QR Code instantly 4) Scan from phone settings. Takes less than 2 minutes!'},
                pricing: {patterns: ['price', 'cost', 'how much'], response: 'Plans: 5 months (40 USDT), 10 months (55 USDT), 12 months (65 USDT), 14 months (70 USDT). All with unlimited data + free calls & SMS.'},
                countries: {patterns: ['countries', 'where', 'coverage'], response: 'We cover 89+ countries across 6 continents including: UAE, Saudi Arabia, Egypt, Turkey, Europe, America, Asia. Check countries page for full list.'},
                compatibility: {patterns: ['device', 'compatible', 'support', 'iphone'], response: 'Works on: iPhone XS/XR+, Samsung S20+, Google Pixel 3+, Huawei P40+. Check: Settings > General > About > Look for EID.'},
                payment: {patterns: ['payment', 'pay', 'how to pay'], response: 'We accept USDT only currently. Payment is 100% secure and encrypted. You receive QR Code instantly after payment confirmation.'},
                support: {patterns: ['problem', 'help', 'support'], response: 'Support team available 24/7. Contact: Email support@esim.com, WhatsApp +1234567890. We reply within 5 minutes!'},
                delivery: {patterns: ['when', 'delivery', 'receive'], response: 'eSIM is digital - instant delivery! No waiting, no shipping. QR Code sent to your email immediately after payment.'},
                refund: {patterns: ['refund', 'cancel', 'return'], response: 'Full refund within 24 hours if not activated. After activation, no refund possible. Contact us for assistance.'},
                network: {patterns: ['network', 'connection', 'slow'], response: 'For issues: 1) Toggle airplane mode 2) Restart device 3) Enable "Data Roaming" 4) Select network manually.'},
                speed: {patterns: ['speed', '5g', '4g'], response: 'We provide 5G where available, 4G/LTE in most countries. Unlimited speed - enjoy fast browsing and streaming!'},
                hotspot: {patterns: ['hotspot', 'share', 'tethering'], response: 'Yes! All plans support Hotspot. Share internet with laptop and tablet without limits.'},
                calls: {patterns: ['calls', 'voice', 'sms'], response: 'Yes! Includes free calls and SMS + free UK number. Call from any supported country.'},
                qr_code: {patterns: ['qr', 'code', 'not received'], response: 'Check: Inbox, Spam folder. Not received? Contact us for instant resend.'},
                account: {patterns: ['account', 'register', 'login'], response: 'Create free account to track orders and manage plans. Click "Register" on homepage.'},
                multiple: {patterns: ['multiple devices', 'transfer', 'move'], response: 'Works on one device at a time. To transfer: Delete from first device, then activate on new one.'}
            },
            fr: {
                esim_info: {patterns: ['quest ce que esim', 'définir', 'expliquer'], response: 'eSIM est une carte SIM numérique intégrée permettant laccès réseau mobile sans carte physique. Fonctionne dans 190+ pays avec activation instantanée.'},
                activation: {patterns: ['activer', 'comment', 'étapes'], response: 'Activation facile: 1) Choisir forfait 2) Payer en sécurité 3) Recevoir QR Code instantanément 4) Scanner depuis paramètres. Prend moins de 2 minutes!'},
                pricing: {patterns: ['prix', 'coût', 'combien'], response: 'Forfaits: 5 mois (40 USDT), 10 mois (55 USDT), 12 mois (65 USDT), 14 mois (70 USDT). Tous avec données illimitées + appels et SMS gratuits.'},
                countries: {patterns: ['pays', 'où', 'couverture'], response: 'Nous couvrons 89+ pays sur 6 continents: EAU, Arabie Saoudite, Égypte, Turquie, Europe, Amérique, Asie. Consultez la page pays.'},
                compatibility: {patterns: ['appareil', 'compatible', 'support'], response: 'Fonctionne sur: iPhone XS/XR+, Samsung S20+, Google Pixel 3+, Huawei P40+. Vérifier: Paramètres > Général > À propos > Chercher EID.'},
                payment: {patterns: ['paiement', 'payer'], response: 'Nous acceptons USDT uniquement. Paiement 100% sécurisé et crypté. QR Code reçu instantanément après confirmation.'},
                support: {patterns: ['problème', 'aide', 'support'], response: 'Support disponible 24/7. Contact: Email support@esim.com, WhatsApp +1234567890. Réponse en 5 minutes!'},
                delivery: {patterns: ['quand', 'livraison', 'recevoir'], response: 'eSIM numérique - livraison instantanée! Pas dattente. QR Code envoyé par email immédiatement après paiement.'},
                refund: {patterns: ['remboursement', 'annuler'], response: 'Remboursement complet sous 24h si non activé. Après activation, pas de remboursement. Contactez-nous pour aide.'},
                network: {patterns: ['réseau', 'connexion', 'lent'], response: 'Pour problèmes: 1) Activer/désactiver mode avion 2) Redémarrer appareil 3) Activer "Itinérance données" 4) Sélectionner réseau manuellement.'},
                speed: {patterns: ['vitesse', '5g', '4g'], response: 'Nous fournissons 5G où disponible, 4G/LTE dans la plupart des pays. Vitesse illimitée!'},
                hotspot: {patterns: ['hotspot', 'partage'], response: 'Oui! Tous les forfaits supportent Hotspot. Partagez internet avec ordinateur et tablette sans limites.'},
                calls: {patterns: ['appels', 'voix', 'sms'], response: 'Oui! Inclut appels et SMS gratuits + numéro UK gratuit. Appelez depuis nimporte quel pays supporté.'},
                qr_code: {patterns: ['qr', 'code', 'pas reçu'], response: 'Vérifier: Boîte de réception, Spam. Pas reçu? Contactez-nous pour renvoi instantané.'},
                account: {patterns: ['compte', 'inscription', 'connexion'], response: 'Créez compte gratuit pour suivre commandes et gérer forfaits. Cliquez "Inscription" sur page daccueil.'},
                multiple: {patterns: ['plusieurs appareils', 'transférer'], response: 'Fonctionne sur un appareil à la fois. Pour transférer: Supprimer du premier, puis activer sur le nouveau.'}
            }
        };
    }

    attachFormListener() {
        document.addEventListener('submit', (e) => {
            if (e.target.id === 'contactForm' || e.target.closest('#contact-form')) {
                e.preventDefault();
                this.handleFormSubmit(e.target);
            }
        });
    }

    async handleFormSubmit(form) {
        const formData = new FormData(form);
        const messageText = formData.get('message');
        const message = {
            name: 'مستخدم',
            email: 'user@example.com',
            subject: 'استفسار',
            message: messageText,
            timestamp: new Date().toISOString(),
            language: this.detectLanguage(messageText)
        };

        this.processingQueue.push(message);
        this.showConfirmation(message.email, message.language);
        form.reset();
    }

    detectLanguage(text) {
        if (/[\u0600-\u06FF]/.test(text)) return 'ar';
        if (/[àâäéèêëïîôùûüÿæœç]/i.test(text)) return 'fr';
        return 'en';
    }

    startQueueProcessor() {
        setInterval(() => {
            if (this.processingQueue.length > 0) {
                const message = this.processingQueue.shift();
                this.processMessage(message);
            }
        }, 1000);
    }

    async processMessage(message) {
        const response = this.generateResponse(message);
        await this.sendEmail(message, response);
        this.logMessage(message, response);
        this.showResponseNotification(response, message.language);
    }

    showResponseNotification(response, lang) {
        const titles = {
            ar: '🤖 رد تلقائي من نظام الدعم',
            en: '🤖 Automated Response from Support',
            fr: '🤖 Réponse Automatisée du Support'
        };

        if (window.notificationSystem) {
            window.notificationSystem.message(
                titles[lang] || titles.ar,
                response,
                [
                    {
                        label: lang === 'ar' ? 'قراءة الرد' : lang === 'fr' ? 'Lire la Réponse' : 'Read Response',
                        primary: true,
                        callback: () => {
                            const modal = document.createElement('div');
                            modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:999999;display:flex;align-items:center;justify-content:center;padding:20px;';
                            modal.innerHTML = `
                                <div style="background:white;border-radius:25px;padding:40px;max-width:700px;width:100%;max-height:80vh;overflow-y:auto;position:relative;">
                                    <button onclick="this.parentElement.parentElement.remove()" style="position:absolute;top:20px;left:20px;width:40px;height:40px;border-radius:50%;background:rgba(230,0,0,0.1);border:none;color:#E60000;font-size:24px;cursor:pointer;">&times;</button>
                                    <h2 style="color:#E60000;margin-bottom:20px;font-size:24px;font-weight:800;">${titles[lang]}</h2>
                                    <div style="color:#666;line-height:1.8;white-space:pre-wrap;">${response}</div>
                                </div>
                            `;
                            document.body.appendChild(modal);
                        }
                    },
                    {
                        label: lang === 'ar' ? 'إغلاق' : lang === 'fr' ? 'Fermer' : 'Close',
                        primary: false
                    }
                ],
                0
            );
        }
    }

    generateResponse(message) {
        const kb = this.knowledgeBase[message.language];
        const text = message.message.toLowerCase();
        
        for (const [key, data] of Object.entries(kb)) {
            for (const pattern of data.patterns) {
                if (text.includes(pattern)) {
                    return this.formatResponse(message, data.response);
                }
            }
        }

        return this.getDefaultResponse(message.language, message);
    }

    formatResponse(message, response) {
        const templates = {
            ar: `عزيزي/عزيزتي ${message.name}،\n\nشكراً لتواصلك معنا!\n\n${response}\n\nإذا كان لديك أي استفسار إضافي، لا تتردد في التواصل معنا.\n\nمع أطيب التحيات،\nفريق eSIM V Pro\n\n---\nالبريد: support@esim.com\nواتساب: +1234567890\nالموقع: www.esimvpro.com`,
            en: `Dear ${message.name},\n\nThank you for contacting us!\n\n${response}\n\nIf you have any additional questions, feel free to reach out.\n\nBest regards,\neSIM V Pro Team\n\n---\nEmail: support@esim.com\nWhatsApp: +1234567890\nWebsite: www.esimvpro.com`,
            fr: `Cher/Chère ${message.name},\n\nMerci de nous avoir contactés!\n\n${response}\n\nSi vous avez des questions supplémentaires, nhésitez pas à nous contacter.\n\nCordialement,\nÉquipe eSIM V Pro\n\n---\nEmail: support@esim.com\nWhatsApp: +1234567890\nSite: www.esimvpro.com`
        };

        return templates[message.language];
    }

    getDefaultResponse(lang, message) {
        const defaults = {
            ar: `عزيزي/عزيزتي ${message.name},\n\nشكراً لتواصلك معنا بخصوص: ${message.subject}\n\nتلقينا رسالتك وسيقوم فريقنا بمراجعتها والرد عليك خلال 5 دقائق.\n\nفي الأثناء، يمكنك:\n• زيارة صفحة الأسئلة الشائعة\n• التواصل معنا عبر واتساب: +1234567890\n• البريد الإلكتروني: support@esim.com\n\nنحن هنا لمساعدتك!\n\nمع أطيب التحيات،\nفريق eSIM V Pro`,
            en: `Dear ${message.name},\n\nThank you for contacting us regarding: ${message.subject}\n\nWe received your message and our team will review it and respond within 5 minutes.\n\nMeanwhile, you can:\n• Visit our FAQ page\n• Contact us via WhatsApp: +1234567890\n• Email: support@esim.com\n\nWe're here to help!\n\nBest regards,\neSIM V Pro Team`,
            fr: `Cher/Chère ${message.name},\n\nMerci de nous avoir contactés concernant: ${message.subject}\n\nNous avons reçu votre message et notre équipe le examinera et répondra dans 5 minutes.\n\nEn attendant, vous pouvez:\n• Visiter notre page FAQ\n• Nous contacter via WhatsApp: +1234567890\n• Email: support@esim.com\n\nNous sommes là pour vous aider!\n\nCordialement,\nÉquipe eSIM V Pro`
        };

        return defaults[lang];
    }

    async sendEmail(message, response) {
        console.log('Sending email to:', message.email);
        console.log('Response:', response);
        
        // في بيئة الإنتاج، استخدم API حقيقي
        // مثل SendGrid, Mailgun, AWS SES
        
        // محاكاة إرسال البريد
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        return {
            success: true,
            messageId: 'msg_' + Date.now(),
            sentAt: new Date().toISOString()
        };
    }

    showConfirmation(email, lang) {
        const messages = {
            ar: {
                title: '✅ تم إرسال رسالتك بنجاح!',
                message: 'شكراً لتواصلك معنا. سيقوم نظامنا الذكي بمعالجة رسالتك والرد عليك خلال أقل من 5 دقائق. يرجى متابعة الإشعارات على الموقع.'
            },
            en: {
                title: '✅ Message Sent Successfully!',
                message: 'Thank you for contacting us. Our AI system will process your message and respond within 5 minutes. Please watch for notifications.'
            },
            fr: {
                title: '✅ Message Envoyé avec Succès!',
                message: 'Merci de nous avoir contactés. Notre système IA traitera votre message et répondra dans 5 minutes. Veuillez surveiller les notifications.'
            }
        };

        if (window.notificationSystem) {
            window.notificationSystem.success(messages[lang].title, messages[lang].message, 8000);
        }
    }

    logMessage(message, response) {
        const log = {
            timestamp: new Date().toISOString(),
            from: message.email,
            subject: message.subject,
            language: message.language,
            processed: true,
            responseTime: '< 5 minutes'
        };

        const logs = JSON.parse(localStorage.getItem('message_logs') || '[]');
        logs.unshift(log);
        if (logs.length > 100) logs.pop();
        localStorage.setItem('message_logs', JSON.stringify(logs));
    }
}

// تهيئة النظام
document.addEventListener('DOMContentLoaded', () => {
    window.autoReplySystem = new AutoReplySystem();
});
