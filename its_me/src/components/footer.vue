<template>
    <footer class="app-footer page-section-alt">
        <div class="container">
            <!-- Main Footer Content -->
            <div class="footer-content">
                <!-- Get in Touch Section -->
                <div class="footer-center text-center">
                    <h3 class="footer-title modern-title text-5xl font-black mb-lg">
                        <span class="title-main">Get in Touch</span>
                    </h3>
                    <p class="footer-subtitle modern-subtitle text-xl font-semibold mb-xl">
                        <span class="subtitle-text">Let's connect and build something amazing together</span>
                        <span class="subtitle-highlight">✨</span>
                    </p>
                    
                    <!-- Social Links -->
                    <div class="social-links flex justify-center items-center">
                        <!-- LinkedIn -->
                        <a 
                            href="https://www.linkedin.com/in/abdelrahman-ghonim-032100274/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            class="social-link linkedin"
                            aria-label="Connect on LinkedIn"
                        >
                            <div class="social-icon">
                                <LinkedInIcon />
                            </div>
                            <span class="social-text">LinkedIn</span>
                        </a>

                        <!-- GitHub -->
                        <a 
                            href="https://github.com/Ghonim88" 
                            target="_blank"
                            rel="noopener noreferrer"
                            class="social-link github"
                            aria-label="View GitHub Profile"
                        >
                            <div class="social-icon">
                                <GitHubIcon />
                            </div>
                            <span class="social-text">GitHub</span>
                        </a>

                        <!-- Email -->
                        <a 
                            href="mailto:a.ghonim046@gmail.com" 
                            class="social-link email"
                            aria-label="Send an Email"
                        >
                            <div class="social-icon">
                                <EmailIcon />
                            </div>
                            <span class="social-text">Email</span>
                        </a>

                        <!-- Twitter/X -->
                        <a 
                            href="https://x.com/ghonim808?s=21" 
                            target="_blank"
                            rel="noopener noreferrer"
                            class="social-link twitter"
                            aria-label="Follow on Twitter"
                        >
                            <div class="social-icon">
                                <TwitterIcon />
                            </div>
                            <span class="social-text">Twitter</span>
                        </a>
                    </div>

                    <!-- Call to Action -->
                    <!-- <div class="footer-cta">
                        <button class="btn btn-primary btn-lg">
                            <span>Start a Conversation</span>
                            <ArrowRightIcon class="cta-arrow" />
                        </button>
                    </div> -->
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <div class="footer-divider"></div>
                <div class="footer-info text-center">
                    <p class="copyright text-sm text-muted">
                        © {{ currentYear }} Ghonim. Built with Vue.js & passion for security.
                    </p>
                    <div class="footer-links">
                        <a href="#privacy" class="footer-link">Privacy</a>
                        <span class="footer-separator">•</span>
                        <a href="#terms" class="footer-link">Terms</a>
                        <span class="footer-separator">•</span>
                        <a href="#cookies" class="footer-link">Cookies</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Decorative Background Elements -->
        <div class="footer-decoration">
            <div class="decoration-dot dot-1"></div>
            <div class="decoration-dot dot-2"></div>
            <div class="decoration-dot dot-3"></div>
            <div class="decoration-line"></div>
        </div>
    </footer>
</template>

<script setup>
import { ref, computed, h } from 'vue'

// Get current year for copyright
const currentYear = computed(() => new Date().getFullYear())

// Icon components (you can replace these with your preferred icon library)
const LinkedInIcon = () => h('svg', {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'currentColor'
}, [
    h('path', {
        d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    })
])

const GitHubIcon = () => h('svg', {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'currentColor'
}, [
    h('path', {
        d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
    })
])

const EmailIcon = () => h('svg', {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'currentColor'
}, [
    h('path', {
        d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
    })
])

const TwitterIcon = () => h('svg', {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'currentColor'
}, [
    h('path', {
        d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
    })
])

const ArrowRightIcon = () => h('svg', {
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'currentColor'
}, [
    h('path', {
        fillRule: 'evenodd',
        d: 'M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z',
        clipRule: 'evenodd'
    })
])
</script>

<style scoped>
.app-footer {
    position: relative;
    padding: var(--space-5xl) 0 var(--space-3xl) 0;
    background: var(--color-surface);
    border-top: 1px solid var(--color-border);
    overflow: hidden;
}

.footer-content {
    position: relative;
    z-index: 2;
}

.footer-center {
    max-width: 600px;
    margin: 0 auto;
}

.footer-title {
    position: relative;
    margin-bottom: var(--space-lg);
}

.modern-title {
    position: relative;
    display: inline-block;
    font-weight: var(--font-black);
    letter-spacing: -0.02em;
    line-height: 1.1;
}

.title-main {
    position: relative;
    display: block;
    background: linear-gradient(
        135deg,
        #667eea 0%,
        #764ba2 25%,
        #667eea 50%,
        #0891b2 75%,
        #164e63 100%
    );
    background-size: 300% 300%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: gradientShift 4s ease-in-out infinite;
    text-shadow: none;
    z-index: 2;
}

.title-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        135deg,
        #667eea 0%,
        #764ba2 25%,
        #667eea 50%,
        #0891b2 75%,
        #164e63 100%
    );
    background-size: 300% 300%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: gradientShift 4s ease-in-out infinite reverse;
    filter: blur(0.5px);
    opacity: 0.7;
    z-index: 1;
}

.footer-title::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
    animation: titleAccent 3s ease-in-out infinite;
}

.footer-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 2px;
    background: linear-gradient(
        90deg,
        transparent 0%,
        var(--color-primary) 25%,
        var(--color-accent) 75%,
        transparent 100%
    );
    border-radius: var(--radius-full);
    animation: titleUnderline 2s ease-in-out infinite alternate;
}

@keyframes gradientShift {
    0%, 100% {
        background-position: 0% 50%;
        transform: translateY(0px);
    }
    25% {
        background-position: 50% 0%;
        transform: translateY(-1px);
    }
    50% {
        background-position: 100% 50%;
        transform: translateY(0px);
    }
    75% {
        background-position: 50% 100%;
        transform: translateY(1px);
    }
}

@keyframes titleAccent {
    0%, 100% {
        width: 80px;
        opacity: 0.8;
    }
    50% {
        width: 100px;
        opacity: 1;
    }
}

@keyframes titleUnderline {
    0% {
        width: 120px;
        opacity: 0.6;
    }
    100% {
        width: 140px;
        opacity: 0.9;
    }
}

.footer-title:hover .title-main {
    animation-duration: 2s;
}

.footer-title:hover::before {
    animation-duration: 1.5s;
}

.footer-title:hover::after {
    animation-duration: 1s;
}

.footer-subtitle {
    max-width: 450px;
    margin: 0 auto;
    position: relative;
}

.modern-subtitle {
    position: relative;
    display: inline-block;
    font-weight: var(--font-semibold);
    letter-spacing: 0.01em;
    line-height: 1.4;
}

.subtitle-text {
    position: relative;
    display: inline-block;
    background: linear-gradient(
        135deg,
        var(--color-text) 0%,
        var(--color-primary) 30%,
        var(--color-accent) 70%,
        var(--color-text-light) 100%
    );
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: subtitleGradient 6s ease-in-out infinite;
    transition: all var(--transition-normal);
}

.subtitle-highlight {
    display: inline-block;
    margin-left: var(--space-xs);
    font-size: var(--text-lg);
    animation: sparkle 2s ease-in-out infinite;
    filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.4));
}

.footer-subtitle::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 1px;
    background: linear-gradient(
        90deg,
        transparent 0%,
        var(--color-primary) 50%,
        transparent 100%
    );
    opacity: 0.6;
    animation: subtitleAccent 4s ease-in-out infinite;
}

.footer-subtitle::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    background: linear-gradient(
        90deg,
        transparent 0%,
        var(--color-accent) 30%,
        var(--color-primary) 70%,
        transparent 100%
    );
    opacity: 0.5;
    animation: subtitleAccent 4s ease-in-out infinite 1s;
}

@keyframes subtitleGradient {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

@keyframes sparkle {
    0%, 100% {
        transform: scale(1) rotate(0deg);
        opacity: 0.8;
    }
    25% {
        transform: scale(1.2) rotate(90deg);
        opacity: 1;
    }
    50% {
        transform: scale(0.9) rotate(180deg);
        opacity: 0.6;
    }
    75% {
        transform: scale(1.1) rotate(270deg);
        opacity: 1;
    }
}

@keyframes subtitleAccent {
    0%, 100% {
        width: 40px;
        opacity: 0.4;
    }
    50% {
        width: 60px;
        opacity: 0.8;
    }
}

.footer-subtitle:hover .subtitle-text {
    animation-duration: 3s;
}

.footer-subtitle:hover .subtitle-highlight {
    animation-duration: 1s;
}

/* Social Links */
.social-links {
    gap: var(--space-xl);
    flex-wrap: wrap;
    margin-bottom: var(--space-2xl);
}

.social-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    text-decoration: none;
    color: var(--color-text-light);
    transition: all var(--transition-normal);
    padding: var(--space-lg);
    border-radius: var(--radius-xl);
    position: relative;
    overflow: hidden;
}

.social-link::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient-primary);
    opacity: 0;
    transition: all var(--transition-normal);
    z-index: -1;
}

.social-link:hover {
    color: var(--color-background);
    transform: translateY(-4px);
    box-shadow: var(--shadow-primary);
}

.social-link:hover::before {
    opacity: 1;
}

.social-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-full);
    background: rgba(8, 145, 178, 0.1);
    transition: all var(--transition-normal);
}

.social-link:hover .social-icon {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
}

.social-text {
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    transition: all var(--transition-normal);
}

/* Specific social platform hover colors */
.social-link.linkedin:hover {
    color: var(--color-background);
}

.social-link.github:hover {
    color: var(--color-background);
}

.social-link.email:hover {
    color: var(--color-background);
}

.social-link.twitter:hover {
    color: var(--color-background);
}

/* Call to Action */
.footer-cta {
    margin: var(--space-2xl) 0;
}

.cta-arrow {
    transition: transform var(--transition-normal);
}

.btn:hover .cta-arrow {
    transform: translateX(4px);
}

/* Footer Bottom */
.footer-bottom {
    margin-top: var(--space-4xl);
    padding-top: var(--space-2xl);
}

.footer-divider {
    height: 1px;
    background: linear-gradient(
        90deg, 
        transparent 0%, 
        var(--color-primary) 20%, 
        var(--color-accent) 80%, 
        transparent 100%
    );
    margin-bottom: var(--space-2xl);
}

.footer-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
}

.footer-links {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    flex-wrap: wrap;
    justify-content: center;
}

.footer-link {
    color: var(--color-text-muted);
    text-decoration: none;
    font-size: var(--text-sm);
    transition: color var(--transition-normal);
}

.footer-link:hover {
    color: var(--color-primary);
}

.footer-separator {
    color: var(--color-text-muted);
    font-size: var(--text-sm);
}

/* Decorative Elements */
.footer-decoration {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
}

.decoration-dot {
    position: absolute;
    border-radius: var(--radius-full);
    background: var(--gradient-primary);
    opacity: 0.1;
}

.dot-1 {
    width: 120px;
    height: 120px;
    top: 10%;
    left: -60px;
    animation: float 6s ease-in-out infinite;
}

.dot-2 {
    width: 80px;
    height: 80px;
    top: 60%;
    right: -40px;
    animation: float 8s ease-in-out infinite 2s;
}

.dot-3 {
    width: 60px;
    height: 60px;
    bottom: 20%;
    left: 10%;
    animation: float 7s ease-in-out infinite 4s;
}

.decoration-line {
    position: absolute;
    top: 30%;
    right: 0;
    width: 200px;
    height: 1px;
    background: var(--gradient-primary);
    opacity: 0.2;
    transform: rotate(-15deg);
}

/* Animations */
@keyframes float {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0.1;
    }
    50% {
        transform: translateY(-20px) rotate(180deg);
        opacity: 0.2;
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .modern-title {
        font-size: var(--text-4xl);
    }
    
    .modern-subtitle {
        font-size: var(--text-lg);
    }
    
    .footer-subtitle::before {
        width: 30px;
    }
    
    .footer-subtitle::after {
        width: 45px;
    }
    
    .footer-title::before {
        width: 60px;
        height: 2px;
    }
    
    .footer-title::after {
        width: 90px;
        height: 1.5px;
    }
    
    .social-links {
        gap: var(--space-lg);
    }
    
    .social-link {
        padding: var(--space-md);
    }
    
    .social-icon {
        width: 40px;
        height: 40px;
    }
    
    .footer-info {
        text-align: center;
    }
    
    .footer-links {
        flex-direction: column;
        gap: var(--space-sm);
    }
    
    .footer-separator {
        display: none;
    }
}

@media (max-width: 480px) {
    .app-footer {
        padding: var(--space-4xl) 0 var(--space-2xl) 0;
    }
    
    .modern-title {
        font-size: var(--text-3xl);
    }
    
    .modern-subtitle {
        font-size: var(--text-base);
    }
    
    .subtitle-highlight {
        font-size: var(--text-sm);
    }
    
    .footer-subtitle::before {
        width: 25px;
        top: -6px;
    }
    
    .footer-subtitle::after {
        width: 35px;
        bottom: -6px;
    }
    
    .footer-title::before {
        width: 50px;
        height: 1.5px;
        top: -8px;
    }
    
    .footer-title::after {
        width: 70px;
        height: 1px;
        bottom: -12px;
    }
    
    .footer-subtitle {
        font-size: var(--text-base);
    }
    
    .social-links {
        gap: var(--space-md);
    }
}
</style>