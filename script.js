
const PROFILE = {
  github: "nivetha2401",
  linkedin: "https://www.linkedin.com/in/nivetha-s-2a379a442"
};

// GitHub links
const githubUrl = "https://github.com/" + PROFILE.github;

document.querySelectorAll('[data-link="github"]').forEach(el => {
  el.href = githubUrl;
  el.hidden = false;
  el.target = "_blank";
  el.rel = "noopener noreferrer";
});

document.querySelectorAll('[data-text="github"]').forEach(el => {
  el.textContent = "github.com/" + PROFILE.github;
});

// LinkedIn links
document.querySelectorAll('[data-link="linkedin"]').forEach(el => {
  el.href = PROFILE.linkedin;
  el.target = "_blank";
  el.rel = "noopener noreferrer";
});

document.querySelectorAll('[data-text="linkedin"]').forEach(el => {
  el.textContent = PROFILE.linkedin.replace(/^https?:\/\/(www\.)?/, "");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll progress
const bar = document.getElementById("progress");

window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const scrollableHeight = h.scrollHeight - h.clientHeight;

  const pct = scrollableHeight > 0
    ? (h.scrollTop / scrollableHeight) * 100
    : 0;

  bar.style.width = pct + "%";
}, { passive: true });

// Active navigation section
const links = document.querySelectorAll("#nav .links a");

const sections = [...links].map(link =>
  document.querySelector(link.getAttribute("href"))
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === "#" + entry.target.id
        );
      });
    }
  });
}, {
  rootMargin: "-30% 0px -60% 0px"
});

sections.forEach(section => {
  if (section) observer.observe(section);
});
