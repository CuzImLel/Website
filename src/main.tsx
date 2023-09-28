import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const hamburger = document.getElementById("hamburger");
const items = document.getElementById("items");
let open: boolean = false;

if (hamburger && items) {
  hamburger.addEventListener("click", () => {
    if (open) {
      items.style.display = "none";
      if (hamburger.innerText) {
        hamburger.innerText = "menu";
      }
      open = false;
    } else {
      items.style.display = "flex";
      if (hamburger.innerText) {
        hamburger.innerText = "close";
      }
      open = true;
    }
  });
}

function animateText(): void {
  var text: string = "A Webdeveloper";
  var speed: number = 500;

  var i: number = 0;
  function typeWriter(): void {
    if (i <= text.length) {
      const webdevElement = document.getElementById("webdev");
      if (webdevElement) {
        webdevElement.innerText = text.substring(0, i).trim();
      }
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}

animateText();
