// Payment Modal - Professional JavaScript
let selectedPlan = { months: '', price: '' };
let selectedWallet = '';

function openPlanModal(months, price) {
    localStorage.setItem('selectedPlan', months);
    window.location.href = `payment-page.html?plan=${months}&price=${price}`;
}

function closePlanModal() {
    const modal = document.getElementById('planModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reset form
    document.getElementById('paymentForm').reset();
    selectedWallet = '';
    document.querySelectorAll('.payment-wallet-item').forEach(item => {
        item.classList.remove('selected');
    });
}

// Wallet selection
document.addEventListener('DOMContentLoaded', function() {
    const walletItems = document.querySelectorAll('.payment-wallet-item');
    
    walletItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove previous selection
            walletItems.forEach(w => w.classList.remove('selected'));
            
            // Add selection to clicked item
            this.classList.add('selected');
            selectedWallet = this.dataset.wallet;
            
            // Check radio button
            const radio = this.querySelector('.payment-wallet-radio');
            if (radio) radio.checked = true;
        });
    });
    
    // Form submission
    const form = document.getElementById('paymentForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate wallet selection
            if (!selectedWallet) {
                showNotification('⚠️ الرجاء اختيار محفظة الدفع', 'warning');
                return;
            }
            
            // Get form data
            const name = document.getElementById('nameInput').value;
            const email = document.getElementById('emailInput').value;
            const phone = document.getElementById('phoneInput').value;
            
            // Show loading state
            const btn = this.querySelector('.payment-submit-btn');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<span style="display: flex; align-items: center; justify-content: center; gap: 10px;"><span style="width: 20px; height: 20px; border: 3px solid white; border-top-color: transparent; border-radius: 50%; animation: spin 0.8s linear infinite;"></span> جاري المعالجة...</span>';
            btn.style.pointerEvents = 'none';
            
            // Simulate payment processing
            setTimeout(() => {
                // Success message
                showNotification('✅ تم إرسال طلبك بنجاح! سنتواصل معك قريباً عبر ' + selectedWallet, 'success');
                
                // Reset and close
                closePlanModal();
                btn.innerHTML = originalHTML;
                btn.style.pointerEvents = 'auto';
                
                // Log order details (in production, send to backend)
                console.log('Order Details:', {
                    plan: selectedPlan,
                    wallet: selectedWallet,
                    customer: { name, email, phone }
                });
            }, 2000);
        });
    }
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10B981, #059669)' : type === 'warning' ? 'linear-gradient(135deg, #F59E0B, #D97706)' : 'linear-gradient(135deg, #3B82F6, #2563EB)'};
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 999999;
        font-size: 1.1rem;
        font-weight: 700;
        animation: slideInRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        max-width: 400px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-in-out';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// Close modal on outside click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('planModal');
    if (e.target === modal) {
        closePlanModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePlanModal();
    }
});

// Add animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);
