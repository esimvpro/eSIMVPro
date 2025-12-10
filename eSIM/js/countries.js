// Countries Data Organized by Continents
const COUNTRIES_BY_CONTINENT = {
    'آسيا': [
        { name: 'الإمارات', code: 'AE', flag: '🇦🇪', esim: 'Vodafone International eSIM' },
        { name: 'السعودية', code: 'SA', flag: '🇸🇦', esim: 'Vodafone International eSIM' },
        { name: 'اليابان', code: 'JP', flag: '🇯🇵', esim: 'Vodafone International eSIM' },
        { name: 'كوريا الجنوبية', code: 'KR', flag: '🇰🇷', esim: 'Vodafone International eSIM' },
        { name: 'تايلاند', code: 'TH', flag: '🇹🇭', esim: 'Vodafone International eSIM' },
        { name: 'سنغافورة', code: 'SG', flag: '🇸🇬', esim: 'Vodafone International eSIM' },
        { name: 'تركيا', code: 'TR', flag: '🇹🇷', esim: 'Vodafone International eSIM' },
        { name: 'ماليزيا', code: 'MY', flag: '🇲🇾', esim: 'Vodafone International eSIM' },
        { name: 'إندونيسيا', code: 'ID', flag: '🇮🇩', esim: 'Vodafone International eSIM' },
        { name: 'الفلبين', code: 'PH', flag: '🇵🇭', esim: 'Vodafone International eSIM' },
        { name: 'فيتنام', code: 'VN', flag: '🇻🇳', esim: 'Vodafone International eSIM' },
        { name: 'الهند', code: 'IN', flag: '🇮🇳', esim: 'Vodafone International eSIM' },
        { name: 'الصين', code: 'CN', flag: '🇨🇳', esim: 'Vodafone International eSIM' },
        { name: 'هونج كونج', code: 'HK', flag: '🇭🇰', esim: 'Vodafone International eSIM' },
        { name: 'تايوان', code: 'TW', flag: '🇹🇼', esim: 'Vodafone International eSIM' },
        { name: 'الأردن', code: 'JO', flag: '🇯🇴', esim: 'Vodafone International eSIM' },
        { name: 'الكويت', code: 'KW', flag: '🇰🇼', esim: 'Vodafone International eSIM' },
        { name: 'قطر', code: 'QA', flag: '🇶🇦', esim: 'Vodafone International eSIM' },
        { name: 'البحرين', code: 'BH', flag: '🇧🇭', esim: 'Vodafone International eSIM' },
        { name: 'عمان', code: 'OM', flag: '🇴🇲', esim: 'Vodafone International eSIM' },
        { name: 'باكستان', code: 'PK', flag: '🇵🇰', esim: 'Vodafone International eSIM' },
        { name: 'سريلانكا', code: 'LK', flag: '🇱🇰', esim: 'Vodafone International eSIM' },
        { name: 'كمبوديا', code: 'KH', flag: '🇰🇭', esim: 'Vodafone International eSIM' },
        { name: 'كازاخستان', code: 'KZ', flag: '🇰🇿', esim: 'Vodafone International eSIM' },
        { name: 'إسرائيل', code: 'IL', flag: '🇮🇱', esim: 'Vodafone International eSIM' },
        { name: 'المالديف', code: 'MV', flag: '🇲🇻', esim: 'Vodafone International eSIM' }
    ],
    'أوروبا': [
        { name: 'فرنسا', code: 'FR', flag: '🇫🇷', esim: 'Vodafone International eSIM' },
        { name: 'بريطانيا', code: 'GB', flag: '🇬🇧', esim: 'Vodafone International eSIM' },
        { name: 'ألمانيا', code: 'DE', flag: '🇩🇪', esim: 'Vodafone International eSIM' },
        { name: 'إيطاليا', code: 'IT', flag: '🇮🇹', esim: 'Vodafone International eSIM' },
        { name: 'إسبانيا', code: 'ES', flag: '🇪🇸', esim: 'Vodafone International eSIM' },
        { name: 'هولندا', code: 'NL', flag: '🇳🇱', esim: 'Vodafone International eSIM' },
        { name: 'سويسرا', code: 'CH', flag: '🇨🇭', esim: 'Vodafone International eSIM' },
        { name: 'السويد', code: 'SE', flag: '🇸🇪', esim: 'Vodafone International eSIM' },
        { name: 'النرويج', code: 'NO', flag: '🇳🇴', esim: 'Vodafone International eSIM' },
        { name: 'الدنمارك', code: 'DK', flag: '🇩🇰', esim: 'Vodafone International eSIM' },
        { name: 'بولندا', code: 'PL', flag: '🇵🇱', esim: 'Vodafone International eSIM' },
        { name: 'البرتغال', code: 'PT', flag: '🇵🇹', esim: 'Vodafone International eSIM' },
        { name: 'اليونان', code: 'GR', flag: '🇬🇷', esim: 'Vodafone International eSIM' },
        { name: 'النمسا', code: 'AT', flag: '🇦🇹', esim: 'Vodafone International eSIM' },
        { name: 'بلجيكا', code: 'BE', flag: '🇧🇪', esim: 'Vodafone International eSIM' },
        { name: 'إيرلندا', code: 'IE', flag: '🇮🇪', esim: 'Vodafone International eSIM' },
        { name: 'تشيكيا', code: 'CZ', flag: '🇨🇿', esim: 'Vodafone International eSIM' },
        { name: 'المجر', code: 'HU', flag: '🇭🇺', esim: 'Vodafone International eSIM' },
        { name: 'رومانيا', code: 'RO', flag: '🇷🇴', esim: 'Vodafone International eSIM' },
        { name: 'فنلندا', code: 'FI', flag: '🇫🇮', esim: 'Vodafone International eSIM' },
        { name: 'كرواتيا', code: 'HR', flag: '🇭🇷', esim: 'Vodafone International eSIM' },
        { name: 'سلوفينيا', code: 'SI', flag: '🇸🇮', esim: 'Vodafone International eSIM' },
        { name: 'بلغاريا', code: 'BG', flag: '🇧🇬', esim: 'Vodafone International eSIM' },
        { name: 'قبرص', code: 'CY', flag: '🇨🇾', esim: 'Vodafone International eSIM' },
        { name: 'مالطا', code: 'MT', flag: '🇲🇹', esim: 'Vodafone International eSIM' },
        { name: 'لوكسمبرج', code: 'LU', flag: '🇱🇺', esim: 'Vodafone International eSIM' },
        { name: 'أوكرانيا', code: 'UA', flag: '🇺🇦', esim: 'Vodafone International eSIM' },
        { name: 'سلوفاكيا', code: 'SK', flag: '🇸🇰', esim: 'Vodafone International eSIM' },
        { name: 'إستونيا', code: 'EE', flag: '🇪🇪', esim: 'Vodafone International eSIM' },
        { name: 'لاتفيا', code: 'LV', flag: '🇱🇻', esim: 'Vodafone International eSIM' },
        { name: 'ليتوانيا', code: 'LT', flag: '🇱🇹', esim: 'Vodafone International eSIM' },
        { name: 'أيسلندا', code: 'IS', flag: '🇮🇸', esim: 'Vodafone International eSIM' },
        { name: 'ألبانيا', code: 'AL', flag: '🇦🇱', esim: 'Vodafone International eSIM' }
    ],
    'أمريكا الشمالية': [
        { name: 'الولايات المتحدة', code: 'US', flag: '🇺🇸', esim: 'Vodafone International eSIM' },
        { name: 'كندا', code: 'CA', flag: '🇨🇦', esim: 'Vodafone International eSIM' },
        { name: 'المكسيك', code: 'MX', flag: '🇲🇽', esim: 'Vodafone International eSIM' },
        { name: 'كوستاريكا', code: 'CR', flag: '🇨🇷', esim: 'Vodafone International eSIM' },
        { name: 'بنما', code: 'PA', flag: '🇵🇦', esim: 'Vodafone International eSIM' },
        { name: 'غواتيمالا', code: 'GT', flag: '🇬🇹', esim: 'Vodafone International eSIM' },
        { name: 'السلفادور', code: 'SV', flag: '🇸🇻', esim: 'Vodafone International eSIM' },
        { name: 'نيكاراجوا', code: 'NI', flag: '🇳🇮', esim: 'Vodafone International eSIM' },
        { name: 'بورتوريكو', code: 'PR', flag: '🇵🇷', esim: 'Vodafone International eSIM' }
    ],
    'أمريكا الجنوبية': [
        { name: 'البرازيل', code: 'BR', flag: '🇧🇷', esim: 'Vodafone International eSIM' },
        { name: 'الأرجنتين', code: 'AR', flag: '🇦🇷', esim: 'Vodafone International eSIM' },
        { name: 'تشيلي', code: 'CL', flag: '🇨🇱', esim: 'Vodafone International eSIM' },
        { name: 'كولومبيا', code: 'CO', flag: '🇨🇴', esim: 'Vodafone International eSIM' },
        { name: 'بيرو', code: 'PE', flag: '🇵🇪', esim: 'Vodafone International eSIM' },
        { name: 'الإكوادور', code: 'EC', flag: '🇪🇨', esim: 'Vodafone International eSIM' },
        { name: 'أوروجواي', code: 'UY', flag: '🇺🇾', esim: 'Vodafone International eSIM' },
        { name: 'باراجواي', code: 'PY', flag: '🇵🇾', esim: 'Vodafone International eSIM' }
    ],
    'أفريقيا': [
        { name: 'مصر', code: 'EG', flag: '🇪🇬', esim: 'Vodafone International eSIM' },
        { name: 'جنوب أفريقيا', code: 'ZA', flag: '🇿🇦', esim: 'Vodafone International eSIM' },
        { name: 'المغرب', code: 'MA', flag: '🇲🇦', esim: 'Vodafone International eSIM' },
        { name: 'تونس', code: 'TN', flag: '🇹🇳', esim: 'Vodafone International eSIM' },
        { name: 'كينيا', code: 'KE', flag: '🇰🇪', esim: 'Vodafone International eSIM' },
        { name: 'نيجيريا', code: 'NG', flag: '🇳🇬', esim: 'Vodafone International eSIM' },
        { name: 'غانا', code: 'GH', flag: '🇬🇭', esim: 'Vodafone International eSIM' },
        { name: 'تنزانيا', code: 'TZ', flag: '🇹🇿', esim: 'Vodafone International eSIM' },
        { name: 'أوغندا', code: 'UG', flag: '🇺🇬', esim: 'Vodafone International eSIM' },
        { name: 'موزمبيق', code: 'MZ', flag: '🇲🇿', esim: 'Vodafone International eSIM' },
        { name: 'الجزائر', code: 'DZ', flag: '🇩🇿', esim: 'Vodafone International eSIM' }
    ],
    'أوقيانوسيا': [
        { name: 'أستراليا', code: 'AU', flag: '🇦🇺', esim: 'Vodafone International eSIM' },
        { name: 'نيوزيلندا', code: 'NZ', flag: '🇳🇿', esim: 'Vodafone International eSIM' }
    ]
};

// Render Countries by Continents
function renderCountries() {
    const container = document.getElementById('continentsContainer');
    const noResults = document.getElementById('noResults');
    
    if (!container) return;
    
    container.innerHTML = '';
    if (noResults) noResults.style.display = 'none';
    
    Object.entries(COUNTRIES_BY_CONTINENT).forEach(([continent, countries]) => {
        const section = document.createElement('section');
        section.className = 'continent-section';
        
        const title = document.createElement('h2');
        title.className = 'continent-title';
        title.textContent = continent;
        section.appendChild(title);
        
        const grid = document.createElement('div');
        grid.className = 'countries-grid';
        grid.setAttribute('role', 'list');
        
        countries.forEach((country, i) => {
            const card = document.createElement('article');
            card.className = 'country-card';
            card.style.animationDelay = `${i * 0.02}s`;
            card.setAttribute('role', 'listitem');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', `${country.name} - ${country.esim}`);
            
            card.innerHTML = `
                <div class="country-flag" aria-hidden="true">
                    <img src="https://flagcdn.com/w320/${country.code.toLowerCase()}.png" alt="${country.name}" loading="lazy">
                    <span class="flag-emoji">${country.flag}</span>
                </div>
                <h3 class="country-name">${country.name}</h3>
            `;
            
            grid.appendChild(card);
        });
        
        section.appendChild(grid);
        container.appendChild(section);
    });
}

// Search Functionality
let searchTimeout;
const searchInput = document.getElementById('countrySearch');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const term = e.target.value.trim().toLowerCase();
        const container = document.getElementById('continentsContainer');
        const noResults = document.getElementById('noResults');
        
        if (!term) {
            renderCountries();
            return;
        }
        
        let hasResults = false;
        container.innerHTML = '';
        
        Object.entries(COUNTRIES_BY_CONTINENT).forEach(([continent, countries]) => {
            const filtered = countries.filter(country => 
                country.name.toLowerCase().includes(term) || 
                country.esim.toLowerCase().includes(term) ||
                country.code.toLowerCase().includes(term)
            );
            
            if (filtered.length > 0) {
                hasResults = true;
                const section = document.createElement('section');
                section.className = 'continent-section';
                
                const title = document.createElement('h2');
                title.className = 'continent-title';
                title.textContent = window.continentTranslations ? window.continentTranslations[continent] : continent;
                section.appendChild(title);
                
                const grid = document.createElement('div');
                grid.className = 'countries-grid';
                
                filtered.forEach((country, i) => {
                    const card = document.createElement('article');
                    card.className = 'country-card';
                    card.style.animationDelay = `${i * 0.02}s`;
                    card.setAttribute('tabindex', '0');
                    
                    card.innerHTML = `
                        <div class="country-flag" aria-hidden="true">
                            <img src="https://flagcdn.com/w320/${country.code.toLowerCase()}.png" alt="${country.name}" loading="lazy">
                            <span class="flag-emoji">${country.flag}</span>
                        </div>
                        <h3 class="country-name">${country.name}</h3>
                    `;
                    
                    grid.appendChild(card);
                });
                
                section.appendChild(grid);
                container.appendChild(section);
            }
        });
        
        noResults.style.display = hasResults ? 'none' : 'block';
    }, 300);
    });
}

// Mobile Menu
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const isExpanded = navMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.target.classList.contains('country-card') && e.key === 'Enter') {
        e.target.click();
    }
});

// Initialize
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => renderCountries());
} else {
    setTimeout(() => renderCountries(), 1);
}
