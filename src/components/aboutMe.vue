<template>
    <section class="about-section page-section">
        <div class="container">
            <!-- Section Header -->
            <div class="section-header text-center mb-5xl">
                <div class="section-badge">
                    <span class="badge-text">Get to Know Me</span>
                </div>
                <h2 class="section-title text-5xl font-extrabold text-gradient mb-lg">
                    About Me
                </h2>
                <p class="section-subtitle text-xl text-light">
                    Passionate about security, driven by curiosity
                </p>
            </div>

            <div class="about-content">
                <!-- Main Story -->
                <div class="story-section mb-5xl">
                    <div class="story-grid">
                        <div class="story-text animate-slide-left">
                            <div class="story-intro mb-xl">
                                <h3 class="story-greeting text-2xl font-bold text-accent mb-md">
                                    Thanks for stopping by! 👋
                                </h3>
                                <p class="story-lead text-md leading-relaxed text-black">
                                    I'm an <span class="highlight-text">Early-career IT professional</span> with an insatiable curiosity for 
                                    <span class="highlight-text">cybersecurity</span> and 
                                    <span class="highlight-text">cloud computing</span>. 
                                    My journey spans from understanding how to secure code and exploit software binaries, 
                                    to penetration testing cloud environments and diving deep into software architectures 
                                    and DevSecOps workflows.
                                </p>
                            </div>

                            <div class="passion-points">
                                <div class="passion-item" v-for="(passion, index) in passions" :key="index">
                                    <div class="passion-icon">
                                        <component :is="passion.icon" />
                                    </div>
                                    <div class="passion-content">
                                        <h4 class="passion-title font-semibold text-accent">
                                            {{ passion.title }}
                                        </h4>
                                        <p class="passion-desc text-sm text-black">
                                            {{ passion.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="story-visual animate-slide-right">
                            <div class="code-window">
                                <div class="code-header">
                                    <div class="code-dots">
                                        <span class="dot red"></span>
                                        <span class="dot yellow"></span>
                                        <span class="dot green"></span>
                                    </div>
                                    <span class="code-title">security_mindset.py</span>
                                </div>
                                <div class="code-content">
                                    <div class="code-line">
                                        <span class="line-number">1</span>
                                        <span class="code-text">
                                            <span class="keyword">class</span> 
                                            <span class="class-name">CyberSecurityPassion</span>:
                                        </span>
                                    </div>
                                    <div class="code-line">
                                        <span class="line-number">2</span>
                                        <span class="code-text">
                                            &nbsp;&nbsp;<span class="keyword">def</span> 
                                            <span class="function">__init__</span>(self):
                                        </span>
                                    </div>
                                    <div class="code-line">
                                        <span class="line-number">3</span>
                                        <span class="code-text">
                                            &nbsp;&nbsp;&nbsp;&nbsp;self.interests = [
                                        </span>
                                    </div>
                                    <div class="code-line">
                                        <span class="line-number">4</span>
                                        <span class="code-text">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"cyber_security"</span>,
                                        </span>
                                    </div>
                                    <div class="code-line">
                                        <span class="line-number">5</span>
                                        <span class="code-text">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"cloud_security"</span>,
                                        </span>
                                    </div>
                                    <div class="code-line">
                                        <span class="line-number">6</span>
                                        <span class="code-text">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"devsecops"</span>
                                        </span>
                                    </div>
                                    <div class="code-line">
                                        <span class="line-number">7</span>
                                        <span class="code-text">
                                            &nbsp;&nbsp;&nbsp;&nbsp;]
                                        </span>
                                    </div>
                                    <div class="code-line">
                                        <span class="line-number">8</span>
                                        <span class="code-text">
                                            &nbsp;&nbsp;&nbsp;&nbsp;self.always_learning = <span class="boolean">True</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Life Balance Section -->
                <div class="balance-section">
                    <div class="balance-header text-center mb-2xl">
                        <h3 class="text-3xl font-bold text-accent mb-md">
                            Beyond the Code
                        </h3>
                        <p class="text-lg text-black with-break">
                            When I'm not diving into the latest vulnerabilities or exploring new technologies...
                        </p>
                    </div>

                    <div class="activities-grid">
                        <div class="activity-card" v-for="(activity, index) in activities" :key="index">
                            <div class="activity-icon">
                                <component :is="activity.icon" />
                            </div>
                            <h4 class="activity-title font-semibold text-accent">
                                {{ activity.title }}
                            </h4>
                            <p class="activity-desc text-sm text-black">
                                {{ activity.description }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Stats Section -->
                <div class="stats-section mt-5xl">
                    <div class="stats-container">
                        <div class="stat-item" v-for="(stat, index) in stats" :key="index">
                            <div class="stat-number text-4xl font-black text-gradient">
                                {{ stat.number }}
                            </div>
                            <div class="stat-label text-sm font-medium text-muted">
                                {{ stat.label }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Background Decorations -->
        <div class="about-decorations">
            <div class="decoration-circle circle-1"></div>
            <div class="decoration-circle circle-2"></div>
            <div class="decoration-line line-1"></div>
            <div class="decoration-line line-2"></div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

// Passion points data
const passions = ref([
    {
        title: "Vulnerability Research",
        description: "Discovering and analyzing the latest security flaws and attack vectors",
        icon: "ShieldIcon"
    },
    {
        title: "Cloud Penetration Testing",
        description: "Gaining hands-on practice testing cloud setups for misconfigurations and weaknesses",
        icon: "CloudIcon"
    },
    {
        title: "DevSecOps Integration",
        description: "Building security into development workflows and CI/CD pipelines",
        icon: "CodeIcon"
    },
    {
        title: "Software Architecture",
        description: "Understanding secure design patterns and architectural principles",
        icon: "CubeIcon"
    }
])

// Life activities data
const activities = ref([
    {
        title: "Fitness Training",
        description: "Hitting the gym and going for runs to keep both mind and body sharp",
        icon: "DumbbellIcon"
    },
    {
        title: "Coffee & Conversations",
        description: "Enjoying great coffee while networking and discussing ideas with others",
        icon: "CoffeeIcon"
    },
    {
        title: "Tech Meetups",
        description: "Attending technology events to learn, share, and build professional communities",
        icon: "UsersIcon"
    },
    {
        title: "Continuous Learning",
        description: "Exploring new technologies and tools, and keeping up with the latest security practices and trends through reading and watching.",
        icon: "BookIcon"
    }
])

// Stats data
const stats = ref([
    { number: "24/7", label: "Learning Mindset" },
    { number: "100%", label: "Passion Driven" },
    { number: "∞", label: "Curiosity Level" },
    { number: "2", label: "Cup of Coffee" }
])

// Icon components
const ShieldIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', { d: 'M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H15.5C16.4,11 17,11.4 17,12V16C17,16.6 16.6,17 16,17H8C7.4,17 7,16.6 7,16V12C7,11.4 7.4,11 8,11H8.5V10C8.5,8.6 9.6,7 12,7M12,8.2C10.2,8.2 9.7,9.2 9.7,10V11H14.3V10C14.3,9.2 13.8,8.2 12,8.2Z' })
])

const CloudIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', { d: 'M19.36,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.36,10.04Z' })
])

const CodeIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', { d: 'M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z' })
])

const CubeIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', { d: 'M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5.04,7.5L12,10.85L18.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z' })
])

const DumbbellIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', { d: 'M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z' })
])

const CoffeeIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', { d: 'M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z' })
])

const UsersIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', { d: 'M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z' })
])

const BookIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', { d: 'M19,3H5C3.9,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.9 20.1,3 19,3M5,19V5H19V19H5Z' })
])
</script>

<style scoped>
.about-section {
    position: relative;
    padding: var(--space-5xl) 0;
    overflow: hidden;
}

/* Section Header */
.section-header {
    position: relative;
    z-index: 2;
}

.section-badge {
    display: inline-block;
    padding: var(--space-sm) var(--space-lg);
    background: rgba(8, 145, 178, 0.1);
    border: 1px solid rgba(8, 145, 178, 0.2);
    border-radius: var(--radius-full);
    margin-bottom: var(--space-lg);
}

.badge-text {
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--color-primary);
}

.section-subtitle {
    max-width: 400px;
    margin: 0 auto;
}

/* Story Section */
.story-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-4xl);
    align-items: center;
    margin-bottom: var(--space-3xl);
}

.story-text {
    position: relative;
}

.story-greeting {
    position: relative;
}

.highlight-text {
    background: var(--gradient-primary);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: var(--font-semibold);
}

.passion-points {
    display: grid;
    gap: var(--space-lg);
    margin-top: var(--space-2xl);
}

.passion-item {
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
    padding: var(--space-lg);
    background: rgba(8, 145, 178, 0.05);
    border-radius: var(--radius-xl);
    border-left: 4px solid var(--color-primary);
    transition: all var(--transition-normal);
}

.passion-item:hover {
    background: rgba(8, 145, 178, 0.1);
    transform: translateX(8px);
}

.passion-icon {
    flex-shrink: 0;
    color: var(--color-primary);
}

.passion-content {
    flex: 1;
}

.passion-title {
    margin-bottom: var(--space-xs);
}

/* Code Window */
.story-visual {
    position: relative;
}

.code-window {
    background: var(--color-accent);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-2xl);
    transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
    transition: transform var(--transition-normal);
}

.code-window:hover {
    transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
}

.code-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-md) var(--space-lg);
    background: rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.code-dots {
    display: flex;
    gap: var(--space-sm);
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: var(--radius-full);
}

.dot.red { background: #ff5f57; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #28ca42; }

.code-title {
    font-size: var(--text-sm);
    color: rgba(255, 255, 255, 0.8);
    font-family: var(--font-family-mono);
}

.code-content {
    padding: var(--space-lg);
    font-family: var(--font-family-mono);
    font-size: var(--text-sm);
    line-height: 1.6;
}

.code-line {
    display: flex;
    margin-bottom: var(--space-xs);
}

.line-number {
    width: 30px;
    color: rgba(255, 255, 255, 0.4);
    user-select: none;
}

.code-text {
    color: rgba(255, 255, 255, 0.9);
}

.keyword { color: #ff79c6; }
.class-name { color: #8be9fd; }
.function { color: #50fa7b; }
.string { color: #f1fa8c; }
.boolean { color: #bd93f9; }

/* Balance Section */
.balance-section {
    margin-top: var(--space-5xl);
}

.activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-xl);
    margin-top: var(--space-2xl);
}

.activity-card {
    text-align: center;
    padding: var(--space-2xl) var(--space-lg);
    background: var(--color-surface);
    border-radius: var(--radius-xl);
    border: 1px solid var(--color-border);
    transition: all var(--transition-normal);
    position: relative;
    overflow: hidden;
}

.activity-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transition: transform var(--transition-normal);
}

.activity-card:hover::before {
    transform: scaleX(1);
}

.activity-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
}

.activity-icon {
    color: var(--color-primary);
    margin-bottom: var(--space-md);
}

.activity-title {
    margin-bottom: var(--space-sm);
    font-size: var(--text-lg);
}

/* Stats Section */
.stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--space-2xl);
    text-align: center;
    padding: var(--space-3xl) 0;
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    margin-top: var(--space-3xl);
}

.stat-item {
    position: relative;
}

.stat-number {
    margin-bottom: var(--space-xs);
}

/* Background Decorations */
.about-decorations {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
}

.decoration-circle {
    position: absolute;
    border-radius: var(--radius-full);
    background: var(--gradient-primary);
    opacity: 0.05;
}

.circle-1 {
    width: 200px;
    height: 200px;
    top: 10%;
    right: -100px;
    animation: float 8s ease-in-out infinite;
}

.circle-2 {
    width: 150px;
    height: 150px;
    bottom: 20%;
    left: -75px;
    animation: float 6s ease-in-out infinite 3s;
}

.decoration-line {
    position: absolute;
    height: 1px;
    background: var(--gradient-primary);
    opacity: 0.1;
}

.line-1 {
    width: 300px;
    top: 30%;
    left: 0;
    transform: rotate(15deg);
}

.line-2 {
    width: 200px;
    bottom: 40%;
    right: 0;
    transform: rotate(-10deg);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .story-grid {
        grid-template-columns: 1fr;
        gap: var(--space-3xl);
    }
    
    .story-visual {
        order: -1;
    }
    
    .code-window {
        transform: none;
        max-width: 500px;
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .about-section {
        padding: var(--space-4xl) 0;
    }
    
    .section-title {
        font-size: var(--text-4xl);
    }
    
    .activities-grid {
        grid-template-columns: 1fr;
        gap: var(--space-lg);
    }
    
    .stats-container {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-xl);
    }
    
    .passion-points {
        gap: var(--space-md);
    }
    
    .passion-item {
        padding: var(--space-md);
    }
    
    .code-content {
        padding: var(--space-md);
        font-size: var(--text-xs);
    }
}

@media (max-width: 480px) {
     .section-title {
        font-size: var(--text-2xl);
    }
    .story-greeting {
        font-size: var(--text-lg);
    }
    .balance-header h3 {
        font-size: var(--text-lg);
    }
    .badge-text {
        font-size: var(--text-xs);
    }
    .story-lead {
        font-size: var(--text-sm);
    }
    .passion-title {
        font-size: var(--text-md);
    }
    .passion-desc {
        font-size: var(--text-xs);
    }
    .with-break {
        font-size: var(--text-sm);
    }
    .stats-container {
        grid-template-columns: 1fr;
    }
    
    .activity-card {
        padding: var(--space-xl) var(--space-md);
    }
}
</style>