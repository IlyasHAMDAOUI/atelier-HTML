document.addEventListener("DOMContentLoaded", () => {
    const burgerBtn = document.querySelector("#burgerBtn");
    const headerBottom = document.querySelector("#headerBottom");
    const burgerIcon = burgerBtn.querySelector("i");

    burgerBtn.addEventListener("click", () => {
        // Alterne la classe 'is-open' sur la section du menu
        headerBottom.classList.toggle("is-open");

        // Bascule l'icône entre le burger (bars) et la croix (xmark)
        if (headerBottom.classList.contains("is-open")) {
            burgerIcon.classList.remove("fa-bars");
            burgerIcon.classList.add("fa-xmark");
        } else {
            burgerIcon.classList.remove("fa-xmark");
            burgerIcon.classList.add("fa-bars");
        }
    });
});