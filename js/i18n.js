// Internationalization (i18n) for English / Indonesian
const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.job": "Web Developer & Designer",
    "hero.available": "Available for work",
    "hero.description":
      "Creating elegant digital solutions with focus on user experience and modern design.",
    "hero.viewProjects": "View Projects",
    "hero.contactMe": "Contact Me",

    // About
    "about.quote":
      "I enjoy exploring new things. Even if I have never tried them before, I believe that the courage to learn is how I grow and achieve my goals.",

    // Skills
    "skills.title": "Technical Skills",
    "skills.subtitle": "Technologies I work with",

    // Projects
    "projects.title": "Featured Projects",
    "projects.subtitle": "Selected works",

    "projects.traveloke.title": "Traveloke",
    "projects.traveloke.desc":
      "A simple travel tour website that helps users discover and book travel packages easily.",

    "projects.ecommerce.title": "UI UX Mobile Apps SmartFarm",
    "projects.ecommerce.desc":
      "Mobile app interface designed to assist and optimize farming activities digitally and efficiently.",

    "projects.tracer.title": "Tracer Study Polinema",
    "projects.tracer.desc":
      "A system to track and evaluate Politeknik Negeri Malang alumni regarding the workforce and education relevance.",

      "projects.port.title": "Website Portfolio",
      "projects.port.desc": "My Personal Portfolio Website with interactive and modern look",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Let's work together",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",

    // Footer
    "footer.text": "Creating meaningful digital experiences",
    "footer.rights": "All rights reserved",

    // Language
    "lang.en": "EN",
    "lang.id": "ID",
  },

  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.skills": "Keahlian",
    "nav.projects": "Proyek",
    "nav.contact": "Kontak",

    // Hero
    "hero.greeting": "Halo, saya",
    "hero.job": "Web Developer & Desainer",
    "hero.available": "Tersedia untuk bekerja",
    "hero.description":
      "Menciptakan solusi digital yang elegan dengan fokus pada pengalaman pengguna dan desain modern.",
    "hero.viewProjects": "Lihat Proyek",
    "hero.contactMe": "Hubungi Saya",

    // About
    "about.quote":
      "Saya senang mengeksplorasi hal baru. Meski belum pernah mencobanya, saya percaya keberanian untuk belajar adalah cara saya bertumbuh dan mencapai tujuan.",

    // Skills
    "skills.title": "Keahlian Teknis",
    "skills.subtitle": "Teknologi yang saya gunakan",

    // Projects
    "projects.title": "Proyek Unggulan",
    "projects.subtitle": "Pilihan karya terbaik",

    "projects.traveloke.title": "Traveloke",
    "projects.traveloke.desc":
      "Website travel tour sederhana yang membantu pengguna menemukan dan memesan paket wisata dengan mudah.",

    "projects.ecommerce.title": "UI UX Mobile Apps SmartFarm",
    "projects.ecommerce.desc":
      "Antarmuka aplikasi mobile yang dirancang untuk membantu dan mengoptimalkan aktivitas pertanian secara digital danefisien.",

    "projects.tracer.title": "Tracer Study Polinema",
    "projects.tracer.desc":
      "Sistem untuk melacak dan mengevaluasi alumnni Politeknik Negeri Malang terkait dunia kerja dan relevansi pendidikan.",

      "projects.port.title": "Website Portfolio",
      "projects.port.desc": "Website Portfolio Personalku dengan tampilan interaktif dan modern",

    // Contact
    "contact.title": "Hubungi Saya",
    "contact.subtitle": "Mari bekerja sama",
    "contact.email": "Email",
    "contact.phone": "Telepon",
    "contact.location": "Lokasi",

    // Footer
    "footer.text": "Menciptakan pengalaman digital yang bermakna",
    "footer.rights": "Hak cipta dilindungi",

    // Language
    "lang.en": "EN",
    "lang.id": "ID",
  },
};

// ===============================
// Language handling
// ===============================
const languageToggle = document.getElementById("languageToggle");
const langText = document.querySelector(".lang-text");

const savedLanguage = localStorage.getItem("language") || "id";
document.documentElement.setAttribute("data-language", savedLanguage);
langText.textContent = savedLanguage.toUpperCase();

function applyTranslation(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });
}

applyTranslation(savedLanguage);

languageToggle.addEventListener("click", () => {
  const currentLang = document.documentElement.getAttribute("data-language");
  const newLang = currentLang === "en" ? "id" : "en";

  document.documentElement.setAttribute("data-language", newLang);
  localStorage.setItem("language", newLang);
  langText.textContent = newLang.toUpperCase();

  applyTranslation(newLang);
});
