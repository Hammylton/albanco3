document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Dölj formuläret
  document.querySelector(".contact-form-section").style.display = "none";

  // Skapa och visa bekräftelse
  const confirmation = document.createElement("div");
  confirmation.classList.add("confirmation-message");
  confirmation.innerHTML = `
    <p>Tack för din bokningsförfrågan!</p>
    <p>Vi hör av oss till dig inom kort.</p>
  `;
  document.body.appendChild(confirmation);
  confirmation.style.display = "block";

  // (Valfritt) Scrolla upp till toppen så meddelandet syns direkt
  window.scrollTo({ top: 0, behavior: "smooth" });
});
