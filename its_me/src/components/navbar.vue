<!-- SidebarNavigation.vue -->
<template>
  <div>
    <!-- Main Navbar with Hamburger -->
    <nav class="main-navbar" :class="{ 'scrolled': isScrolled }">
      <div class="navbar-content">
        <!-- Logo -->
        <div class="logo-section">
          <div class="logo-circle">{{ initials }}</div>
          <span class="brand-text">{{ fullName }}</span>
        </div>

        <!-- Hamburger Menu Button -->
        <button 
          class="hamburger-btn"
          @click="toggleSidebar"
          :class="{ 'active': sidebarOpen }"
        >
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-3"></span>
        </button>
      </div>
    </nav>

    <!-- Overlay -->
    <div 
      class="overlay" 
      :class="{ 'active': sidebarOpen }"
      @click="closeSidebar"
    ></div>

    <!-- Sidebar -->
    <div class="sidebar" :class="{ 'open': sidebarOpen }">
      <!-- Sidebar Header -->
      <div class="sidebar-header">
        <div class="sidebar-profile">
          <div class="profile-avatar">{{ initials }}</div>
          <div class="profile-info">
            <h3>{{ fullName }}</h3>
            <p>{{ jobTitle }}</p>
          </div>
        </div>
        
        <button class="close-btn" @click="closeSidebar">
          <span>&times;</span>
        </button>
      </div>

      <!-- Navigation Links -->
      <nav class="sidebar-nav">
        <ul class="nav-list">
          <li 
            v-for="(item, index) in navItems" 
            :key="item.id"
            class="nav-item"
            :style="{ animationDelay: sidebarOpen ? `${index * 0.1}s` : '0s' }"
          >
            <a 
              href="#"
              class="nav-link"
              :class="{ 'active': activeSection === item.id }"
              @click.prevent="navigateTo(item.id)"
            >
              <span class="nav-icon">{{ item.icon }}</span>
              <span class="nav-text">{{ item.label }}</span>
              <span class="nav-arrow">→</span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Sidebar Footer -->
      <div class="sidebar-footer">
        <button class="contact-btn">
          <span class="btn-icon">📧</span>
          <span>Get In Touch</span>
        </button>
        
        <div class="social-links">
          <a href="#" class="social-link">
            <span>💼</span>
          </a>
          <a href="#" class="social-link">
            <span>🐙</span>
          </a>
          <a href="#" class="social-link">
            <span>🔗</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive data
const activeSection = ref('home')
const isScrolled = ref(false)
const sidebarOpen = ref(false)

// Personal info - replace with your details
const fullName = 'John Smith'
const initials = 'JS'
const jobTitle = 'Full Stack Developer'

// Navigation items
const navItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About Me', icon: '👤' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'blog', label: 'Blog', icon: '📝' }
]

// Methods
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
  
  // Prevent body scroll when sidebar is open
  if (sidebarOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const closeSidebar = () => {
  sidebarOpen.value = false
  document.body.style.overflow = 'auto'
}

const navigateTo = (sectionId) => {
  activeSection.value = sectionId
  closeSidebar()
  
  // Smooth scroll to section
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = 'auto'
})
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  z-index: 1001;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.2);
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
  font-size: 0.9rem;
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

.nav-item {
  opacity: 0;
  transform: translateX(20px);
  animation: none;
}

.sidebar.open .nav-item {
  animation: slideInRight 0.4s ease forwards;
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
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transform: translateX(10px);
}

.nav-link.active {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border-right: 3px solid white;
}

.nav-icon {
  font-size: 1.3rem;
  margin-right: 1rem;
  width: 25px;
}

.nav-text {
  flex: 1;
  font-weight: 500;
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
</style>