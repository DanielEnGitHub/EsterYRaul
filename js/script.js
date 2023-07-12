/*!
 * Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
//
// Scripts
//

// text function
const validateDate = () => {
  const fechaActual = new Date();
  const fechaObjetivo = new Date("2023-07-29 12:00:00");
  const fechaLimite = new Date("2023-21-08 00:00:00");

  let validate = false;

  // selectors
  const afterEvent1 = document.querySelector("#after-event-1");
  const afterEvent2 = document.querySelector("#after-event-2");
  const afterEvent3 = document.querySelector("#after-event-3");
  const afterEvent4 = document.querySelector("#after-event-4");
  const flipdown = document.querySelector("#flipdown");
  const afterEvent = document.querySelector("#after-event-content");
  const mainTitle = document.querySelector("#main-title");
  const btnHide = document.querySelector("#btn-hide");

  if (fechaActual >= fechaLimite) {
    btnHide.remove();
  }

  if (fechaActual >= fechaObjetivo) {
    validate = true;
    afterEvent3.remove();
    flipdown.remove();
    mainTitle.remove();
    afterEvent.classList.remove("hide");
    afterEvent.classList.remove("hide");
  }

  afterEvent1.innerHTML = !validate
    ? "Nos complace extenderte una cordial invitación a nuestra boda"
    : "";

  afterEvent2.innerHTML = !validate
    ? "para que nos acompañes en uno de los días más importante de nuestras vidas"
    : "";

  afterEvent4.innerHTML = !validate
    ? "En Hotel Conquistador Ciudad de Guatemala"
    : "El inicio de un nuevo capítulo en nuestra historia juntos.";
};

window.addEventListener("DOMContentLoaded", (event) => {
  validateDate();
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY <= 10) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  const detalle = document.getElementById("detalles");
  detalle.onclick = () => (window.location = "#detalle-evento");
});

document.addEventListener("DOMContentLoaded", () => {
  const date = new Date("2023-07-28 05:40:00");

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = date.getTime() / 1000 + 54000 * 2;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {});
});
