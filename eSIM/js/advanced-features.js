// ميزات متقدمة إضافية لنظام الدعم الذكي

class VoiceSupport {
    constructor() {
        this.recognition = null;
        this.synthesis = window.speechSynthesis;
        this.isListening = false;
        this.initVoiceRecognition();
    }

    initVoiceRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.lang = 'ar-SA';
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
        }
    }

    startListening(callback) {
        if (!this.recognition) {
            alert('المتصفح لا يدعم التعرف على الصوت');
            return;
        }

        this.isListening = true;
        this.recognition.start();

        this.recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            callback(transcript);
        };

        this.recognition.onerror = (event) => {
            console.error('خطأ في التعرف على الصوت:', event.error);
            this.isListening = false;
        };

        this.recognition.onend = () => {
            this.isListening = false;
        };
    }

    speak(text, lang = 'ar-SA') {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        this.synthesis.speak(utterance);
    }

    stopSpeaking() {
        this.synthesis.cancel();
    }
}

class SmartSuggestions {
    constructor() {
        this.userBehavior = this.loadUserBehavior();
    }

    loadUserBehavior() {
        const stored = localStorage.getItem('user_behavior');
        return stored ? JSON.parse(stored) : {
            commonQuestions: {},
            searchHistory: [],
            preferences: {}
        };
    }

    saveUserBehavior() {
        localStorage.setItem('user_behavior', JSON.stringify(this.userBehavior));
    }

    trackQuestion(question) {
        if (!this.userBehavior.commonQuestions[question]) {
            this.userBehavior.commonQuestions[question] = 0;
        }
        this.userBehavior.commonQuestions[question]++;
        
        this.userBehavior.searchHistory.unshift(question);
        if (this.userBehavior.searchHistory.length > 20) {
            this.userBehavior.searchHistory.pop();
        }

        this.saveUserBehavior();
    }

    getPersonalizedSuggestions() {
        const sorted = Object.entries(this.userBehavior.commonQuestions)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([question]) => question);

        return sorted.length > 0 ? sorted : null;
    }

    getRelatedQuestions(currentQuestion) {
        const keywords = currentQuestion.toLowerCase().split(' ');
        const related = this.userBehavior.searchHistory.filter(q => 
            keywords.some(keyword => q.toLowerCase().includes(keyword))
        );
        return related.slice(0, 3);
    }
}

class MultiLanguageSupport {
    constructor() {
        this.languages = {
            'ar': 'العربية',
            'en': 'English',
            'fr': 'Français',
            'es': 'Español',
            'de': 'Deutsch'
        };
        this.currentLang = 'ar';
    }

    detectLanguage(text) {
        const arabicPattern = /[\u0600-\u06FF]/;
        const englishPattern = /[a-zA-Z]/;
        
        if (arabicPattern.test(text)) return 'ar';
        if (englishPattern.test(text)) return 'en';
        return 'ar';
    }

    translate(text, targetLang) {
        // في بيئة الإنتاج، استخدم API ترجمة حقيقي
        // مثل Google Translate API أو Microsoft Translator
        console.log(`Translating to ${targetLang}:`, text);
        return text;
    }
}

class FileUploadSupport {
    constructor() {
        this.maxFileSize = 5 * 1024 * 1024; // 5MB
        this.allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
    }

    validateFile(file) {
        if (file.size > this.maxFileSize) {
            return { valid: false, error: 'حجم الملف كبير جداً (الحد الأقصى 5MB)' };
        }

        if (!this.allowedTypes.includes(file.type)) {
            return { valid: false, error: 'نوع الملف غير مدعوم' };
        }

        return { valid: true };
    }

    async uploadFile(file) {
        const validation = this.validateFile(file);
        if (!validation.valid) {
            throw new Error(validation.error);
        }

        // في بيئة الإنتاج، ارفع الملف للخادم
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                resolve({
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    data: e.target.result
                });
            };
            reader.readAsDataURL(file);
        });
    }
}

class LiveChatEscalation {
    constructor() {
        this.threshold = 3; // عدد المحاولات قبل التحويل لموظف
        this.failedAttempts = 0;
    }

    shouldEscalate(confidence) {
        if (confidence < 0.3) {
            this.failedAttempts++;
        } else {
            this.failedAttempts = 0;
        }

        return this.failedAttempts >= this.threshold;
    }

    connectToAgent() {
        return {
            message: 'جاري تحويلك لأحد ممثلي الدعم الفني...',
            agentAvailable: true,
            estimatedWaitTime: '2-3 دقائق'
        };
    }

    reset() {
        this.failedAttempts = 0;
    }
}

class ChatHistory {
    constructor() {
        this.history = this.loadHistory();
    }

    loadHistory() {
        const stored = localStorage.getItem('chat_history');
        return stored ? JSON.parse(stored) : [];
    }

    saveHistory() {
        localStorage.setItem('chat_history', JSON.stringify(this.history));
    }

    addConversation(conversation) {
        this.history.unshift({
            id: Date.now(),
            timestamp: new Date().toISOString(),
            messages: conversation
        });

        if (this.history.length > 50) {
            this.history.pop();
        }

        this.saveHistory();
    }

    getHistory(limit = 10) {
        return this.history.slice(0, limit);
    }

    searchHistory(query) {
        return this.history.filter(conv => 
            conv.messages.some(msg => 
                msg.text.toLowerCase().includes(query.toLowerCase())
            )
        );
    }

    clearHistory() {
        this.history = [];
        localStorage.removeItem('chat_history');
    }
}

class FeedbackSystem {
    constructor() {
        this.feedbacks = this.loadFeedbacks();
    }

    loadFeedbacks() {
        const stored = localStorage.getItem('user_feedbacks');
        return stored ? JSON.parse(stored) : [];
    }

    saveFeedbacks() {
        localStorage.setItem('user_feedbacks', JSON.stringify(this.feedbacks));
    }

    submitFeedback(conversationId, rating, comment) {
        const feedback = {
            id: Date.now(),
            conversationId,
            rating,
            comment,
            timestamp: new Date().toISOString()
        };

        this.feedbacks.push(feedback);
        this.saveFeedbacks();

        return feedback;
    }

    getAverageRating() {
        if (this.feedbacks.length === 0) return 0;
        const sum = this.feedbacks.reduce((acc, f) => acc + f.rating, 0);
        return (sum / this.feedbacks.length).toFixed(1);
    }

    getFeedbackStats() {
        const total = this.feedbacks.length;
        const ratings = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

        this.feedbacks.forEach(f => {
            ratings[f.rating]++;
        });

        return {
            total,
            average: this.getAverageRating(),
            distribution: ratings
        };
    }
}

class QuickReplies {
    constructor() {
        this.replies = {
            'ar': [
                { text: '✅ نعم', value: 'نعم' },
                { text: '❌ لا', value: 'لا' },
                { text: '🤔 غير متأكد', value: 'غير متأكد' },
                { text: '📞 تحدث مع موظف', value: 'تحدث مع موظف' },
                { text: '🔄 ابدأ من جديد', value: 'ابدأ من جديد' }
            ],
            'en': [
                { text: '✅ Yes', value: 'yes' },
                { text: '❌ No', value: 'no' },
                { text: '🤔 Not sure', value: 'not sure' },
                { text: '📞 Talk to agent', value: 'talk to agent' },
                { text: '🔄 Start over', value: 'start over' }
            ]
        };
    }

    getReplies(language = 'ar', context = null) {
        let replies = this.replies[language] || this.replies['ar'];

        if (context) {
            // إضافة ردود سريعة حسب السياق
            if (context.includes('سعر') || context.includes('price')) {
                replies = [
                    ...replies,
                    { text: '💰 عرض الأسعار', value: 'عرض الأسعار' }
                ];
            }
        }

        return replies;
    }
}

class TypingSimulator {
    constructor() {
        this.typingSpeed = 50; // milliseconds per character
    }

    async simulateTyping(text, callback) {
        let currentText = '';
        
        for (let i = 0; i < text.length; i++) {
            currentText += text[i];
            callback(currentText);
            await this.delay(this.typingSpeed);
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// تصدير للاستخدام
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        VoiceSupport,
        SmartSuggestions,
        MultiLanguageSupport,
        FileUploadSupport,
        LiveChatEscalation,
        ChatHistory,
        FeedbackSystem,
        QuickReplies,
        TypingSimulator
    };
}
