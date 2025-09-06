
<template>
  <div id="app">
    <!-- Fixed Navigation at the top -->
    <Nav />
    
    <!-- Main content sections that stack vertically -->
    <main>
      <!-- Hero/Intro Section -->
      <section id="home">
        <Intro />
      </section>
      
      <!-- Timeline Section -->
      <section id="timeline">
        <Timeline />
      </section>
      
      <!-- Add more sections here as needed -->
      <!-- <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section> -->
    </main>
  </div>
</template>

<script setup>
import Nav from './components/navbar.vue'
import Intro from './components/intro.vue'
import Timeline from './components/timeline.vue'
// Import other components as you create them
</script>

<style>
/* Global app styles */
#app {
  min-height: 100vh;
  width: 100%;
}

/* Make navigation sticky/fixed at top */
nav {
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Main content container */
main {
  width: 100%;
}

/* Section styling for smooth scrolling */
section {
  width: 100%;
  min-height: 60vh; /* Each section takes at least full viewport height */
  scroll-margin-top: 60px; /* Offset for fixed navbar */
}

/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Remove default margins/padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
