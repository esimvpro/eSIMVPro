// Country Names Translation using Intl.DisplayNames API
function getCountryName(code, lang) {
    try {
        const displayNames = new Intl.DisplayNames([lang], { type: 'region' });
        return displayNames.of(code);
    } catch (e) {
        return null;
    }
}

// Get translated country name based on current language
function getTranslatedCountryName(country, lang) {
    const translatedName = getCountryName(country.code, lang);
    return translatedName || country.name;
}

// Update window object to make it accessible globally
window.getTranslatedCountryName = getTranslatedCountryName;
