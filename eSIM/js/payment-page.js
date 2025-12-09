// Wallet Data
const walletData = {
    trc20: {
        name: 'USDT TRC20',
        address: 'TF9trqZi9pxz9hF8aZ83omqtj6SFxbfD7K',
        qr: 'Wallet/TF9trqZi9pxz9hF8aZ83omqtj6SFxbfD7K.jpg'
    },
    erc20: {
        name: 'USDT ERC20',
        address: '0x3a8c9fe62a764aceaa07415d994de6f0',
        qr: 'Wallet/photo_2025-12-08_11-59-05.jpg'
    },
    solana: {
        name: 'USDT Solana',
        address: 'm4sBz5UMtD6E9JN68XRj7Apyu9prDafvVo',
        qr: 'Wallet/m4sBz5UMtD6E9JN68XRj7Apyu9prDafvVoJovfQDRSB.jpg'
    },
    card: {
        name: 'بطاقة بنكية',
        address: 'يرجى التواصل مع الدعم لإتمام الدفع',
        qr: ''
    }
};

// Get plan details from URL or localStorage
function getPlanDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan') || localStorage.getItem('selectedPlan') || '14';
    const price = urlParams.get('price') || getPriceByPlan(plan);
    
    return {
        months: plan,
        price: price
    };
}

function getPriceByPlan(plan) {
    const prices = {
        '5': 35,
        '10': 48,
        '12': 57,
        '14': 61
    };
    return prices[plan] || 61;
}

// Initialize page
window.addEventListener('DOMContentLoaded', () => {
    const planDetails = getPlanDetails();
    const monthText = planDetails.months === '5' || planDetails.months === '10' ? ' أشهر' : ' شهر';
    document.getElementById('planName').textContent = `باقة ${planDetails.months}${monthText}`;
    document.getElementById('planPrice').textContent = planDetails.price;
    document.getElementById('amountDisplay').textContent = `${planDetails.price} USDT`;
});

// Countdown Timer (15 minutes)
let countdownInterval = null;

function startCountdown() {
    if (countdownInterval) clearInterval(countdownInterval);
    
    let timeLeft = 15 * 60;
    
    const qrCountdown = document.getElementById('qrCountdown');
    
    countdownInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (qrCountdown) qrCountdown.textContent = timeString;
        
        if (timeLeft <= 60) {
            if (qrCountdown) qrCountdown.parentElement.style.background = 'linear-gradient(135deg, #ff0000, #cc0000)';
        } else if (timeLeft <= 300) {
            if (qrCountdown) qrCountdown.parentElement.style.background = 'linear-gradient(135deg, #ff9800, #f57c00)';
        }
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            showTimeoutMessage();
        }
        
        timeLeft--;
    }, 1000);
}

// Show timeout message
function showTimeoutMessage() {
    alert('⏰ انتهى الوقت المخصص للدفع. يرجى البدء من جديد.');
    window.location.href = 'index.html';
}

// Toggle Dropdown
function toggleDropdown() {
    const header = document.querySelector('.dropdown-header');
    const menu = document.getElementById('dropdownMenu');
    header.classList.toggle('active');
    menu.classList.toggle('active');
}

// Select Wallet
function selectWallet(walletType) {
    const wallet = walletData[walletType];
    
    // Update dropdown display
    document.getElementById('selectedWallet').textContent = wallet.name;
    document.querySelector('.selected-subtitle').textContent = 'تم الاختيار - انقر لتغيير';
    
    // Close dropdown
    document.querySelector('.dropdown-header').classList.remove('active');
    document.getElementById('dropdownMenu').classList.remove('active');
    
    // Handle card payment
    if (walletType === 'card') {
        showNotification('يرجى التواصل مع الدعم عبر واتساب لإتمام الدفع بالبطاقة', 'info');
        const whatsappNumber = '44123456789';
        const planDetails = getPlanDetails();
        const message = `مرحباً، أريد الدفع بالبطاقة البنكية للباقة ${planDetails.months} شهر بقيمة ${planDetails.price} USDT`;
        setTimeout(() => {
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
        }, 1500);
        return;
    }
    
    // Update wallet details
    document.getElementById('walletAddress').value = wallet.address;
    document.getElementById('qrCode').src = wallet.qr;
    
    // Show wallet details
    const detailsSection = document.getElementById('walletDetails');
    detailsSection.style.display = 'block';
    
    // Start countdown
    startCountdown();
    
    // Smooth scroll to details
    setTimeout(() => {
        detailsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// Copy Address
function copyAddress() {
    const addressInput = document.getElementById('walletAddress');
    addressInput.select();
    addressInput.setSelectionRange(0, 99999); // For mobile
    
    navigator.clipboard.writeText(addressInput.value).then(() => {
        const copyIcon = document.getElementById('copyIcon');
        const originalIcon = copyIcon.textContent;
        
        copyIcon.className = 'fas fa-check';
        
        // Show success message
        showNotification('تم نسخ العنوان بنجاح!', 'success');
        
        setTimeout(() => {
            copyIcon.className = 'fas fa-copy';
        }, 2000);
    }).catch(err => {
        showNotification('فشل النسخ. حاول مرة أخرى.', 'error');
    });
}

// Confirm Payment
function confirmPayment() {
    const walletDetails = document.getElementById('walletDetails');
    if (!walletDetails || walletDetails.style.display === 'none') {
        showNotification('⚠️ يرجى اختيار طريقة الدفع أولاً', 'warning');
        return;
    }
    
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>جاري التحقق من البلوكتشين...</span>';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    
    const planDetails = getPlanDetails();
    const walletAddress = document.getElementById('walletAddress').value;
    
    // Store order for manual verification
    const orderInfo = {
        plan: planDetails.months,
        price: planDetails.price,
        walletAddress: walletAddress,
        timestamp: new Date().toISOString(),
        status: 'pending'
    };
    
    localStorage.setItem('pendingOrder', JSON.stringify(orderInfo));
    
    // Simulate blockchain verification (3-5 seconds)
    setTimeout(() => {
        showNotification('🔍 تم إرسال طلبك للتحقق. سيتم مراجعة المعاملة وإرسال eSIM فور التأكيد.', 'success');
        
        setTimeout(() => {
            const whatsappNumber = '44123456789';
            const message = `✅ تم إرسال الدفع\nالباقة: ${planDetails.months} شهر\nالمبلغ: ${planDetails.price} USDT\nالمحفظة: ${walletAddress}\n\nيرجى التحقق وإرسال eSIM`;
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
            
            btn.innerHTML = '<i class="fas fa-check-circle"></i><span>تم إرسال الطلب</span>';
            btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            // Show payment reminder modal
            setTimeout(() => {
                showPaymentReminderModal();
            }, 500);
        }, 2000);
    }, 3000);
}

// Show Payment Reminder Modal
function showPaymentReminderModal() {
    const modal = document.createElement('div');
    modal.className = 'payment-reminder-modal';
    modal.innerHTML = `
        <div class="reminder-overlay" onclick="closeReminderModal()"></div>
        <div class="reminder-content">
            <div class="reminder-icon">
                <i class="fas fa-exclamation-circle"></i>
            </div>
            <h2>تنبيه هام</h2>
            <p>يجب إتمام الدفع أولاً لاستلام رمز QR لـ eSIM</p>
            <div class="reminder-steps">
                <div class="step-item">
                    <div class="step-number">1</div>
                    <div class="step-text">أرسل المبلغ للمحفظة المحددة</div>
                </div>
                <div class="step-item">
                    <div class="step-number">2</div>
                    <div class="step-text">انتظر التحقق من المعاملة</div>
                </div>
                <div class="step-item">
                    <div class="step-number">3</div>
                    <div class="step-text">استلم eSIM في صفحة مستقلة</div>
                </div>
            </div>
            <button onclick="closeReminderModal()" class="reminder-btn">
                <i class="fas fa-check"></i>
                فهمت، سأقوم بالدفع الآن
            </button>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeReminderModal() {
    const modal = document.querySelector('.payment-reminder-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

// Show Notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#ed8936'};
        color: white;
        padding: 20px 30px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        font-weight: 600;
        font-size: 16px;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Prevent page refresh on form submit
document.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Warn before leaving page
window.addEventListener('beforeunload', (e) => {
    const detailsVisible = document.getElementById('walletDetails').style.display !== 'none';
    if (detailsVisible) {
        e.preventDefault();
        e.returnValue = 'هل أنت متأكد من مغادرة الصفحة؟ قد تفقد معلومات الدفع.';
    }
});
