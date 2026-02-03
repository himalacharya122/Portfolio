// Portfolio Data
const portfolioData = {
    personal: {
        name: "Himal Acharya",
        title: "AI & Web/App Development Enthusiast",
        location: "Jhamsikhel, Lalitpur, Nepal",
        phone: "+977 9823603952",
        email: "acharyahimal122@gmail.com",
        github: "github.com/himalacharya122",
        website: "himalacharya7.com.np"
    },
    education: [
        {
            degree: "Bachelor of Science (Hons) in Artificial Intelligence",
            school: "The British College, Thapathali, Kathmandu",
            year: "2022–Present",
            details: "Pursuing degree in AI, web, and application development with coursework in machine learning, data structures, and web technologies"
        },
        {
            degree: "High School",
            school: "Erudite Academy, Bhaktapur, Nepal",
            year: "2020"
        }
    ],
    experience: [
        {
            position: "Web Development and Marketing Associate",
            company: "Vijay Motors Pvt. Ltd., Kathmandu, Nepal",
            period: "2023–2025",
            responsibilities: [
                "Assisted in development and maintenance of company website",
                "Managed social media accounts and created marketing content",
                "Collaborated on online and magazine advertisements",
                "Supported automation of key business processes",
                "Provided technical support for internal systems"
            ]
        },
        {
            position: "Full-Stack Developer and AI Enthusiast",
            company: "Freelancing",
            period: "2021–Present",
            responsibilities: [
                "Developed fully functional hotel booking system",
                "Created AI Budget Manager application using machine learning",
                "Built AI Medical Assistant in Nepali using NLP",
                "Actively learning and experimenting with ML model training"
            ]
        }
    ],
    skills: {
        technical: ["Full-Stack Web Development", "Application Development", "Automation", "Digital Marketing"],
        programming: ["Python", "HTML", "CSS", "JavaScript", "React", "Flask"],
        ai: ["Machine Learning", "Natural Language Processing", "Model Training", "Data Analysis"],
        soft: ["Time Management", "Problem-Solving", "Innovation", "Leadership", "Team Work"]
    },
    projects: [
        {
            name: "Hotel Booking System",
            description: "Fully functional full-stack website integrating front-end and back-end technologies for seamless user interactions and data management",
            technologies: ["Full-Stack", "Web Development"]
        },
        {
            name: "AI Budget Manager",
            description: "Machine learning application that analyzes spending patterns and provides personalized budgeting recommendations",
            technologies: ["AI/ML", "Python", "Data Analysis"]
        },
        {
            name: "AI Medical Assistant (Nepali)",
            description: "Natural language processing application offering medical advice and translating health-related queries for Nepali-speaking users",
            technologies: ["NLP", "AI", "Healthcare", "Nepali Language"]
        }
    ]
};

// DOM Elements
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
const sendBtn = document.querySelector('.send-btn');
const themeIcon = document.getElementById('theme-icon');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    addInitialMessage();
    loadTheme();
});

// Theme Management
function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', html.classList.contains('dark-mode'));
}

function loadTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || (localStorage.getItem('darkMode') === null && prefersDark);
    
    if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
    }
}

// Initial Message
function addInitialMessage() {
    const welcomeHTML = `
        <p>Hi! I'm <strong>Himal Acharya's AI Portfolio Assistant</strong>.</p>
        <p style="margin-top: 12px; color: var(--text-secondary); font-size: 13px;">I can tell you everything about:</p>
        <div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 8px;">
            <span class="skill-tag">Work Experience</span>
            <span class="skill-tag">Technical Skills</span>
            <span class="skill-tag">Projects</span>
            <span class="skill-tag">Education</span>
            <span class="skill-tag">AI & ML</span>
            <span class="skill-tag">Contact Info</span>
        </div>
        <p style="margin-top: 16px; font-size: 13px;">Feel free to ask me anything!</p>
    `;
    addMessage(welcomeHTML, false);
}

// Add Message to Chat
function addMessage(content, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'assistant'}`;
    
    if (isUser) {
        messageDiv.innerHTML = `
            <div class="message-content">${content}</div>
            <div class="message-avatar user">You</div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-avatar assistant">HA</div>
            <div class="message-content">${content}</div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show Typing Indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typing-indicator';
    typingDiv.className = 'message assistant';
    typingDiv.innerHTML = `
        <div class="message-avatar assistant">HA</div>
        <div class="message-content">
            <div class="typing-dots">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove Typing Indicator
function removeTypingIndicator() {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
}

// Process User Query
function processQuery(query) {
    const lowerQuery = query.toLowerCase();
    
    // About / Introduction
    if (lowerQuery.includes('who are you') || lowerQuery.includes('about') || lowerQuery.includes('yourself') || lowerQuery.includes('introduce')) {
        return `
            <p>Hey! I'm <strong>Himal Acharya</strong>, an AI & Full-Stack Developer based in Kathmandu, Nepal. 🇳🇵</p>
            <p style="margin-top: 12px;">I'm currently pursuing a <strong>Bachelor of Science (Hons) in Artificial Intelligence</strong> at The British College. My passion lies at the intersection of AI/ML and web development—I love building intelligent systems that solve real-world problems.</p>
            <p style="margin-top: 12px;">📍 <strong>Based in:</strong> Jhamsikhel, Lalitpur, Nepal<br>
            📧 <strong>Email:</strong> acharyahimal122@gmail.com<br>
            🌐 <strong>Website:</strong> himalacharya7.com.np<br>
            💻 <strong>GitHub:</strong> github.com/himalacharya122</p>
        `;
    }
    
    // Experience
    if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('job') || lowerQuery.includes('career')) {
        let html = '<p><strong>💼 Work Experience:</strong></p>';
        portfolioData.experience.forEach((exp, idx) => {
            html += `
                <div class="info-box" style="margin-top: ${idx === 0 ? '12px' : '12px'};">
                    <p><strong>${exp.position}</strong></p>
                    <p style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">${exp.company} • ${exp.period}</p>
                    <ul style="margin-top: 8px; padding-left: 20px;">
                        ${exp.responsibilities.slice(0, 3).map(resp => `<li style="font-size: 13px; margin-top: 4px;">${resp}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
        return html;
    }
    
    // Skills & Programming Languages
    if (lowerQuery.includes('skill') || lowerQuery.includes('programming') || lowerQuery.includes('language') || lowerQuery.includes('technology') || lowerQuery.includes('stack')) {
        return `
            <p><strong>💻 Technical Skills</strong></p>
            <div style="margin-top: 12px;">
                <p style="font-size: 13px; font-weight: 600; margin-bottom: 8px; color: var(--text-secondary);">Programming Languages:</p>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${portfolioData.skills.programming.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
            <div style="margin-top: 16px;">
                <p style="font-size: 13px; font-weight: 600; margin-bottom: 8px; color: var(--text-secondary);">AI & Machine Learning:</p>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${portfolioData.skills.ai.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
            <div style="margin-top: 16px;">
                <p style="font-size: 13px; font-weight: 600; margin-bottom: 8px; color: var(--text-secondary);">Technical Specialties:</p>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${portfolioData.skills.technical.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `;
    }
    
    // Projects
    if (lowerQuery.includes('project') || lowerQuery.includes('portfolio') || lowerQuery.includes('build') || lowerQuery.includes('created')) {
        let html = '<p><strong>🚀 My Projects</strong></p>';
        portfolioData.projects.forEach((project, idx) => {
            html += `
                <div class="info-box" style="margin-top: 12px;">
                    <p><strong>${project.name}</strong></p>
                    <p style="margin-top: 8px; font-size: 13px;">${project.description}</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px;">
                        ${project.technologies.map(tech => `<span class="skill-tag" style="font-size: 11px;">${tech}</span>`).join('')}
                    </div>
                </div>
            `;
        });
        return html;
    }
    
    // Education
    if (lowerQuery.includes('education') || lowerQuery.includes('school') || lowerQuery.includes('college') || lowerQuery.includes('university') || lowerQuery.includes('degree')) {
        let html = '<p><strong>🎓 Education</strong></p>';
        portfolioData.education.forEach((edu, idx) => {
            html += `
                <div class="info-box" style="margin-top: 12px;">
                    <p><strong>${edu.degree}</strong></p>
                    <p style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">${edu.school} • ${edu.year}</p>
                    ${edu.details ? `<p style="margin-top: 8px; font-size: 13px;">${edu.details}</p>` : ''}
                </div>
            `;
        });
        return html;
    }
    
    // Contact & Connect
    if (lowerQuery.includes('contact') || lowerQuery.includes('connect') || lowerQuery.includes('reach') || lowerQuery.includes('email') || lowerQuery.includes('phone')) {
        return `
            <p><strong>📞 Get in Touch</strong></p>
            <div class="info-box" style="margin-top: 12px;">
                <p style="font-size: 13px;">📧 <strong>Email:</strong> acharyahimal122@gmail.com</p>
                <p style="font-size: 13px; margin-top: 8px;">📱 <strong>Phone:</strong> +977 9823603952</p>
                <p style="font-size: 13px; margin-top: 8px;">🌐 <strong>Website:</strong> himalacharya7.com.np</p>
                <p style="font-size: 13px; margin-top: 8px;">💻 <strong>GitHub:</strong> github.com/himalacharya122</p>
            </div>
            <p style="margin-top: 12px; font-size: 13px;">Feel free to reach out! I'm always open to exciting opportunities and collaborations. 🤝</p>
        `;
    }
    
    // AI & Machine Learning
    if (lowerQuery.includes('ai') || lowerQuery.includes('machine learning') || lowerQuery.includes('ml') || lowerQuery.includes('neural')) {
        return `
            <p><strong>🤖 AI & Machine Learning Expertise</strong></p>
            <p style="margin-top: 12px;">I'm passionate about AI and have experience with:</p>
            <div class="info-box" style="margin-top: 12px;">
                <ul style="padding-left: 20px;">
                    <li style="font-size: 13px; margin-top: 8px;"><strong>Natural Language Processing (NLP)</strong> - Built an AI Medical Assistant in Nepali</li>
                    <li style="font-size: 13px; margin-top: 8px;"><strong>Machine Learning Models</strong> - Created AI Budget Manager with spending analysis</li>
                    <li style="font-size: 13px; margin-top: 8px;"><strong>Model Training & Data Analysis</strong> - Actively learning and experimenting</li>
                    <li style="font-size: 13px; margin-top: 8px;"><strong>Python & Libraries</strong> - TensorFlow, scikit-learn, pandas</li>
                </ul>
            </div>
            <p style="margin-top: 12px; font-size: 13px;">Currently exploring state-of-the-art AI models and their practical applications! 🚀</p>
        `;
    }
    
    // Default Response
    return `
        <p>Great question! 🤔</p>
        <p style="margin-top: 12px; font-size: 13px;">I found some information, but if you want to know more specifically about my:</p>
        <div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 8px;">
            <span class="skill-tag">Experience</span>
            <span class="skill-tag">Skills</span>
            <span class="skill-tag">Projects</span>
            <span class="skill-tag">Education</span>
            <span class="skill-tag">Contact</span>
        </div>
        <p style="margin-top: 12px; font-size: 13px;">Feel free to ask! I'm here to help. 😊</p>
    `;
}

// Send Message
function sendMessage() {
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Clear input
    chatInput.value = '';
    
    // Add user message
    addMessage(message, true);
    
    // Show typing indicator
    setTimeout(() => {
        showTypingIndicator();
        
        // Generate response
        setTimeout(() => {
            removeTypingIndicator();
            const response = processQuery(message);
            addMessage(response, false);
        }, 1000 + Math.random() * 1000); // 1-2 second delay for natural feel
    }, 300);
}

// ===== Handle Key Press =====
function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

// New Chat
function newChat() {
    chatMessages.innerHTML = '';
    chatInput.value = '';
    addInitialMessage();
    chatInput.focus();
}

// Scroll to Section (Sidebar Navigation)
function scrollToSection(section) {
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.nav-item').classList.add('active');
    
    // Trigger query based on section
    const sectionQueries = {
        'about': "Tell me about yourself",
        'experience': "What's your work experience?",
        'projects': "Show me your projects",
        'skills': "What skills do you have?"
    };
    
    chatInput.value = sectionQueries[section] || '';
    setTimeout(() => sendMessage(), 100);
}
