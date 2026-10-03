document.addEventListener("click", function (e) {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerText = ["❤️", "💖", "✨", "🔥"][Math.floor(Math.random() * 4)];
  heart.style.left = `${e.clientX - 12}px`;
  heart.style.top = `${e.clientY - 12}px`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1200);
});

const optionImages = document.querySelectorAll("img");
optionImages.forEach((img) => {
  img.addEventListener("click", function () {
    const parentContainer = img.closest("div");
    if (parentContainer && parentContainer.parentElement) {
      parentContainer.parentElement
        .querySelectorAll("img")
        .forEach((el) => el.classList.remove("selected-card"));
    }
    img.classList.add("selected-card");
  });
});
