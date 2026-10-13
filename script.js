
const hearts = document.querySelector(".hearts");

if (hearts) {
  hearts.addEventListener("click", () => {
    hearts.textContent = "💜 💖 💜 💖 💜";
  });
}
