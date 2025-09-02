<template>
  <section class="timeline-section">
    <div class="container">
      <div class="header">
        <h2 class="timeline-title">Professional Timeline</h2>
        <p class="timeline-subtitle">Interactive career journey with detailed insights</p>
      </div>

      <div class="timeline-container">
        <div class="timeline-line">
          <div 
            class="timeline-progress" 
            :style="{ height: `${scrollProgress * 100}%` }"
          ></div>
        </div>

        <div
          v-for="(item, index) in timelineItems"
          :key="item.year"
          class="timeline-item"
          :class="{ 'timeline-item-left': index % 2 === 0, 'timeline-item-right': index % 2 === 1 }"
          :style="{ animationDelay: `${0.2 * (index + 1)}s` }"
        >
          <div class="timeline-content" @click="openModal(item.year)">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-title-item">{{ item.title }}</div>
            <div class="timeline-subtitle-item">{{ item.subtitle }}</div>
            <button class="more-details-btn">
              <span>More Details</span>
              <span class="arrow">→</span>
            </button>
          </div>
          <div class="timeline-dot"></div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal-overlay" :class="{ active: isModalOpen }" @click="closeModal">
        <div class="modal" @click.stop>
          <button class="modal-close" @click="closeModal">&times;</button>
          
          <div class="modal-content" v-if="activeData" :key="activeData.year">
            <div class="modal-header">
              <div class="modal-year">{{ activeData.year }}</div>
              <div class="modal-title">{{ activeData.title }}</div>
            </div>

            <div class="modal-body">
              <div v-for="section in activeData.sections" :key="section.title" class="modal-section">
                <h3>{{ section.title }}</h3>
                <ul>
                  <li v-for="(item, idx) in section.content" :key="idx">{{ item }}</li>
                </ul>
              </div>

              <div class="modal-section">
                <h3>Technologies & Skills</h3>
                <div class="tags-container">
                  <span v-for="tag in activeData.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Scroll progress for timeline animation
const scrollProgress = ref(0);

const modalData = {
  2022: {
    title: "Started IT Studies",
    year: "2022",
    sections: [
      {
        title: "Foundation Courses",
        content: [
          "Programming Fundamentals (Python, Java)",
          "Database Design & SQL",
          "Computer Networks Basics",
          "Operating Systems Concepts",
          "Data Structures & Algorithms",
        ],
      },
      {
        title: "Key Projects",
        content: [
          "First web application using HTML/CSS/JavaScript",
          "Simple database management system",
          "Basic networking lab assignments",
          "Command-line utilities in Python",
        ],
      },
      {
        title: "Skills Developed",
        content: [
          "Problem-solving methodology",
          "Logical thinking patterns",
          "Basic programming concepts",
          "Version control with Git",
        ],
      },
    ],
    tags: ["Python", "Java", "SQL", "HTML/CSS", "Git"],
  },
  2023: {
    title: "Security Focus & CTF Competitions",
    year: "2023",
    sections: [
      {
        title: "CTF Competitions Participated",
        content: [
          "PicoCTF 2023 - Ranked in top 15%",
          "TryHackMe CTF series - 50+ rooms completed",
          "DEFCON CTF Qualifiers - Team participation",
          "Local university CTF - 2nd place finish",
          "OverTheWire wargames - Multiple levels completed",
        ],
      },
      {
        title: "Security Skills Acquired",
        content: [
          "Web application penetration testing",
          "Binary exploitation and reverse engineering",
          "Cryptography and cryptanalysis",
          "Network security analysis",
          "Digital forensics fundamentals",
        ],
      },
      {
        title: "Tools Mastered",
        content: [
          "Burp Suite for web security testing",
          "Metasploit for penetration testing",
          "Wireshark for network analysis",
          "IDA Pro for reverse engineering",
          "John the Ripper for password cracking",
        ],
      },
    ],
    tags: [
      "CTF",
      "Penetration Testing",
      "Burp Suite",
      "Metasploit",
      "Cryptography",
      "Reverse Engineering",
    ],
  },
  2025: {
    title: "Web Development Specialization",
    year: "2025",
    sections: [
      {
        title: "Frontend Technologies",
        content: [
          "Vue.js 3 with Composition API",
          "React with TypeScript",
          "Modern CSS (Grid, Flexbox, Tailwind)",
          "Progressive Web Apps (PWA)",
          "State management (Vuex, Redux)",
        ],
      },
      {
        title: "Backend Development",
        content: [
          "Node.js with Express.js",
          "RESTful API design and development",
          "Database integration (MongoDB, PostgreSQL)",
          "Authentication and authorization",
          "Microservices architecture",
        ],
      },
      {
        title: "Major Projects",
        content: [
          "E-commerce platform with payment integration",
          "Real-time chat application with Socket.io",
          "Task management system with team collaboration",
          "Portfolio website with CMS integration",
        ],
      },
    ],
    tags: [
      "Vue.js",
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  2026: {
    title: "Advanced Security Specialization",
    year: "2026",
    sections: [
      {
        title: "Advanced CTF Achievements",
        content: [
          "DEFCON CTF Finals qualification",
          "Google CTF - Top 50 worldwide",
          "Created custom CTF challenges for university",
          "Mentored junior students in cybersecurity",
          "Published security research papers",
        ],
      },
      {
        title: "Professional Security Work",
        content: [
          "Penetration testing for local businesses",
          "Security auditing of web applications",
          "Vulnerability research and disclosure",
          "Security awareness training programs",
          "Incident response and digital forensics",
        ],
      },
      {
        title: "Specialized Skills",
        content: [
          "Advanced malware analysis",
          "Zero-day vulnerability research",
          "Cloud security assessment (AWS, Azure)",
          "Mobile application security testing",
          "IoT device security evaluation",
        ],
      },
    ],
    tags: [
      "Advanced CTF",
      "Penetration Testing",
      "Vulnerability Research",
      "Malware Analysis",
      "Cloud Security",
      "IoT Security",
    ],
  },
};

const timelineItems = [
  {
    year: "2022",
    title: "Started IT Studies",
    subtitle: "Beginning of technical journey with foundational programming courses",
  },
  {
    year: "2023",
    title: "Security Focus & CTF Competitions",
    subtitle:
      "Discovered passion for cybersecurity through various CTF challenges",
  },
  {
    year: "2025",
    title: "Web Development Specialization",
    subtitle: "Frontend & Backend development with modern frameworks",
  },
  {
    year: "2026",
    title: "Advanced Security Specialization",
    subtitle:
      "Penetration testing, security auditing, and advanced CTF competitions",
  },
];

const isModalOpen = ref(false);
const activeData = ref(null);

function openModal(year) {  
  // Ensure we have valid data before proceeding
  if (!modalData[year]) {
    console.error("No data found for year:", year);
    return;
  }

  // Clear previous state first
  closeModal();
  
  // Use nextTick to ensure DOM updates
  setTimeout(() => {
    activeData.value = { ...modalData[year] }; // Create new object to force reactivity
    isModalOpen.value = true;
    document.body.style.overflow = "hidden";
  }, 10);
}

function closeModal() {
  isModalOpen.value = false;
  activeData.value = null;
  document.body.style.overflow = "auto";
}

function handleEscape(e) {
  if (e.key === "Escape") closeModal();
}

function handleScroll() {
  const timelineSection = document.querySelector('.timeline-section');
  if (!timelineSection) return;
  
  const rect = timelineSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const sectionHeight = timelineSection.offsetHeight;
  
  // Calculate how much of the timeline section is visible
  let progress = 0;
  if (rect.top <= 0 && rect.bottom >= windowHeight) {
    // Section is filling the viewport
    progress = Math.abs(rect.top) / (sectionHeight - windowHeight);
  } else if (rect.top > 0) {
    // Section hasn't reached the top yet
    progress = 0;
  } else {
    // Section has passed
    progress = 1;
  }
  
  scrollProgress.value = Math.min(Math.max(progress, 0), 1);
}

onMounted(() => {
  document.addEventListener("keydown", handleEscape);
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial calculation
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscape);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.timeline-section {
  padding: var(--space-5xl) 0;
  background: var(--color-surface);
  min-height: 100vh;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.header {
  text-align: center;
  margin-bottom: var(--space-5xl);
}

.timeline-title {
  font-size: var(--text-4xl);
  font-weight: var(--font-black);
  color: var(--color-text);
  margin-bottom: var(--space-md);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.timeline-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto;
}

.timeline-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--gradient-primary);
  transform: translateX(-50%);
  border-radius: var(--radius-sm);
  z-index: 1;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(102, 126, 234, 0.6);
}

.timeline-progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #ebb60a;
  border-radius: var(--radius-sm);
  transition: height 0.1s ease-out;
}

.timeline-item {
  position: relative;
  margin-bottom: var(--space-4xl);
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  display: flex;
  align-items: center;
}

.timeline-item-left {
  justify-content: flex-end;
  padding-right: calc(50% + 30px);
}

.timeline-item-right {
  justify-content: flex-start;
  padding-left: calc(50% + 30px);
}

.timeline-content {
  background: var(--color-background);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  max-width: 350px;
  border: 1px solid var(--color-border);
}

.timeline-content:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-2xl);
  border-color: var(--color-primary);
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 20px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
}

.timeline-item-left .timeline-content::before {
  right: -20px;
  border-left-color: var(--color-background);
}

.timeline-item-right .timeline-content::before {
  left: -20px;
  border-right-color: var(--color-background);
}

.timeline-year {
  font-size: var(--text-2xl);
  font-weight: var(--font-black);
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
}

.timeline-title-item {
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.timeline-subtitle-item {
  font-size: var(--text-sm);
  color: var(--color-text-light);
  margin-bottom: var(--space-lg);
  line-height: var(--leading-relaxed);
}

.more-details-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
}

.more-details-btn:hover {
  transform: translateX(2px);
  box-shadow: var(--shadow-primary);
}

.arrow {
  transition: transform var(--transition-normal);
}

.more-details-btn:hover .arrow {
  transform: translateX(4px);
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: var(--color-background);
  border: 4px solid var(--color-primary);
  border-radius: var(--radius-full);
  z-index: 2;
  box-shadow: var(--shadow-md);
}

/* Modal Styles */
.modal-overlay {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  background: rgba(0, 0, 0, 0.8) !important;
  z-index: 99999 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 20px !important;
  opacity: 0 !important;
  visibility: hidden !important;
  transition: all 0.3s ease !important;
}

.modal-overlay.active {
  opacity: 1 !important;
  visibility: visible !important;
}

.modal {
  background: #ffffff !important;
  border-radius: 16px !important;
  max-width: 700px !important;
  width: 100% !important;
  max-height: 90vh !important;
  overflow-y: auto !important;
  position: relative !important;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
  z-index: 100000 !important;
  transform: scale(0.9) !important;
  transition: transform 0.3s ease !important;
  color: #2d3748 !important;
  display: block !important;
}

.modal-overlay.active .modal {
  transform: scale(1) !important;
}

.modal-close {
  position: absolute !important;
  top: 16px !important;
  right: 16px !important;
  background: #f7fafc !important;
  border: none !important;
  width: 40px !important;
  height: 40px !important;
  border-radius: 50% !important;
  font-size: 20px !important;
  font-weight: bold !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  z-index: 100001 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: #2d3748 !important;
}

.modal-close:hover {
  background: #667eea !important;
  color: white !important;
}

.modal-content {
  padding: 32px !important;
  color: #2d3748 !important;
  background: #ffffff !important;
  display: block !important;
  width: 100% !important;
  min-height: 200px !important;
}

.modal-header {
  text-align: center !important;
  margin-bottom: 32px !important;
  padding-bottom: 24px !important;
  border-bottom: 2px solid #e2e8f0 !important;
  display: block !important;
}

.modal-year {
  font-size: 30px !important;
  font-weight: 900 !important;
  color: #667eea !important;
  margin-bottom: 8px !important;
  display: block !important;
}

.modal-title {
  font-size: 20px !important;
  font-weight: bold !important;
  color: #2d3748 !important;
  display: block !important;
}

.modal-body {
  display: block !important;
}

.modal-section {
  background: #f7fafc !important;
  padding: 24px !important;
  border-radius: 8px !important;
  border: 1px solid #e2e8f0 !important;
  margin-bottom: 16px !important;
  display: block !important;
}

.modal-section h3 {
  font-size: 18px !important;
  font-weight: bold !important;
  color: #667eea !important;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.modal-section h3::before {
  content: '▶';
  color: #764ba2 !important;
}

.modal-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.modal-section li {
  padding: 8px 0;
  color: #4a5568 !important;
  position: relative;
  padding-left: 24px;
  font-size: 14px !important;
}

.modal-section li::before {
  content: '•';
  color: #667eea !important;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: linear-gradient(135deg, #667eea, #764ba2) !important;
  color: white !important;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 14px !important;
  font-weight: 500 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .timeline-line {
    left: 30px;
  }
  
  .timeline-item {
    padding-left: 60px !important;
    padding-right: 0 !important;
  }
  
  .timeline-item-left,
  .timeline-item-right {
    justify-content: flex-start;
  }
  
  .timeline-content {
    max-width: 100%;
  }
  
  .timeline-content::before {
    left: -20px !important;
    right: auto !important;
    border-left-color: transparent !important;
    border-right-color: var(--color-background) !important;
  }
  
  .timeline-dot {
    left: 30px;
  }
  
  .timeline-title {
    font-size: var(--text-3xl);
  }
  
  .modal-content {
    padding: var(--space-xl);
  }
}

@media (max-width: 480px) {
  .timeline-section {
    padding: var(--space-3xl) 0;
  }
  
  .timeline-title {
    font-size: var(--text-2xl);
  }
  
  .timeline-subtitle {
    font-size: var(--text-base);
  }
  
  .modal-content {
    padding: var(--space-lg);
  }
  
  .modal-year {
    font-size: var(--text-2xl);
  }
  
  .modal-title {
    font-size: var(--text-lg);
  }
}
</style>
