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

      // Close all items
      document.querySelectorAll(".accordion__item").forEach((i) => {
        i.classList.remove("active");
      });

      // Open clicked item if it wasn't already open
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

function router() {
  const hash = window.location.hash.slice(1) || "/";
  const page = routes[hash] || homePage;
  app.innerHTML = page();
  setupAccordion();
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
