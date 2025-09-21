<template>
    <!-- Full-width Cover Picture Section -->
    <section class="intro-cover full-width ">
        <img 
            src="../assets/images/coverPicture.jpeg" 
            alt="Cover background"
            class="cover-image"
        />
        <div class="cover-overlay"></div>
    </section>

    <!-- Spacer for visual breathing room -->
    <div class="section-spacer"></div>

    <!-- Content Section with Text and Profile -->
    <section class="intro-content pp-section">
        <div class="container">
            <div class="content-inner flex items-center">
                <div class="intro-left animate-slide-left">
                    <div class="text-content">
                        <h1 class="greeting text-5xl font-black leading-tight mb-lg">
                            Hello, I'm 
                            <span class="name-highlight text-gradient">Ghonim</span>!
                        </h1>

                        <div class="typing-wrap flex items-center mb-lg">
                            <span class="typing-label text-xl text-secondary">I'm a </span>
                            <span class="typing font-mono text-2xl font-semibold text-gradient">
                                {{ displayedText }}
                            </span>
                            <span class="caret"></span>
                        </div>
                    </div>
                </div>

                <div class="intro-right animate-slide-right">
                    <div class="profile-container">
                        <img 
                            src="../assets/images/profilePicture.jpeg" 
                            alt="Ghonim's profile picture" 
                            class="profile-pic rounded-full shadow-xl transition-all" 
                        />
                        <div class="profile-ring animate-rotate"></div>
                        <div class="floating-dot dot-1 animate-bounce"></div>
                        <div class="floating-dot dot-2 animate-bounce"></div>
                        <div class="floating-dot dot-3 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const phrases = [
    'Cloud Security Student',
    'CyberSecurity Student',
    'DevSecOps Student'
]

const displayedText = ref('')
let phraseIndex = 0
let charIndex = 0
let isDeleting = false
let timer = null

const typingSpeed = 50
const erasingSpeed = 50
const pauseAfter = 1200

function startTyping() {
    timer = setInterval(() => {
        const current = phrases[phraseIndex]
        if (!isDeleting) {
            displayedText.value = current.slice(0, ++charIndex)
            if (charIndex === current.length) {
                clearInterval(timer)
                // Stop at the last phrase (Cloud Security Student)
                if (phraseIndex === phrases.length - 1) {
                    return // Don't continue the animation
                }
                setTimeout(() => {
                    isDeleting = true
                    timer = setInterval(startTypingStep, erasingSpeed)
                }, pauseAfter)
            }
        }
    }, typingSpeed)
}

function startTypingStep() {
    const current = phrases[phraseIndex]
    if (isDeleting) {
        displayedText.value = current.slice(0, --charIndex)
        if (charIndex === 0) {
            isDeleting = false
            phraseIndex = (phraseIndex + 1) % phrases.length
            clearInterval(timer)
            setTimeout(() => {
                timer = setInterval(() => {
                    const curr = phrases[phraseIndex]
                    displayedText.value = curr.slice(0, ++charIndex)
                    if (charIndex === curr.length) {
                        clearInterval(timer)
                        // Stop at the last phrase (Cloud Security Student)
                        if (phraseIndex === phrases.length - 1) {
                            return // Don't continue the animation
                        }
                        setTimeout(() => {
                            isDeleting = true
                            timer = setInterval(startTypingStep, erasingSpeed)
                        }, pauseAfter)
                    }
                }, typingSpeed)
            }, 300)
        }
    }
}

onMounted(() => {
    setTimeout(() => startTyping(), 800)
})

onUnmounted(() => {
    if (timer) clearInterval(timer)
})
</script>

<style scoped>
/* Component-specific styles only */
.intro-cover {
    height: 10vh;
    min-height: 300px;
    position: relative;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

.cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: var(--transition-normal);
}

.cover-overlay {
    position: absolute;
    inset: 0;
    background: var(--gradient-overlay);
}

.section-spacer {
    height: var(--space-2xl); /* Reduced from --space-2xl to --space-md */
}

.intro-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%);
}

.content-inner {
    gap: var(--space-xl);
}

.intro-left {
    flex: 1 1 60%;
}

.text-content {
    max-width: 600px;
}
.pp-section {
  background: white;
  color: rgb(0, 0, 0); /* keeps text readable */
  padding: 1rem 5rem 2rem 3rem;
  min-height: 40vh;
}

.typing-wrap {
    min-height: 2.5rem;
    gap: var(--space-sm);
}

.caret {
    width: 3px;
    height: 28px;
    background: var(--color-primary);
    display: inline-block;
    margin-left: var(--space-xs);
    animation: blink 1s steps(2, start) infinite;
    border-radius: var(--radius-sm);
}

@keyframes blink {
    50% { opacity: 0; }
}

.action-buttons {
    gap: var(--space-md);
    flex-wrap: wrap;
}

.intro-right {
    flex: 0 0 280px;
    display: flex;
    justify-content: center;
    animation-delay: 0.2s;
    animation-fill-mode: both;
}

.profile-container {
    position: relative;
    width: 220px;
    height: 220px;
}

.profile-pic {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border: 4px solid var(--color-background);
    position: absolute;
    top: 20px;
    left: 20px;
}

.profile-pic:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-primary-lg);
}

.profile-ring {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 200px;
    height: 200px;
    border: 3px solid;
    border-image: var(--gradient-primary) 1;
    border-radius: var(--radius-full);
}

.floating-dot {
    position: absolute;
    border-radius: var(--radius-full);
    background: var(--gradient-primary);
}

.dot-1 {
    width: 12px;
    height: 12px;
    top: 40px;
    right: -10px;
    animation-delay: 0s;
}

.dot-2 {
    width: 8px;
    height: 8px;
    bottom: 60px;
    left: -15px;
    animation-delay: 1s;
}

.dot-3 {
    width: 6px;
    height: 6px;
    top: 120px;
    right: -20px;
    animation-delay: 2s;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .content-inner {
        gap: var(--space-3xl);
    }
    
    .greeting {
        font-size: var(--text-5xl);
    }
}

@media (max-width: 768px) {
    .intro-cover {
        height: 25vh;
        min-height: auto;
    }
    .cover-image {
    height: 25vh;
    }
    

    .section-spacer {
        height: var(--space-2xl);
    }
    
    .content-inner { 
        flex-direction: column; 
        gap: var(--space-3xl); 
        text-align: center;
    }
    
    .intro-right { 
        order: -1;
        flex: 0 0 auto;
    }
    
    .greeting { 
        font-size: var(--text-4xl);
    }
    
    .typing-label,
    .typing { 
        font-size: var(--text-lg);
    }
    
    .intro-sub {
        font-size: var(--text-lg);
    }
    
    .profile-container {
        width: 180px;
        height: 180px;
    }
    
    .profile-pic { 
        width: 140px; 
        height: 140px;
        top: 20px;
        left: 20px;
    }
    
    .profile-ring {
        width: 160px;
        height: 160px;
        top: 10px;
        left: 10px;
    }
    
    .action-buttons {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .greeting {
        font-size: var(--text-3xl);
    }
    
    .btn {
        padding: var(--space-sm) var(--space-lg);
        font-size: var(--text-sm);
    }
}
</style>