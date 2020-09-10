<<<<<<< Updated upstream
function navbarFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
=======
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
  const modal = document.querySelector(".modal");
  const previews = document.querySelectorAll(".gallery a");
  const original = document.querySelector(".full-img");
  const imgText = document.querySelector(".caption");

  previews.forEach(preview => {
    preview.addEventListener('click', () => {
      modal.classList.add("open");
    })
  })
}

imgPreview();
navSlide();
>>>>>>> Stashed changes
