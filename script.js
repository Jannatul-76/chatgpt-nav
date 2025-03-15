document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuBtn.addEventListener("click", () => {
        mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
    });
});
