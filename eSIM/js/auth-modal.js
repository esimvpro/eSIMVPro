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

// On page load
window.onload = function() {
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
        const userData = { name: name, email: email, loggedIn: true };
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
