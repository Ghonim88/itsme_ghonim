<!-- SidebarNavigation.vue -->
<template>
  <div>
    <!-- Main Navbar with Hamburger -->
    <nav class="main-navbar" :class="{ 'scrolled': isScrolled }">
      <div class="navbar-content">
        <!-- Logo -->
        <div class="logo-section">
          <div class="logo-circle">{{ initials }}</div>
          <!-- <span class="brand-text">{{ fullName }}</span> -->
        </div>

        <!-- Hamburger Menu Button -->
        <button 
          class="hamburger-btn"
          @click="toggleNavigation"
          :class="{ 'active': navigationOpen }"
        >
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-3"></span>
        </button>

        <!-- Desktop Horizontal Navigation -->
        <div 
          class="desktop-nav" 
          :class="{ 'open': navigationOpen }"
        >
          <nav class="horizontal-nav">
            <ul class="horizontal-nav-list">
              <li 
                v-for="(item, index) in navItems" 
                :key="item.id"
                class="horizontal-nav-item"
                :style="{ animationDelay: navigationOpen ? `${index * 0.1}s` : '0s' }"
              >
                <a 
                  href="#"
                  class="horizontal-nav-link"
                  :class="{ 'active': activeSection === item.id }"
                  @click.prevent="navigateTo(item.id)"
                >
                    <!-- Emoji removed -->
                  <span class="horizontal-nav-text  font-semibold text-gradient ">{{ item.label }}</span>
                </a>
              </li>
            </ul>
          </nav>


        </div>
      </div>
    </nav>

    <!-- Overlay (Mobile Only) -->
    <div 
      class="overlay mobile-only" 
      :class="{ 'active': navigationOpen }"
      @click="closeNavigation"
    ></div>

    <!-- Sidebar (Mobile Only) -->
    <div class="sidebar mobile-only" :class="{ 'open': navigationOpen }">
      <!-- Sidebar Header -->
      <div class="sidebar-header">
        <div class="sidebar-profile">
          <div class="profile-avatar">{{ initials }}</div>
          <div class="profile-info">
            <!-- <h3>{{ fullName }}</h3> -->
            <p>{{ jobTitle }}</p>
          </div>
        </div>
        
        <button class="close-btn" @click="closeNavigation">
          <span>&times;</span>
        </button>
      </div>

      <!-- Navigation Links -->
      <nav class="sidebar-nav">
        <ul class="nav-list nav-bullets">
          <li 
            v-for="(item, index) in navItems" 
            :key="item.id"
            class="nav-item"
            :style="{ animationDelay: navigationOpen ? `${index * 0.1}s` : '0s' }"
          >
            <a 
              href="#"
              class="nav-link"
              :class="{ 'active': activeSection === item.id }"
              @click.prevent="navigateTo(item.id)"
            >
              <span v-if="index !== navItems.length - 1" class="nav-bullet"></span> <!-- Bullet for all but last item until you add the blog section-->
              <span class="nav-text">{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Sidebar Footer -->
      <!-- Get in touch text -->
      <div class="sidebar-get-in-touch-text">
        <span>Get in touch</span>
      </div>
      <div class="sidebar-footer">
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
          </a>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, h } from 'vue'

// Reactive data
const activeSection = ref('home')
const isScrolled = ref(false)
const navigationOpen = ref(false)

// Personal info - replace with your details
//const fullName = 'John Smith'
const initials = 'AG'
const jobTitle = 'IT Student'

// Navigation items
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'experience', label: 'Experience' },
  { id: 'blog', label: '' }//you need to add a blog section if you want this link
]

// Methods
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleNavigation = () => {
  navigationOpen.value = !navigationOpen.value
  
  // Prevent body scroll when mobile sidebar is open
  if (window.innerWidth <= 768) {
    if (navigationOpen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }
}

const closeNavigation = () => {
  navigationOpen.value = false
  document.body.style.overflow = 'auto'
}

const navigateTo = (sectionId) => {
  activeSection.value = sectionId
  closeNavigation()
  
  // Smooth scroll to section
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Close navigation when clicking outside on desktop
const handleClickOutside = (event) => {
  if (window.innerWidth > 768 && navigationOpen.value) {
    const navbar = document.querySelector('.main-navbar')
    if (navbar && !navbar.contains(event.target)) {
      closeNavigation()
    }
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  document.body.style.overflow = 'auto'
})

// Icon components (copied from footer.vue for consistency)
const LinkedInIcon = () => h('svg', {
    width: '24', height: '24', viewBox: '0 0 24 24', fill: 'currentColor'
}, [
    h('path', {
        d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    })
])
const GitHubIcon = () => h('svg', {
    width: '24', height: '24', viewBox: '0 0 24 24', fill: 'currentColor'
}, [
    h('path', {
        d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
    })
])
const EmailIcon = () => h('svg', {
    width: '24', height: '24', viewBox: '0 0 24 24', fill: 'currentColor'
}, [
    h('path', {
        d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
    })
])
</script>

<style scoped>
/* Main Navbar */
.main-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  background: transparent;
}

.main-navbar.scrolled {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

/* Logo Section */
.logo-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-circle {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.brand-text {
  font-size: 1.3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #2d3748, #4a5568);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Hamburger Button */
.hamburger-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1001;
}

.hamburger-btn:hover {
  background: rgba(102, 126, 234, 0.1);
}

.line {
  display: block;
  width: 25px;
  height: 3px;
  background: #4a5568;
  margin: 5px 0;
  border-radius: 3px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-origin: center;
}

.line-1 { width: 20px; }
.line-2 { width: 25px; }
.line-3 { width: 15px; }

/* Hamburger Animation */
.hamburger-btn.active .line-1 {
  transform: rotate(45deg) translate(7px, 7px);
  width: 25px;
}

.hamburger-btn.active .line-2 {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger-btn.active .line-3 {
  transform: rotate(-45deg) translate(8px, -8px);
  width: 25px;
}

/* Desktop Horizontal Navigation */
.desktop-nav {
  position: absolute;
  top: 0;
  left: auto;
  right: 0;
  transform: none;
  margin-top: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 999;
  display: none;
  transform-origin: right top;
}

.desktop-nav.open {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0) scale(1);
}

.horizontal-nav {
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  backdrop-filter: none;
  border: none;
  overflow: visible;
  white-space: nowrap;
  height: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
}

.horizontal-nav-list {
  list-style: none;
  padding: 0;
  margin: 0 1.5rem 0 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.horizontal-nav-item {
  opacity: 0;
  transform: translateX(30px);
  animation: none;
}

.desktop-nav.open .horizontal-nav-item {
  animation: slideInFromRight 0.4s ease forwards;
}

@keyframes slideInFromRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.horizontal-nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem 0.8rem;
  color: #fff !important;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  gap: 0.2rem;
  min-width: 60px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.horizontal-nav-item:last-child .horizontal-nav-link {
  border-right: none;
}

.horizontal-nav-link:hover {
  background: rgba(0, 0, 0, 0.1);
  color: #fff !important;
  transform: translateY(-2px);
}

.horizontal-nav-link.active {
  background: rgba(0, 0, 0, 0.15);
  color: #fff !important;
}

.horizontal-nav-icon {
  font-size: 1rem;
  margin-bottom: 0.1rem;
}

.horizontal-nav-text {
  font-weight: 500;
  font-size: 0.9rem;
  text-align: center;
}

/* Show desktop nav on larger screens */
@media (min-width: 769px) {
  .desktop-nav {
    display: block;
  }
  
  .mobile-only {
    display: none !important;
  }
}

/* Hide desktop nav on mobile */
@media (max-width: 768px) {
  .desktop-nav {
    display: none !important;
  }
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Sidebar */

.sidebar {
  position: fixed;
  top: 0;
  right: -400px;
  width: 350px;
  height: 100vh;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 25%,
    #667eea 50%,
    #0891b2 75%,
    #164e63 100%
  );
  background-size: 300% 300%;
  animation: gradientShift 4s ease-in-out infinite;
  z-index: 1001;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.2);
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

.sidebar.open {
  right: 0;
}

/* Sidebar Header */
.sidebar-header {
  padding: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.sidebar-profile {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile-avatar {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  backdrop-filter: blur(10px);
}

.profile-info h3 {
  color: white;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.profile-info p {
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  font-style: inherit;
}

.close-btn {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Sidebar Navigation */
.sidebar-nav {
  flex: 1;
  padding: 1rem 0;
  overflow-y: auto;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Bullet point navigation for sidebar */
.nav-list.nav-bullets {
  padding-left: 0;
}

.nav-bullet {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 18px;
  border-radius: 50%;
  background: #1e3a8a; /* dark blue */
  transition: background 0.2s;
  flex-shrink: 0;
  margin-top: 2px;
}

.nav-link.active .nav-bullet {
  background: linear-gradient(90deg, #667eea 0%, #0891b2 100%);
}

.nav-item {
  opacity: 0;
  transform: translateX(20px);
  animation: none;
}

.sidebar.open .nav-item {
  animation: slideInRight 0.4s ease forwards;
}
/* Sidebar Get in touch text */
.sidebar-get-in-touch-text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0 1.2rem 0;
}
.sidebar-get-in-touch-text span {
  color: #fff;
  font-size: 1.18rem;
  font-weight: 700;
  letter-spacing: 1px;
  background: black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 12px rgba(30,58,138,0.10);
  text-transform: uppercase;
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: #111827; /* Black for nav text */
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-size: 1.1rem;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #111827;
  transform: translateX(10px);
}

.nav-link.active {
  background: rgba(255, 255, 255, 0.15);
  color: #111827;
  border-right: 3px solid #111827;
}

.nav-icon {
  font-size: 1.3rem;
  margin-right: 1rem;
  width: 25px;
  color: #1e3a8a; /* Dark blue for nav icons */
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-text {
  flex: 1;
  font-weight: 500;
  color: #111827; /* Black for nav text */
}

.nav-arrow {
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.nav-link:hover .nav-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Sidebar Footer */
.sidebar-footer {
  padding: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-btn {
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
  margin-bottom: 1.5rem;
}

.contact-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.social-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px; /* square with curvy corners */
  background: #fff;
  transition: all var(--transition-normal, 0.3s);
  box-shadow: 0 2px 8px rgba(30, 58, 138, 0.07);
}

.social-link:hover .social-icon {
  background: #f3f4f6;
  transform: scale(1.1);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .sidebar {
    width: 100vw;
    right: -100vw;
  }
  
  .main-navbar {
    padding: 1rem;
  }
  
  .brand-text {
    font-size: 1.1rem;
  }
}

/* Scroll offset for fixed navbar */
html {
  scroll-padding-top: 80px;
}

/* Custom styles for sidebar bullets */
.nav-bullets {
  padding-left: 1.5rem;
}

.nav-bullet {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
</style>