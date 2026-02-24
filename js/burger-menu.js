// burger-menu
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

// åbn/luk mobilmenuen
hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

// luk mobilmenuen ved klik på link
const menuLinks = document.querySelectorAll(".off-screen-menu a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");
    });
});

// highlight for desktop a links
const deskLinks = document.querySelectorAll(".ul-desk li a");
deskLinks.forEach(link => {
    link.addEventListener("click", (e) => {

        e.preventDefault();

        // fjerner .active-link fra alle links
        deskLinks.forEach(l => l.classList.remove("active-link"));

        // tilføjer .active-link til det klikkede link
        link.classList.add("active-link");

        // scroll til sektionen
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});
