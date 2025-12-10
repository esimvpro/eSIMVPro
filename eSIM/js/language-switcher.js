// ============================================
// LANGUAGE SWITCHER - PROFESSIONAL SYSTEM
// Multi-language Support (Arabic, English, French)
// ============================================

class LanguageSwitcher {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'ar';
        this.translations = {};
        this.init();
    }

    async init() {
        try {
            // Load translations
            const response = await fetch('js/translations.json');
            this.translations = await response.json();
            
            // Set initial language
            this.setLanguage(this.currentLanguage, true);
            
            // Initialize event listeners
            this.setupEventListeners();
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    setupEventListeners() {
        // Language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = btn.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });

        // Language dropdown
        const langDropdown = document.getElementById('langDropdown');
        if (langDropdown) {
            langDropdown.addEventListener('click', () => {
                const menu = document.getElementById('langMenu');
                if (menu) {
                    menu.classList.toggle('active');
                }
            });
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            const langContainer = document.getElementById('langContainer');
            if (langContainer && !langContainer.contains(e.target)) {
                const menu = document.getElementById('langMenu');
                if (menu) {
                    menu.classList.remove('active');
                }
            }
        });
    }

    setLanguage(lang, isInitial = false) {
        if (!this.translations[lang]) {
            console.error(`Language ${lang} not found`);
            return;
        }

        // Save to localStorage
        localStorage.setItem('language', lang);
        this.currentLanguage = lang;

        // Set HTML direction and lang attribute
        document.documentElement.lang = lang;
        document.documentElement.dir = this.translations[lang].direction;
        document.body.dir = this.translations[lang].direction;

        // Update all translatable elements
        this.updatePageContent();

        // Close dropdown
        const menu = document.getElementById('langMenu');
        if (menu) {
            menu.classList.remove('active');
        }

        // Add animation class if not initial load
        if (!isInitial) {
            document.body.classList.add('lang-switching');
            setTimeout(() => {
                document.body.classList.remove('lang-switching');
            }, 500);
        }

        // Update active language button
        this.updateActiveButton();
    }

    updatePageContent() {
        const trans = this.translations[this.currentLanguage];

        // Update navbar
        this.updateElement('[data-i18n="navbar.plans"]', trans.navbar.plans);
        this.updateElement('[data-i18n="navbar.countries"]', trans.navbar.countries);
        this.updateElement('[data-i18n="navbar.how_it_works"]', trans.navbar.how_it_works);
        this.updateElement('[data-i18n="navbar.faq"]', trans.navbar.faq);
        this.updateElement('[data-i18n="navbar.support"]', trans.navbar.support);
        this.updateElement('[data-i18n="navbar.dashboard"]', trans.navbar.dashboard);

        // Update hero section
        this.updateElement('[data-i18n="hero.announcement"]', trans.hero.announcement);
        this.updateElement('[data-i18n="hero.announcement_text"]', trans.hero.announcement_text);
        this.updateElement('[data-i18n="hero.title_1"]', trans.hero.title_1);
        this.updateElement('[data-i18n="hero.title_2"]', trans.hero.title_2);
        this.updateElement('[data-i18n="hero.title_accent"]', trans.hero.title_accent);
        this.updateElement('[data-i18n="hero.subtitle"]', trans.hero.subtitle);
        this.updateElement('[data-i18n="hero.description"]', trans.hero.description);
        this.updateElement('[data-i18n="hero.highlight"]', trans.hero.highlight);
        this.updateElement('[data-i18n="hero.trust_1"]', trans.hero.trust_1);
        this.updateElement('[data-i18n="hero.trust_2"]', trans.hero.trust_2);
        this.updateElement('[data-i18n="hero.trust_3"]', trans.hero.trust_3);
        this.updateElement('[data-i18n="hero.cta_primary"]', trans.hero.cta_primary);
        this.updateElement('[data-i18n="hero.cta_secondary"]', trans.hero.cta_secondary);
        this.updateElement('[data-i18n="hero.stat_countries"]', trans.hero.stat_countries);
        this.updateElement('[data-i18n="hero.stat_seconds"]', trans.hero.stat_seconds);
        this.updateElement('[data-i18n="hero.stat_users"]', trans.hero.stat_users);
        this.updateElement('[data-i18n="hero.scroll_text"]', trans.hero.scroll_text);

        // Update countries section
        this.updateElement('[data-i18n="countries.title"]', trans.countries.title);
        this.updateElement('[data-i18n="countries.subtitle"]', trans.countries.subtitle);
        this.updateElement('[data-i18n="countries.search"]', trans.countries.search, 'placeholder');

        // Update how it works section
        this.updateElement('[data-i18n="how_it_works.title"]', trans.how_it_works.title);
        this.updateElement('[data-i18n="how_it_works.subtitle"]', trans.how_it_works.subtitle);
        this.updateElement('[data-i18n="how_it_works.step_1_title"]', trans.how_it_works.step_1_title);
        this.updateElement('[data-i18n="how_it_works.step_1_desc"]', trans.how_it_works.step_1_desc);
        this.updateElement('[data-i18n="how_it_works.step_2_title"]', trans.how_it_works.step_2_title);
        this.updateElement('[data-i18n="how_it_works.step_2_desc"]', trans.how_it_works.step_2_desc);
        this.updateElement('[data-i18n="how_it_works.step_3_title"]', trans.how_it_works.step_3_title);
        this.updateElement('[data-i18n="how_it_works.step_3_desc"]', trans.how_it_works.step_3_desc);
        this.updateElement('[data-i18n="how_it_works.step_4_title"]', trans.how_it_works.step_4_title);
        this.updateElement('[data-i18n="how_it_works.step_4_desc"]', trans.how_it_works.step_4_desc);

        // Update plans section
        this.updateElement('[data-i18n="plans.title"]', trans.plans.title);
        this.updateElement('[data-i18n="plans.subtitle"]', trans.plans.subtitle);
        this.updateElement('[data-i18n="plans.starter"]', trans.plans.starter);
        this.updateElement('[data-i18n="plans.starter_price"]', trans.plans.starter_price);
        this.updateElement('[data-i18n="plans.starter_data"]', trans.plans.starter_data);
        this.updateElement('[data-i18n="plans.starter_days"]', trans.plans.starter_days);
        this.updateElement('[data-i18n="plans.recommended"]', trans.plans.recommended);
        this.updateElement('[data-i18n="plans.recommended_price"]', trans.plans.recommended_price);
        this.updateElement('[data-i18n="plans.recommended_data"]', trans.plans.recommended_data);
        this.updateElement('[data-i18n="plans.recommended_days"]', trans.plans.recommended_days);
        this.updateElement('[data-i18n="plans.professional"]', trans.plans.professional);
        this.updateElement('[data-i18n="plans.professional_price"]', trans.plans.professional_price);
        this.updateElement('[data-i18n="plans.professional_data"]', trans.plans.professional_data);
        this.updateElement('[data-i18n="plans.professional_days"]', trans.plans.professional_days);
        this.updateElement('[data-i18n="plans.choose_plan"]', trans.plans.choose_plan);

        // Update features section
        this.updateElement('[data-i18n="features.title"]', trans.features.title);
        this.updateElement('[data-i18n="features.feature_1"]', trans.features.feature_1);
        this.updateElement('[data-i18n="features.feature_1_desc"]', trans.features.feature_1_desc);
        this.updateElement('[data-i18n="features.feature_2"]', trans.features.feature_2);
        this.updateElement('[data-i18n="features.feature_2_desc"]', trans.features.feature_2_desc);
        this.updateElement('[data-i18n="features.feature_3"]', trans.features.feature_3);
        this.updateElement('[data-i18n="features.feature_3_desc"]', trans.features.feature_3_desc);
        this.updateElement('[data-i18n="features.feature_4"]', trans.features.feature_4);
        this.updateElement('[data-i18n="features.feature_4_desc"]', trans.features.feature_4_desc);
        this.updateElement('[data-i18n="features.feature_5"]', trans.features.feature_5);
        this.updateElement('[data-i18n="features.feature_5_desc"]', trans.features.feature_5_desc);
        this.updateElement('[data-i18n="features.feature_6"]', trans.features.feature_6);
        this.updateElement('[data-i18n="features.feature_6_desc"]', trans.features.feature_6_desc);

        // Update testimonials section
        this.updateElement('[data-i18n="testimonials.title"]', trans.testimonials.title);
        this.updateElement('[data-i18n="testimonials.subtitle"]', trans.testimonials.subtitle);
        this.updateElement('[data-i18n="testimonials.testimonial_1_name"]', trans.testimonials.testimonial_1_name);
        this.updateElement('[data-i18n="testimonials.testimonial_1_text"]', trans.testimonials.testimonial_1_text);
        this.updateElement('[data-i18n="testimonials.testimonial_2_name"]', trans.testimonials.testimonial_2_name);
        this.updateElement('[data-i18n="testimonials.testimonial_2_text"]', trans.testimonials.testimonial_2_text);
        this.updateElement('[data-i18n="testimonials.testimonial_3_name"]', trans.testimonials.testimonial_3_name);
        this.updateElement('[data-i18n="testimonials.testimonial_3_text"]', trans.testimonials.testimonial_3_text);

        // Update FAQ section
        this.updateElement('[data-i18n="faq.title"]', trans.faq.title);
        this.updateElement('[data-i18n="faq.q_1"]', trans.faq.q_1);
        this.updateElement('[data-i18n="faq.a_1"]', trans.faq.a_1);
        this.updateElement('[data-i18n="faq.q_2"]', trans.faq.q_2);
        this.updateElement('[data-i18n="faq.a_2"]', trans.faq.a_2);
        this.updateElement('[data-i18n="faq.q_3"]', trans.faq.q_3);
        this.updateElement('[data-i18n="faq.a_3"]', trans.faq.a_3);
        this.updateElement('[data-i18n="faq.q_4"]', trans.faq.q_4);
        this.updateElement('[data-i18n="faq.a_4"]', trans.faq.a_4);

        // Update footer section
        this.updateElement('[data-i18n="footer.company"]', trans.footer.company);
        this.updateElement('[data-i18n="footer.about"]', trans.footer.about);
        this.updateElement('[data-i18n="footer.blog"]', trans.footer.blog);
        this.updateElement('[data-i18n="footer.contact"]', trans.footer.contact);
        this.updateElement('[data-i18n="footer.support_footer"]', trans.footer.support_footer);
        this.updateElement('[data-i18n="footer.help"]', trans.footer.help);
        this.updateElement('[data-i18n="footer.legal"]', trans.footer.legal);
        this.updateElement('[data-i18n="footer.privacy"]', trans.footer.privacy);
        this.updateElement('[data-i18n="footer.terms"]', trans.footer.terms);
        this.updateElement('[data-i18n="footer.contact_us"]', trans.footer.contact_us);
        this.updateElement('[data-i18n="footer.email"]', trans.footer.email);
        this.updateElement('[data-i18n="footer.phone"]', trans.footer.phone);
        this.updateElement('[data-i18n="footer.copyright"]', trans.footer.copyright);
    }

    updateElement(selector, content, attribute = 'text') {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (attribute === 'placeholder') {
                element.placeholder = content;
            } else {
                element.textContent = content;
            }
        });
    }

    updateActiveButton() {
        // Update buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === this.currentLanguage) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update dropdown display
        const langDropdown = document.getElementById('langDropdown');
        if (langDropdown) {
            langDropdown.textContent = this.translations[this.currentLanguage].lang;
        }
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.languageSwitcher = new LanguageSwitcher();
});