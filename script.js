// Optional: Typing effect
const title = document.querySelector(".hero h1");
const text = title.innerText;
title.innerText = "";
let index = 0;

function type() {
  if (index < text.length) {
    title.innerText += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
type();
