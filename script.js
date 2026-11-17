document.addEventListener("DOMContentLoaded", () => {
    console.log("Dragon Relics: World Tournament carregado!");

    const logo = document.querySelector(".logo");

    if (logo) {
        logo.addEventListener("error", () => {
            console.warn("A logo ainda não foi adicionada.");
        });
    }
});
