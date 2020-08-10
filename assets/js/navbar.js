const navSlide = () => {
  const burger = document.getElementsByClassName('.burger');
  const nav = document.getElementsByClassName('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  //toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle('nav-active');
  });

  

  //animate links
  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index /7}s`;
    console.log(index / 5 + 0.2);
  });
}

navSlide();
