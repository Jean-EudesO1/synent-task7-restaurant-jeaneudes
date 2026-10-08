const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

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