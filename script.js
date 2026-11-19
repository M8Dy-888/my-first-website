function changeMessage() {
   const colorButton = document.getElementById("color-button");

const colors = ["#0e1729", "#164e63", "#3b0764", "#14532d"];

let colorIndex = 0;

colorButton.addEventListener("click", function () {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
}); document.getElementById("welcome-message").textContent =
        "Thanks for visiting my website! 🎉";
}
