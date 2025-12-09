class NotificationSystem {
    constructor() {
        this.container = null;
        this.init();
    }

    init() {
        this.container = document.createElement('div');
        this.container.className = 'notification-container';
        document.body.appendChild(this.container);
    }

    show(options) {
        const {
            title = 'إشعار',
            message = '',
            type = 'success',
            duration = 5000,
            actions = []
        } = options;

        const notification = document.createElement('div');
        notification.className = 'notification';

        const icons = {
            success: 'fa-check-circle',
            info: 'fa-info-circle',
            warning: 'fa-exclamation-triangle',
            error: 'fa-times-circle',
            message: 'fa-envelope-open-text'
        };

        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas ${icons[type] || icons.success}"></i>
            </div>
            <div class="notification-content">
                <div class="notification-title">
                    ${title}
                </div>
                <div class="notification-message">${message}</div>
                ${actions.length > 0 ? `
                    <div class="notification-actions">
                        ${actions.map((action, index) => `
                            <button class="notification-btn ${action.primary ? 'notification-btn-primary' : 'notification-btn-secondary'}" data-action="${index}">
                                ${action.label}
                            </button>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
            ${duration > 0 ? '<div class="notification-progress"></div>' : ''}
        `;

        this.container.appendChild(notification);

        notification.querySelector('.notification-close').addEventListener('click', () => {
            this.remove(notification);
        });

        actions.forEach((action, index) => {
            const btn = notification.querySelector(`[data-action="${index}"]`);
            if (btn) {
                btn.addEventListener('click', () => {
                    if (action.callback) action.callback();
                    this.remove(notification);
                });
            }
        });

        if (duration > 0) {
            setTimeout(() => this.remove(notification), duration);
        }

        return notification;
    }

    remove(notification) {
        notification.style.animation = 'slideIn 0.3s reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    success(title, message, duration = 5000) {
        return this.show({ title, message, type: 'success', duration });
    }

    info(title, message, duration = 5000) {
        return this.show({ title, message, type: 'info', duration });
    }

    warning(title, message, duration = 5000) {
        return this.show({ title, message, type: 'warning', duration });
    }

    error(title, message, duration = 5000) {
        return this.show({ title, message, type: 'error', duration });
    }

    message(title, message, actions = [], duration = 0) {
        return this.show({ title, message, type: 'message', actions, duration });
    }
}

window.notificationSystem = new NotificationSystem();
