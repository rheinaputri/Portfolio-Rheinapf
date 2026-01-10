// Internationalization (i18n) for English/Indonesian

const translations = {
    en: {
        // Navbar
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills", // Ditambahkan
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        
        // Hero
        "hero.greeting": "Hello, I'm",
        "hero.job": "Web Developer & Designer",
        "hero.available": "Available for work",
        "hero.description": "Creating elegant digital solutions with focus on user experience and modern design.",
        "hero.viewProjects": "View Projects",
        "hero.contactMe": "Contact Me",
        
        // About
        "about.title": "About Me",
        "about.subtitle": "A glimpse into my journey",
        "about.heading": "Crafting Digital Experiences",
        "about.text1": "With 2+ years in web development and design, I specialize in creating clean, functional, and user-friendly digital products.",
        "about.text2": "My approach combines technical expertise with creative thinking to deliver solutions that not only look great but perform exceptionally.",
        "about.experience": "Experience",
        "about.projects": "Projects",
        "about.location": "Location",
        
        // Skills
        "skills.title": "Technical Skills",
        "skills.subtitle": "Technologies I work with",
        
        // Projects
        "projects.title": "Featured Projects",
        "projects.subtitle": "Selected works",
        "projects.traveloke.title": "Traveloke",
        "projects.traveloke.desc": "Modern travel booking platform with intuitive UI/UX",
        "projects.ecommerce.title": "ShopEasy",
        "projects.ecommerce.desc": "E-commerce dashboard with analytics",
        "projects.fitness.title": "FitTrack",
        "projects.fitness.desc": "Fitness tracking mobile application",
        
        // Contact
        "contact.title": "Get In Touch",
        "contact.subtitle": "Let's work together",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.location": "Location",
        
        // Footer
        "footer.text": "Creating meaningful digital experiences",
        "footer.rights": "All rights reserved",
        
        // Language Toggle
        "lang.en": "EN",
        "lang.id": "ID"
    },
    
    id: {
        // Navbar
        "nav.home": "Beranda",
        "nav.about": "Tentang",
        "nav.skills": "Keahlian", // Ditambahkan
        "nav.projects": "Proyek",
        "nav.contact": "Kontak",
        
        // Hero
        "hero.greeting": "Halo, saya",
        "hero.job": "Web Developer & Desainer",
        "hero.available": "Tersedia untuk bekerja",
        "hero.description": "Menciptakan solusi digital yang elegan dengan fokus pada pengalaman pengguna dan desain modern.",
        "hero.viewProjects": "Lihat Proyek",
        "hero.contactMe": "Hubungi Saya",
        
        // About
        "about.title": "Tentang Saya",
        "about.subtitle": "Sekilas tentang perjalanan saya",
        "about.heading": "Membuat Pengalaman Digital",
        "about.text1": "Dengan pengalaman 2+ tahun dalam pengembangan web dan desain, saya mengkhususkan diri dalam membuat produk digital yang bersih, fungsional, dan mudah digunakan.",
        "about.text2": "Pendekatan saya menggabungkan keahlian teknis dengan pemikiran kreatif untuk memberikan solusi yang tidak hanya terlihat bagus tetapi juga berkinerja luar biasa.",
        "about.experience": "Pengalaman",
        "about.projects": "Proyek",
        "about.location": "Lokasi",
        
        // Skills
        "skills.title": "Keahlian Teknis",
        "skills.subtitle": "Teknologi yang saya kuasai",
        
        // Projects
        "projects.title": "Proyek Unggulan",
        "projects.subtitle": "Pilihan karya terbaik",
        "projects.traveloke.title": "Traveloke",
        "projects.traveloke.desc": "Platform pemesanan travel modern dengan UI/UX intuitif",
        "projects.ecommerce.title": "ShopEasy",
        "projects.ecommerce.desc": "Dashboard e-commerce dengan analitik lengkap",
        "projects.fitness.title": "FitTrack",
        "projects.fitness.desc": "Aplikasi mobile pelacak kebugaran dan nutrisi",
        
        // Contact
        "contact.title": "Hubungi Saya",
        "contact.subtitle": "Mari bekerja sama",
        "contact.email": "Email",
        "contact.phone": "Telepon",
        "contact.location": "Lokasi",
        
        // Footer
        "footer.text": "Menciptakan pengalaman digital yang bermakna",
        "footer.rights": "Hak cipta dilindungi",
        
        // Language Toggle
        "lang.en": "EN",
        "lang.id": "ID"
    }
};

// Language toggle functionality
const languageToggle = document.getElementById('languageToggle');
const langText = document.querySelector('.lang-text');

// Check saved language
const savedLanguage = localStorage.getItem('language') || 'id'; // Default bahasa Indonesia
document.documentElement.setAttribute('data-language', savedLanguage);
if (savedLanguage === 'id') {
    langText.textContent = 'ID';
} else {
    langText.textContent = 'EN';
}

// Apply translation
function applyTranslation(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Initialize with saved language
applyTranslation(savedLanguage);

// Toggle language
languageToggle.addEventListener('click', function() {
    const currentLang = document.documentElement.getAttribute('data-language');
    const newLang = currentLang === 'en' ? 'id' : 'en';
    
    document.documentElement.setAttribute('data-language', newLang);
    localStorage.setItem('language', newLang);
    langText.textContent = newLang === 'en' ? 'EN' : 'ID';
    
    applyTranslation(newLang);
});