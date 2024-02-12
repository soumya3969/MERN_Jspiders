// let btns = document.getElementById("btn_sec");
// let cards = document.getElementsByClassName("col-1");
// let currentIndex = 0;
// let interval;

// btns.addEventListener("click", (event) => {
//     let clicked = event.target.id;

//     if (clicked === "play") {
//         interval = setInterval(() => {
//             cards[currentIndex].style.background = randomColor()
//             currentIndex = (currentIndex + 1) % cards.length;

//         }, 1000);
//     }
//     if (clicked === "stop") {
//         clearInterval(interval);
//     }
//     if (clicked === "reset") {
//         clearInterval(interval)
//         currentIndex=0;
//         Array.from(cards).forEach(card => {
//             card.style.backgroundColor = 'white';
//         });
//     }
// });

// function randomColor() {
//     let deg=Math.trunc(Math.random() * 360)
//     let color1 = `rgb(${Math.trunc(Math.random() * 255)},${Math.trunc(
//         Math.random() * 255
//     )},${Math.trunc(Math.random() * 255)})`;

//     let color2 = `rgb(${Math.trunc(Math.random() * 255)},${Math.trunc(
//         Math.random() * 255
//     )},${Math.trunc(Math.random() * 255)})`;

//     let randomColor = `linear-gradient(${deg}deg, ${color1}, ${color2})`;
//     return randomColor;
// }

