class AnalyticsTracker {
    constructor() {
        this.sessionId = this.generateSessionId();
        this.events = [];
        this.startTime = Date.now();
    }

    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    trackEvent(eventType, data) {
        const event = {
            sessionId: this.sessionId,
            eventType,
            timestamp: new Date().toISOString(),
            data,
            userAgent: navigator.userAgent,
            language: navigator.language
        };

        this.events.push(event);
        this.sendToServer(event);
    }

    trackConversation(message, response, confidence, sentiment) {
        this.trackEvent('conversation', {
            message,
            response,
            confidence,
            sentiment,
            responseTime: Date.now() - this.startTime
        });
    }

    trackUserSatisfaction(rating, feedback) {
        this.trackEvent('satisfaction', {
            rating,
            feedback,
            conversationLength: this.events.filter(e => e.eventType === 'conversation').length
        });
    }

    trackError(error, context) {
        this.trackEvent('error', {
            error: error.message,
            stack: error.stack,
            context
        });
    }

    async sendToServer(event) {
        try {
            // في بيئة الإنتاج، أرسل إلى الخادم
            console.log('Analytics Event:', event);
            
            // حفظ محلياً
            const stored = JSON.parse(localStorage.getItem('analytics_events') || '[]');
            stored.push(event);
            if (stored.length > 100) stored.shift();
            localStorage.setItem('analytics_events', JSON.stringify(stored));
        } catch (error) {
            console.error('Failed to track event:', error);
        }
    }

    getSessionStats() {
        const conversations = this.events.filter(e => e.eventType === 'conversation');
        const avgConfidence = conversations.reduce((sum, e) => sum + (e.data.confidence || 0), 0) / conversations.length;
        
        return {
            sessionId: this.sessionId,
            totalConversations: conversations.length,
            avgConfidence: avgConfidence.toFixed(2),
            sessionDuration: Date.now() - this.startTime,
            sentimentBreakdown: this.getSentimentBreakdown(conversations)
        };
    }

    getSentimentBreakdown(conversations) {
        const breakdown = { positive: 0, negative: 0, neutral: 0 };
        conversations.forEach(conv => {
            const sentiment = conv.data.sentiment || 'neutral';
            breakdown[sentiment]++;
        });
        return breakdown;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnalyticsTracker;
}
