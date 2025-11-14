// 🌗 Theme toggle
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  if (currentTheme === "light") {
    document.body.removeAttribute("data-theme");
    themeBtn.textContent = "🌙 Dark Mode";
  } else {
    document.body.setAttribute("data-theme", "light");
    themeBtn.textContent = "☀️ Light Mode";
  }
});

// 💪 Animate skills on scroll
const progressBars = document.querySelectorAll(".progress");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const percent = entry.target.getAttribute("data-progress");
        entry.target.style.width = percent + "%";
      }
    });
  },
  { threshold: 0.5 }
);
progressBars.forEach(bar => observer.observe(bar));

// 🖼️ Lightbox
const projectCards = document.querySelectorAll(".project-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-lightbox");

projectCards.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.style.display = "none";
});

// 🎯 Animate Circular Skill Bars + Percentage Count
const circleSkills = document.querySelectorAll(".circle-skill");

const circleObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skill = entry.target;
        const circle = skill.querySelector("circle:last-child");
        const percent = parseInt(skill.getAttribute("data-percent"));
        const text = skill.querySelector(".percent");

        // Fill animation
        const offset = 314 - (314 * percent) / 100;
        circle.style.strokeDashoffset = offset;

        // Number count animation
        let current = 0;
        const step = Math.ceil(percent / 30); // speed control
        const interval = setInterval(() => {
          current += step;
          if (current >= percent) {
            current = percent;
            clearInterval(interval);
          }
          text.textContent = current + "%";
        }, 40);
      }
    });
  },
  { threshold: 0.6 }
);

circleSkills.forEach(skill => circleObserver.observe(skill));
