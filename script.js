const logo = document.getElementById("logo");
const banner2 = document.getElementById("banner2");

logo.addEventListener("click", () => {
    banner2.scrollIntoView({
        behavior: "smooth"
    });
});