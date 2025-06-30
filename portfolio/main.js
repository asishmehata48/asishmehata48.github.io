let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});


document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); 

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId); 
    

    const headerOffset = header.offsetHeight; 
    const elementPosition = targetElement.getBoundingClientRect().top; 
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;


    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth' 
    });
  });
});
