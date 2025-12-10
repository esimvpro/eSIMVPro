let currentSlide = 0;
const slidesPerView = 3;

function scrollTestimonials(direction) {
    const track = document.querySelector('.testimonials-track');
    const slides = track.children;
    const totalSlides = slides.length;
    
    currentSlide += direction;
    
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide > totalSlides - slidesPerView) currentSlide = totalSlides - slidesPerView;
    
    const slideWidth = slides[0].offsetWidth + 35;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    updateDots();
}

function goToSlide(index) {
    const track = document.querySelector('.testimonials-track');
    const slides = track.children;
    
    currentSlide = index;
    
    const slideWidth = slides[0].offsetWidth + 35;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.style.background = '#E60000';
            dot.style.width = '30px';
        } else {
            dot.style.background = 'rgba(230,0,0,0.3)';
            dot.style.width = '12px';
        }
    });
}

// Auto slide
setInterval(() => {
    const track = document.querySelector('.testimonials-track');
    const slides = track.children;
    const totalSlides = slides.length;
    
    currentSlide++;
    if (currentSlide > totalSlides - slidesPerView) currentSlide = 0;
    
    const slideWidth = slides[0].offsetWidth + 35;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    updateDots();
}, 5000);
