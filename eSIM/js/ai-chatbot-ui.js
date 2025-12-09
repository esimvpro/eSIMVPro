class AIChatbotUI {
    constructor() {
        this.aiSystem = new AISupportSystem();
        this.currentLanguage = document.documentElement.lang || 'ar';
        this.isOpen = false;
        this.init();
    }

    init() {
        this.createChatWidget();
        this.attachEventListeners();
        this.showWelcomeMessage();
    }

    createChatWidget() {
        const widget = document.createElement('div');
        widget.className = 'ai-chat-widget';
        widget.innerHTML = `
            <button class="chat-toggle-btn" id="chatToggle">
                <svg viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                </svg>
                <span class="chat-notification-badge" id="chatBadge" style="display:none;">1</span>
            </button>

            <div class="chat-window" id="chatWindow">
                <div class="chat-header">
                    <div class="chat-header-info">
                        <div class="chat-avatar">🤖</div>
                        <div class="chat-status">
                            <h3>${this.currentLanguage === 'ar' ? 'مساعد eSIM الذكي' : 'eSIM AI Assistant'}</h3>
                            <div class="chat-status-indicator">
                                <span class="status-dot"></span>
                                <span>${this.currentLanguage === 'ar' ? 'متصل الآن' : 'Online now'}</span>
                            </div>
                        </div>
                    </div>
                    <button class="chat-close-btn" id="chatClose">✕</button>
                </div>

                <div class="chat-messages" id="chatMessages"></div>

                <div class="chat-input-area">
                    <input 
                        type="text" 
                        class="chat-input" 
                        id="chatInput" 
                        placeholder="${this.currentLanguage === 'ar' ? 'اكتب رسالتك هنا...' : 'Type your message...'}"
                    />
                    <button class="chat-send-btn" id="chatSend">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(widget);
    }

    attachEventListeners() {
        const toggleBtn = document.getElementById('chatToggle');
        const closeBtn = document.getElementById('chatClose');
        const sendBtn = document.getElementById('chatSend');
        const input = document.getElementById('chatInput');

        toggleBtn.addEventListener('click', () => this.toggleChat());
        closeBtn.addEventListener('click', () => this.toggleChat());
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    toggleChat() {
        const chatWindow = document.getElementById('chatWindow');
        const badge = document.getElementById('chatBadge');
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            chatWindow.classList.add('active');
            badge.style.display = 'none';
            document.getElementById('chatInput').focus();
        } else {
            chatWindow.classList.remove('active');
        }
    }

    showWelcomeMessage() {
        setTimeout(() => {
            const welcomeMsg = this.currentLanguage === 'ar' 
                ? 'مرحباً! 👋 أنا مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟'
                : 'Hello! 👋 I\'m your AI assistant. How can I help you today?';
            
            this.addMessage(welcomeMsg, 'bot');
            this.showSuggestions();
            
            const badge = document.getElementById('chatBadge');
            badge.style.display = 'flex';
        }, 2000);
    }

    async sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();

        if (!message) return;

        this.addMessage(message, 'user');
        input.value = '';

        this.showTypingIndicator();

        try {
            const response = await this.aiSystem.processMessage(message, this.currentLanguage);
            
            setTimeout(() => {
                this.removeTypingIndicator();
                this.addMessage(response.response, 'bot', response.confidence);
                
                if (response.suggestions && response.suggestions.length > 0) {
                    this.showSuggestions(response.suggestions);
                }
            }, 1000 + Math.random() * 1000);
        } catch (error) {
            this.removeTypingIndicator();
            this.addMessage(
                this.currentLanguage === 'ar' 
                    ? 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.'
                    : 'Sorry, an error occurred. Please try again.',
                'bot'
            );
        }
    }

    addMessage(text, sender, confidence = null) {
        const messagesContainer = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;

        const avatar = sender === 'bot' ? '🤖' : '👤';
        const time = new Date().toLocaleTimeString(this.currentLanguage === 'ar' ? 'ar-SA' : 'en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });

        let confidenceBadge = '';
        if (confidence !== null && sender === 'bot') {
            const level = confidence > 0.7 ? 'high' : confidence > 0.4 ? 'medium' : 'low';
            const label = this.currentLanguage === 'ar' 
                ? (level === 'high' ? 'دقة عالية' : level === 'medium' ? 'دقة متوسطة' : 'دقة منخفضة')
                : (level === 'high' ? 'High confidence' : level === 'medium' ? 'Medium' : 'Low');
            confidenceBadge = `<span class="confidence-indicator confidence-${level}">${label}</span>`;
        }

        messageDiv.innerHTML = `
            <div class="message-avatar">${avatar}</div>
            <div class="message-content">
                <div>${this.formatMessage(text)}</div>
                <div class="message-time">${time} ${confidenceBadge}</div>
            </div>
        `;

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    formatMessage(text) {
        return text
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>');
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot typing-message';
        typingDiv.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    removeTypingIndicator() {
        const typingMsg = document.querySelector('.typing-message');
        if (typingMsg) typingMsg.remove();
    }

    showSuggestions(suggestions = null) {
        const messagesContainer = document.getElementById('chatMessages');
        
        const existingSuggestions = messagesContainer.querySelector('.chat-suggestions');
        if (existingSuggestions) existingSuggestions.remove();

        const suggestionsDiv = document.createElement('div');
        suggestionsDiv.className = 'chat-suggestions';

        const defaultSuggestions = this.aiSystem.generateSuggestions(this.currentLanguage);
        const items = suggestions || defaultSuggestions;

        items.forEach(suggestion => {
            const btn = document.createElement('button');
            btn.className = 'suggestion-btn';
            btn.textContent = suggestion;
            btn.onclick = () => {
                document.getElementById('chatInput').value = suggestion.replace(/[❓🔧💰🌍📱💳]/g, '').trim();
                this.sendMessage();
            };
            suggestionsDiv.appendChild(btn);
        });

        messagesContainer.appendChild(suggestionsDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.aiChatbot = new AIChatbotUI();
});
