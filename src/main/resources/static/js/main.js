/* ─── NAV SCROLL ───────────────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ─── MOBILE MENU ──────────────────────────────────────────── */
const menuBtn = document.getElementById('menuBtn');
const navMobile = document.getElementById('navMobile');
menuBtn.addEventListener('click', () => navMobile.classList.toggle('open'));
navMobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navMobile.classList.remove('open'));
});

/* ─── ICONS ────────────────────────────────────────────────── */
const icons = {
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    folder: '📁',
};

/* ─── LOAD ABOUT ───────────────────────────────────────────── */
async function loadAbout() {
    const data = await fetchJson('/api/about');

    document.title = `${data.name} — Portfólio`;
    document.getElementById('heroName').textContent = data.name;
    document.getElementById('heroTitle').textContent = data.title;
    document.getElementById('heroBio').textContent = data.bio;
    document.getElementById('aboutBio').textContent = data.bio;

    document.getElementById('aboutDetails').innerHTML = `
        <li><span class="detail-label">Universidade</span>${data.university}</li>
        <li><span class="detail-label">Graduação</span>Engenharia da Computação (2023 – 2027)</li>
        <li><span class="detail-label">Localização</span>${data.location}</li>
        <li><span class="detail-label">Idiomas</span>Português (Nativo) · Inglês Avançado</li>
    `;

    document.getElementById('aboutInfo').innerHTML = `
        <div class="about-info-item"><span class="key">Foco</span><span class="value">Back-end & Infra</span></div>
        <div class="about-info-item"><span class="key">Stack</span><span class="value">Java · C# · Spring Boot</span></div>
        <div class="about-info-item"><span class="key">Status</span><span class="value" style="color:var(--accent)">● Disponível</span></div>
    `;

    const linkItems = [
        { label: 'GitHub', sub: data.github.replace('https://github.com/', '@'), icon: icons.github, href: data.github },
        { label: 'LinkedIn', sub: data.linkedin.replace('https://linkedin.com/in/', '/in/'), icon: icons.linkedin, href: data.linkedin },
        { label: 'E-mail', sub: data.email, icon: icons.email, href: `mailto:${data.email}` },
    ];

    document.getElementById('contactLinks').innerHTML = linkItems.map(item => `
        <a class="contact-link" href="${item.href}" target="_blank" rel="noopener">
            ${item.icon}
            <div>
                <span>${item.label}</span>
                <span class="link-label">${item.sub}</span>
            </div>
        </a>
    `).join('');
}

/* ─── LOAD EXPERIENCE ──────────────────────────────────────── */
async function loadExperience() {
    const experiences = await fetchJson('/api/experience');
    const timeline = document.getElementById('experienceTimeline');

    timeline.innerHTML = experiences.map((e, i) => `
        <div class="timeline-item" style="animation-delay:${i * 0.15}s">
            <div class="timeline-dot"></div>
            <div class="timeline-header">
                <div>
                    <p class="timeline-role">${e.role}</p>
                    <p class="timeline-company">${e.company}</p>
                </div>
                <span class="timeline-period">${e.period}</span>
            </div>
            <ul class="timeline-highlights">
                ${e.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

/* ─── LOAD PROJECTS ────────────────────────────────────────── */
async function loadProjects() {
    const projects = await fetchJson('/api/projects');
    const grid = document.getElementById('projectsGrid');

    grid.innerHTML = projects.map((p, i) => `
        <div class="project-card" style="animation-delay:${i * 0.1}s">
            <div class="project-icon">${icons.folder}</div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.description}</p>
            <div class="project-tags">
                ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <div class="project-links">
                ${p.githubUrl ? `<a class="project-link" href="${p.githubUrl}" target="_blank" rel="noopener">${icons.github} GitHub</a>` : ''}
                ${p.demoUrl ? `<a class="project-link" href="${p.demoUrl}" target="_blank" rel="noopener">${icons.externalLink} Demo</a>` : ''}
            </div>
        </div>
    `).join('');
}

/* ─── LOAD SKILLS ──────────────────────────────────────────── */
async function loadSkills() {
    const skills = await fetchJson('/api/skills');
    const grid = document.getElementById('skillsGrid');

    grid.innerHTML = skills.map((s, i) => `
        <div class="skill-card" style="animation-delay:${i * 0.1}s">
            <p class="skill-category">${s.category}</p>
            <div class="skill-items">
                ${s.items.map(item => `<span class="skill-badge">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

/* ─── FETCH HELPER ─────────────────────────────────────────── */
async function fetchJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Erro ao carregar ${url}`);
    return res.json();
}

/* ─── INTERSECTION OBSERVER (scroll reveal) ────────────────── */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });

function observeSections() {
    document.querySelectorAll('.section').forEach(s => {
        s.style.opacity = '0';
        s.style.transform = 'translateY(30px)';
        s.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(s);
    });
}

/* ─── INIT ─────────────────────────────────────────────────── */
(async () => {
    try {
        await Promise.all([loadAbout(), loadExperience(), loadProjects(), loadSkills()]);
        observeSections();
    } catch (err) {
        console.error('Erro ao carregar dados do portfólio:', err);
    }
})();
