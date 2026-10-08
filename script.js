const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

for (const toggle of document.querySelectorAll(".nav-toggle")) {
  const menuId = toggle.getAttribute("aria-controls");
  const menu = menuId ? document.getElementById(menuId) : null;

  if (!menu) {
    throw new Error("Le bouton du menu doit référencer une navigation existante.");
  }

  const setMenuOpen = (isOpen) => {
    menu.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"
    );
  };

  toggle.addEventListener("click", () => {
    setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 801px)").matches) {
      setMenuOpen(false);
    }
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener("input", () => {
    formStatus.textContent = "";
    formStatus.hidden = true;
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent =
      "Les champs sont valides, mais aucun message n’a été envoyé. Ce formulaire de démonstration n’est pas connecté à un service d’envoi.";
    formStatus.hidden = false;
  });
}