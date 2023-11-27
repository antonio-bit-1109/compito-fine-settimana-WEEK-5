const buttoneHeader = document.getElementById("size-button-header");
const header = document.getElementById("header");

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

// const fade = setInterval(() => {
// m.forEach((item) => {
//     if (item.getAttribute("opacity")) {
//         const fade2 = setInterval(() => {
//             let randomNumber = Math.floor(Math.random() * 2);
//             item.setAttribute("opacity", `${randomNumber}`);
//             console.log(randomNumber);
//         }, 3000);
//     }
// });
// }, 2000);

// if (m.length > 0) {
//     const blinkingM = setInterval(() => {

//     }, 1000);
// }

// m.forEach((item, index) => {
//     if (item.getAttribute("opacity")) {
//         const fade2 = setInterval(() => {
//             let randomNumber = Math.floor(Math.random() * 2);
//             item.setAttribute("opacity", `${randomNumber}`);
//             console.log(randomNumber);
//         }, 1000 * index); // Stagger the start times based on the index
//     }
// });

// const m = document.querySelectorAll("svg g");

// m.forEach((item, index) => {
//     if (item.getAttribute("opacity")) {
//         setInterval(() => {
//             let randomNumber = Math.floor(Math.random() * 2);
//             item.setAttribute("opacity", `${randomNumber}`);
//             console.log(randomNumber);
//         }, 1000); // Adjust the delay based on the index
//     }
// });

const m = document.querySelectorAll("svg g:nth-child(n + 2");

m.forEach((item, index) => {
    if (item.getAttribute("opacity")) {
        item.classList.add("transition");
        setInterval(() => {
            let randomNumber = Math.floor(Math.random() * 2);
            console.log(randomNumber);
            item.setAttribute("opacity", `${randomNumber}`);
        }, 2000);
    }
});

// setInterval(() => {
//     m.forEach((item, index) => {
//         m.classList.add("transition");
//         let singolo = item.getAttribute("opacity");
//         let randomNumber = Math.floor(Math.random() * 2);
//         item.setAttribute("opacity", `${randomNumber}`);
//     });
// }, 2000);

// m.forEach((item) => {
//     let singolo = item.getAttribute("opacity");
// });

// const m = document.querySelectorAll("svg g");

// m.forEach((item) => {
//     item.classList.add("transition"); // Add the "transition" class to each SVG element
//     item.classList.add("inline-block");
//     setInterval(() => {
//         let randomNumber = Math.floor(Math.random() * 2);
//         item.setAttribute("opacity", `${randomNumber}`);
//     }, 2000);
// });
