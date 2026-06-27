
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
});


/*  ScrollReveal animations  */
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header_container h1", scrollRevealOption);
ScrollReveal().reveal(".header_container h4", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header_container .btn", { ...scrollRevealOption, delay: 1000 });

ScrollReveal().reveal(".about_container .section_header", scrollRevealOption);
ScrollReveal().reveal(".about_container .section_subheader", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about_container .about_flex", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".about_container .btn", { ...scrollRevealOption, delay: 1500 });

ScrollReveal().reveal(".discover_card", { ...scrollRevealOption, interval: 500, delay: 200 });
ScrollReveal().reveal(".blogs_card", { duration: 1000, interval: 400 });
ScrollReveal().reveal(".journals_card", { ...scrollRevealOption, interval: 400 });
