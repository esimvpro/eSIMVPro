// RDP Section Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars when in viewport
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.rdp-progress-fill');
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                });
            }
        });
    }, observerOptions);

    const rdpSection = document.querySelector('.rdp-section');
    if (rdpSection) {
        progressObserver.observe(rdpSection);
    }

    // Add parallax effect to phone
    const rdpPhone = document.querySelector('.rdp-phone-container');
    if (rdpPhone) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const phoneOffset = rdpPhone.offsetTop;
            const windowHeight = window.innerHeight;
            
            if (scrolled > phoneOffset - windowHeight && scrolled < phoneOffset + rdpPhone.offsetHeight) {
                const parallax = (scrolled - (phoneOffset - windowHeight)) * 0.1;
                rdpPhone.style.transform = `translateY(${parallax}px)`;
            }
        });
    }

    // Animate feature cards on scroll
    const featureCards = document.querySelectorAll('.rdp-feature-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 200);
            }
        });
    }, observerOptions);

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(50px)';
        card.style.transition = 'all 0.6s ease-out';
        cardObserver.observe(card);
    });

    // Dynamic status updates
    const statusBadge = document.querySelector('.rdp-status-badge');
    if (statusBadge) {
        setInterval(() => {
            statusBadge.style.transform = 'scale(1.05)';
            setTimeout(() => {
                statusBadge.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }

    // Simulate real-time CPU/RAM updates
    const cpuValue = document.querySelector('.rdp-spec-value[data-type="cpu"]');
    const ramValue = document.querySelector('.rdp-spec-value[data-type="ram"]');
    
    if (cpuValue && ramValue) {
        setInterval(() => {
            const cpu = (Math.random() * 10 + 5).toFixed(1);
            const ram = (Math.random() * 2 + 2).toFixed(1);
            cpuValue.textContent = `${cpu}%`;
            ramValue.textContent = `${ram} GB`;
        }, 2000);
    }
});
