// Show user account in header
function showUserAccount(userData) {
    const userAccount = document.getElementById('userAccount');
    const userName = document.getElementById('userName');
    
    if (userData.name) {
        userName.textContent = userData.name;
    } else if (userData.email) {
        userName.textContent = userData.email.split('@')[0];
    }
    
    userAccount.style.display = 'flex';
}

// Close modal
function closeAuthModal() {
    const user = localStorage.getItem('user');
    if (user) {
        document.getElementById('authModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    } else {
        alert('⚠️ يجب تسجيل الدخول أولاً للمتابعة');
    }
}

// Toggle user menu
function toggleUserMenu() {
    const menu = document.getElementById('userMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// Change account
function changeAccount() {
    document.getElementById('userMenu').style.display = 'none';
    document.getElementById('authModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Logout
function logout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        localStorage.removeItem('user');
        document.getElementById('userAccount').style.display = 'none';
        document.getElementById('userMenu').style.display = 'none';
        document.getElementById('authModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
        alert('✅ تم تسجيل الخروج بنجاح');
    }
}

// Switch tabs
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('registerTab').classList.remove('active');
}

function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginTab').classList.remove('active');
    document.getElementById('registerTab').classList.add('active');
}

// Populate country dropdown
function populateCountryDropdown() {
    const countrySelect = document.getElementById('registerCountry');
    if (!countrySelect) return;
    
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
    
    Object.entries(COUNTRIES_BY_CONTINENT).forEach(([continent, countries]) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = continent;
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.code;
            option.textContent = `${country.flag} ${country.name}`;
            optgroup.appendChild(option);
        });
        countrySelect.appendChild(optgroup);
    });
}

// On page load
window.onload = function() {
    populateCountryDropdown();
    
    // Check if user logged in
    const user = localStorage.getItem('user');
    
    if (user) {
        // User logged in - show account icon
        showUserAccount(JSON.parse(user));
    } else {
        // User not logged in - show modal after 10 seconds
        setTimeout(function() {
            document.getElementById('authModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }, 10000);
    }
    
    // Login form
    document.getElementById('loginFormElement').onsubmit = function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const userData = { email: email, loggedIn: true };
        localStorage.setItem('user', JSON.stringify(userData));
        
        alert('✅ تم تسجيل الدخول بنجاح!');
        document.getElementById('authModal').style.display = 'none';
        document.body.style.overflow = 'auto';
        showUserAccount(userData);
    };
    
    // Register form
    document.getElementById('registerFormElement').onsubmit = function(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const countrySelect = document.getElementById('registerCountry');
        const countryCode = countrySelect.value;
        const countryName = countrySelect.options[countrySelect.selectedIndex].text.split(' ').slice(1).join(' ');
        const userData = { name: name, email: email, country: countryName, countryCode: countryCode, loggedIn: true };
        localStorage.setItem('user', JSON.stringify(userData));
        
        alert('✅ تم إنشاء الحساب بنجاح!');
        document.getElementById('authModal').style.display = 'none';
        document.body.style.overflow = 'auto';
        showUserAccount(userData);
    };
    
    // Block links without login
    const links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.onclick = function(e) {
            const user = localStorage.getItem('user');
            if (!user && !link.href.includes('#')) {
                e.preventDefault();
                alert('⚠️ يجب تسجيل الدخول أولاً للمتابعة');
                document.getElementById('authModal').style.display = 'flex';
            }
        };
    });
    
    // Prevent closing modal by clicking outside
    document.getElementById('authModal').onclick = function(e) {
        if (e.target.id === 'authModal') {
            const user = localStorage.getItem('user');
            if (!user) {
                alert('⚠️ يجب تسجيل الدخول أولاً للمتابعة');
            } else {
                closeAuthModal();
            }
        }
    };
    
    // Close user menu when clicking outside
    document.addEventListener('click', function(e) {
        const userAccount = document.getElementById('userAccount');
        const userMenu = document.getElementById('userMenu');
        if (userAccount && userMenu && !userAccount.contains(e.target) && !userMenu.contains(e.target)) {
            userMenu.style.display = 'none';
        }
    });
};
