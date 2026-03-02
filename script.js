import { homePage } from "./pages/home.js";
import { workPage } from "./pages/work.js";
import { aboutPage } from "./pages/about.js";
import { contactPage } from "./pages/contact.js";

const routes = {
  "/": homePage,
  "/work": workPage,
  "/about": aboutPage,
  "/contact": contactPage,
};

const app = document.getElementById("app");

function setupAccordion() {
  const headers = document.querySelectorAll(".accordion__header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isActive = item.classList.contains("active");

      document.querySelectorAll(".accordion__item").forEach((i) => {
        i.classList.remove("active");
      });

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

function setupProjects() {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const logo = card.querySelector(".project-card__logo");
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationId = null;
    const ease = 0.15;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      targetX = e.clientX - rect.left - logo.width / 2;
      targetY = e.clientY - rect.top - logo.height / 2;
    });

    const animate = () => {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      logo.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.4)`;
      animationId = requestAnimationFrame(animate);
    };

    card.addEventListener("mouseenter", () => {
      if (!animationId) {
        animationId = requestAnimationFrame(animate);
      }
    });

    card.addEventListener("mouseleave", () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
        logo.style.transform = `translate(0, 0) scale(1.4)`;
      }
    });

    card.addEventListener("click", () => {
      const url = card.dataset.projectUrl;
      if (url) {
        window.open(url, "_blank");
      }
    });
  });
}

function router() {
  const hash = window.location.hash.slice(1) || "/";
  const page = routes[hash] || homePage;
  app.innerHTML = page();
  setupAccordion();
  setupProjects();
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
