const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  //toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle('nav-active');

      //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation){
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /7}s`;
      }
    });

    //burger animation
    burger.classList.toggle('toggle');

  });
}

const imgPreview = () => {
  const modal = document.querySelector(".modal-img");
  const previews = document.querySelectorAll(".image-gallery img");
  const original = document.querySelector(".full-img");
  const imgText = document.querySelector(".caption");

  previews.forEach((preview) => {
    preview.addEventListener("click", () => {
      modal.classList.add("open");
      original.classList.add("open");
      //dynamic change text and image
      const originalSrc = preview.getAttribute("data-original");
      original.src = `assets/img/${originalSrc}`;
      const altText = preview.alt;
      imgText.textContent = altText;
    });
  });

  modal.addEventListener("click", (e) => {
    console.log(e);
    if (e.target.classList.contains("modal-img")) {
      modal.classList.remove("open");
    }
  });
}

imgPreview();
navSlide();
