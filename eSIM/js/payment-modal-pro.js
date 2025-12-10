// Professional Payment Modal - World Class
let currentPlan = { months: '', price: '' };
let selectedWallet = '';

function openPlanModal(months, price) {
    currentPlan = { months, price };
    
    const modal = document.getElementById('paymentModal');
    const title = document.getElementById('planTitle');
    const priceEl = document.getElementById('planPrice');
    
    const monthText = months === '5' || months === '10' ? ' أشهر' : ' شهر';
    title.textContent = 'باقة ' + months + monthText;
    priceEl.textContent = price + ' USDT';
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePlanModal() {
    const modal = document.getElementById('paymentModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    document.getElementById('paymentFormPro').reset();
    selectedWallet = '';
    document.querySelectorAll('.wallet-option').forEach(w => w.classList.remove('selected'));
}

document.addEventListener('DOMContentLoaded', function() {
    // Wallet selection
    const wallets = document.querySelectorAll('.wallet-option');
    wallets.forEach(wallet => {
        wallet.addEventListener('click', function() {
            wallets.forEach(w => w.classList.remove('selected'));
            this.classList.add('selected');
            selectedWallet = this.dataset.wallet;
            this.querySelector('.wallet-radio').checked = true;
        });
    });
    
    // Form submission
    const form = document.getElementById('paymentFormPro');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!selectedWallet) {
                showNotification('⚠️ الرجاء اختيار محفظة الدفع', 'warning');
                return;
            }
            
            const btn = this.querySelector('.submit-btn');
            const originalHTML = btn.innerHTML;
            
            btn.innerHTML = '<div style="width: 20px; height: 20px; border: 3px solid #fff; border-top-color: transparent; border-radius: 50%; animation: spin 0.6s linear infinite;"></div><span>جاري المعالجة...</span>';
            btn.disabled = true;
            
            setTimeout(() => {
                showNotification('✅ تم إرسال طلبك بنجاح! سنتواصل معك عبر ' + selectedWallet, 'success');
                closePlanModal();
                btn.innerHTML = originalHTML;
                btn.disabled = false;
            }, 2000);
        });
    }
    
    // Close on outside click
    document.getElementById('paymentModal')?.addEventListener('click', function(e) {
        if (e.target === this) closePlanModal();
    });
    
    // Close on ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closePlanModal();
    });
});

function showNotification(message, type) {
    const colors = {
        success: 'linear-gradient(135deg, #10B981, #059669)',
        warning: 'linear-gradient(135deg, #F59E0B, #D97706)',
        error: 'linear-gradient(135deg, #EF4444, #DC2626)'
    };
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 24px;
        right: 24px;
        background: ${colors[type] || colors.success};
        color: #fff;
        padding: 18px 28px;
        border-radius: 16px;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        z-index: 9999999;
        font-size: 15px;
        font-weight: 700;
        animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        max-width: 400px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => notification.remove(), 400);
    }, 4000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
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
