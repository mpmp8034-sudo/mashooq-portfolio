// Wait for page to load
document.addEventListener("DOMContentLoaded", function () {

  // Smooth Scrolling
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Sticky Navbar
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
      header.style.background = "#08101d";
      header.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";
    } else {
      header.style.background = "rgba(10,15,31,.9)";
      header.style.boxShadow = "none";
    }

  });

  // Contact Form
  const form = document.querySelector("form");

  if (form) {

    form.addEventListener("submit", function (e) {

      e.preventDefault();

      alert("✅ Thank you! Your message has been sent.");

      form.reset();

    });

  }

});
