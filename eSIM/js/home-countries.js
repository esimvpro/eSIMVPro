// Countries Data for Home Page
const COUNTRIES_BY_CONTINENT = {
    'آسيا': [
        { name: 'الإمارات', code: 'AE', flag: '🇦🇪' },
        { name: 'السعودية', code: 'SA', flag: '🇸🇦' },
        { name: 'اليابان', code: 'JP', flag: '🇯🇵' },
        { name: 'كوريا الجنوبية', code: 'KR', flag: '🇰🇷' },
        { name: 'تايلاند', code: 'TH', flag: '🇹🇭' },
        { name: 'سنغافورة', code: 'SG', flag: '🇸🇬' },
        { name: 'تركيا', code: 'TR', flag: '🇹🇷' },
        { name: 'ماليزيا', code: 'MY', flag: '🇲🇾' },
        { name: 'إندونيسيا', code: 'ID', flag: '🇮🇩' },
        { name: 'الفلبين', code: 'PH', flag: '🇵🇭' },
        { name: 'فيتنام', code: 'VN', flag: '🇻🇳' },
        { name: 'الهند', code: 'IN', flag: '🇮🇳' },
        { name: 'الصين', code: 'CN', flag: '🇨🇳' },
        { name: 'هونج كونج', code: 'HK', flag: '🇭🇰' },
        { name: 'تايوان', code: 'TW', flag: '🇹🇼' },
        { name: 'الأردن', code: 'JO', flag: '🇯🇴' },
        { name: 'الكويت', code: 'KW', flag: '🇰🇼' },
        { name: 'قطر', code: 'QA', flag: '🇶🇦' },
        { name: 'البحرين', code: 'BH', flag: '🇧🇭' },
        { name: 'عمان', code: 'OM', flag: '🇴🇲' },
        { name: 'باكستان', code: 'PK', flag: '🇵🇰' },
        { name: 'سريلانكا', code: 'LK', flag: '🇱🇰' },
        { name: 'كمبوديا', code: 'KH', flag: '🇰🇭' },
        { name: 'كازاخستان', code: 'KZ', flag: '🇰🇿' },
        { name: 'إسرائيل', code: 'IL', flag: '🇮🇱' },
        { name: 'المالديف', code: 'MV', flag: '🇲🇻' }
    ],
    'أوروبا': [
        { name: 'فرنسا', code: 'FR', flag: '🇫🇷' },
        { name: 'بريطانيا', code: 'GB', flag: '🇬🇧' },
        { name: 'ألمانيا', code: 'DE', flag: '🇩🇪' },
        { name: 'إيطاليا', code: 'IT', flag: '🇮🇹' },
        { name: 'إسبانيا', code: 'ES', flag: '🇪🇸' },
        { name: 'هولندا', code: 'NL', flag: '🇳🇱' },
        { name: 'سويسرا', code: 'CH', flag: '🇨🇭' },
        { name: 'السويد', code: 'SE', flag: '🇸🇪' },
        { name: 'النرويج', code: 'NO', flag: '🇳🇴' },
        { name: 'الدنمارك', code: 'DK', flag: '🇩🇰' },
        { name: 'بولندا', code: 'PL', flag: '🇵🇱' },
        { name: 'البرتغال', code: 'PT', flag: '🇵🇹' },
        { name: 'اليونان', code: 'GR', flag: '🇬🇷' },
        { name: 'النمسا', code: 'AT', flag: '🇦🇹' },
        { name: 'بلجيكا', code: 'BE', flag: '🇧🇪' },
        { name: 'إيرلندا', code: 'IE', flag: '🇮🇪' },
        { name: 'تشيكيا', code: 'CZ', flag: '🇨🇿' },
        { name: 'المجر', code: 'HU', flag: '🇭🇺' },
        { name: 'رومانيا', code: 'RO', flag: '🇷🇴' },
        { name: 'فنلندا', code: 'FI', flag: '🇫🇮' },
        { name: 'كرواتيا', code: 'HR', flag: '🇭🇷' },
        { name: 'سلوفينيا', code: 'SI', flag: '🇸🇮' },
        { name: 'بلغاريا', code: 'BG', flag: '🇧🇬' },
        { name: 'قبرص', code: 'CY', flag: '🇨🇾' },
        { name: 'مالطا', code: 'MT', flag: '🇲🇹' },
        { name: 'لوكسمبرج', code: 'LU', flag: '🇱🇺' },
        { name: 'أوكرانيا', code: 'UA', flag: '🇺🇦' },
        { name: 'سلوفاكيا', code: 'SK', flag: '🇸🇰' },
        { name: 'إستونيا', code: 'EE', flag: '🇪🇪' },
        { name: 'لاتفيا', code: 'LV', flag: '🇱🇻' },
        { name: 'ليتوانيا', code: 'LT', flag: '🇱🇹' },
        { name: 'أيسلندا', code: 'IS', flag: '🇮🇸' },
        { name: 'ألبانيا', code: 'AL', flag: '🇦🇱' }
    ],
    'أمريكا الشمالية': [
        { name: 'الولايات المتحدة', code: 'US', flag: '🇺🇸' },
        { name: 'كندا', code: 'CA', flag: '🇨🇦' },
        { name: 'المكسيك', code: 'MX', flag: '🇲🇽' },
        { name: 'كوستاريكا', code: 'CR', flag: '🇨🇷' },
        { name: 'بنما', code: 'PA', flag: '🇵🇦' },
        { name: 'غواتيمالا', code: 'GT', flag: '🇬🇹' },
        { name: 'السلفادور', code: 'SV', flag: '🇸🇻' },
        { name: 'نيكاراجوا', code: 'NI', flag: '🇳🇮' },
        { name: 'بورتوريكو', code: 'PR', flag: '🇵🇷' }
    ],
    'أمريكا الجنوبية': [
        { name: 'البرازيل', code: 'BR', flag: '🇧🇷' },
        { name: 'الأرجنتين', code: 'AR', flag: '🇦🇷' },
        { name: 'تشيلي', code: 'CL', flag: '🇨🇱' },
        { name: 'كولومبيا', code: 'CO', flag: '🇨🇴' },
        { name: 'بيرو', code: 'PE', flag: '🇵🇪' },
        { name: 'الإكوادور', code: 'EC', flag: '🇪🇨' },
        { name: 'أوروجواي', code: 'UY', flag: '🇺🇾' },
        { name: 'باراجواي', code: 'PY', flag: '🇵🇾' }
    ],
    'أفريقيا': [
        { name: 'مصر', code: 'EG', flag: '🇪🇬' },
        { name: 'جنوب أفريقيا', code: 'ZA', flag: '🇿🇦' },
        { name: 'المغرب', code: 'MA', flag: '🇲🇦' },
        { name: 'تونس', code: 'TN', flag: '🇹🇳' },
        { name: 'كينيا', code: 'KE', flag: '🇰🇪' },
        { name: 'نيجيريا', code: 'NG', flag: '🇳🇬' },
        { name: 'غانا', code: 'GH', flag: '🇬🇭' },
        { name: 'تنزانيا', code: 'TZ', flag: '🇹🇿' },
        { name: 'أوغندا', code: 'UG', flag: '🇺🇬' },
        { name: 'موزمبيق', code: 'MZ', flag: '🇲🇿' },
        { name: 'الجزائر', code: 'DZ', flag: '🇩🇿' }
    ],
    'أوقيانوسيا': [
        { name: 'أستراليا', code: 'AU', flag: '🇦🇺' },
        { name: 'نيوزيلندا', code: 'NZ', flag: '🇳🇿' }
    ]
};

// Render Countries
function renderHomeCountries() {
    const container = document.getElementById('continentsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.entries(COUNTRIES_BY_CONTINENT).forEach(([continent, countries]) => {
        const section = document.createElement('section');
        section.className = 'continent-section';
        
        const title = document.createElement('h2');
        title.className = 'continent-title';
        title.textContent = continent;
        section.appendChild(title);
        
        const grid = document.createElement('div');
        grid.className = 'countries-grid';
        
        countries.forEach((country, i) => {
            const card = document.createElement('div');
            card.className = 'country-card';
            card.style.animationDelay = `${i * 0.02}s`;
            
            card.innerHTML = `
                <div class="country-flag">
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

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHomeCountries);
} else {
    renderHomeCountries();
}
