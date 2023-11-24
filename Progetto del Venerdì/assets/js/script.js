window.onload = () => {
    movingEmme();
};

const buttoneHeader = document.getElementById("size-button-header");
const header = document.getElementById("header");
const EmmeMovimentate = document.querySelectorAll(".js-animation");

window.addEventListener("scroll", () => {
    scrollAnimation();
});

function scrollAnimation() {
    if (window.scrollY > 50) {
        buttoneHeader.classList.add("animazioneBottone");
        header.classList.add("animazioneHeader");
    } else {
        buttoneHeader.classList.remove("animazioneBottone");
        header.classList.remove("animazioneHeader");
    }
}

function movingEmme(params) {}
