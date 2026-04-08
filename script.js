const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function setLinks() {
  const email = "gmail@example.com";
  const linkedin = "https://www.linkedin.com/in/anirudh-kanwar/";
  const github = "https://github.com/Aniishere";
  const resume = "./Anirudh_Resume.pdf";

  const emailChip = $("#emailChip");
  const emailText = $("#emailText");
  const linkedinLink = $("#linkedinLink");
  const linkedinText = $("#linkedinText");
  const githubLink = $("#githubLink");
  const resumeLink = $("#resumeLink");

  if (emailChip) emailChip.href = `mailto:${email}`;
  if (emailText) {
    emailText.href = `mailto:${email}`;
    emailText.textContent = email;
  }
  if (linkedinLink) linkedinLink.href = linkedin;
  if (linkedinText) {
    linkedinText.href = linkedin;
    linkedinText.textContent = "anirudh-kanwar";
  }
  if (githubLink) githubLink.href = github;
  if (resumeLink) resumeLink.href = resume;
}

function revealOnScroll() {
  const els = $$(".reveal");
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "40px" },
  );

  els.forEach((el) => io.observe(el));
}

function duplicateMarquee() {
  const track = document.querySelector(".marquee__track");
  if (!track) return;
  // Duplicate once so the loop is seamless.
  track.innerHTML = `${track.innerHTML}${track.innerHTML}`;
}

function handleContactForm() {
  const form = $("#contactForm");
  const note = $("#formNote");
  if (!form || !note) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !message) {
      note.textContent = "Please fill in both fields.";
      return;
    }

    const email = "gmail@example.com";
    const subject = encodeURIComponent(`Portfolio inquiry — ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    note.textContent = "Opening your email client…";
    form.reset();
  });
}

function setYear() {
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());
}

setYear();
setLinks();
duplicateMarquee();
revealOnScroll();
handleContactForm();

