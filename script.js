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

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - logo.width / 2;
      const y = e.clientY - rect.top - logo.height / 2;
      logo.style.transform = `translate(${x}px, ${y}px)`;
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
