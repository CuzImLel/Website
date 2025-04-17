import React, { TextareaHTMLAttributes } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { getCurrentAge } from "./utils";

const age = getCurrentAge("2006-11-17");

ReactDOM.render(
  <React.StrictMode>
    <App data={{ age }} />
  </React.StrictMode>,
  document.getElementById("root")
);

const hamburger = document.getElementById("hamburger");
const prompt: HTMLTextAreaElement = document.getElementById(
  "console"
) as HTMLTextAreaElement;

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

let currentDirectory: string = "justdaniel@127.0.0.1:~";
let running: boolean = false;

type command = {
  name: string;
  output?: string;
  execute?: () => void;
};

let ascii: string = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠚⠉⠀⠀⠉⠑⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠀⠀⠀⠀⠀⠀⠀⠀⠱⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⣠⠔⠋⠉⣩⣍⠉⠙⠢⣄⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢧⡜⢏⠓⠒⠚⠁⠈⠑⠒⠚⣹⢳⡸⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⣆⠸⡄⠀⠀⠀⠀⠀⠀⢠⠇⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡴⠚⠉⢣⡙⢦⡀⠀⠀⢀⡰⢋⡜⠉⠓⠦⣀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡴⠁⢀⣀⣀⣀⣙⣦⣉⣉⣋⣉⣴⣋⣀⣀⣀⡀⠈⢧⠀⠀⠀⠀⠀
⠀⠀⠀⠀⡸⠁⠀⢸⠀⠀⠀⠀⢀⣔⡛⠛⡲⡀⠀⠀⠀⠀⡇⠀⠈⢇⠀⠀⠀⠀
⠀⠀⠀⢠⠇⠀⠀⠸⡀⠀⠀⠀⠸⣼⠽⠯⢧⠇⠀⠀⠀⠀⡇⠀⠀⠘⡆⠀⠀⠀
⠀⠀⠀⣸⠀⠀⠀⠀⡇⠀⠀⠀⠳⢼⡦⢴⡯⠞⠀⠀⠀⢰⠀⠀⠀⠀⢧⠀⠀⠀
⠀⠀⠀⢻⠀⠀⠀⠀⡇⠀⠀⠀⢀⡤⠚⠛⢦⣀⠀⠀⠀⢸⠀⠀⠀⠀⡼⠀⠀⠀
⠀⠀⠀⠈⠳⠤⠤⣖⣓⣒⣒⣒⣓⣒⣒⣒⣒⣚⣒⣒⣒⣚⣲⠤⠤⠖⠁⠀⠀⠀
`;

const commands: command[] = [
  { name: "ls", output: "life      skills      projects" },
  {
    name: "cd ./life",
    execute: () => (currentDirectory = "justdaniel@127.0.0.1:/life"),
  },
  {
    name: "cat info.json",
    output: `{name: "daniel", age: ${age}, favouriteLang: "TypeScript"}`,
  },
  { name: "python ascii.py", output: ascii },
];

let currentCommandIndex: number = 0;

function runNextCommand(): void {
  running = true;
  prompt.textContent += `${currentDirectory}$ `;
  setTimeout(() => {
    if (currentCommandIndex < commands.length) {
      const command = commands[currentCommandIndex];
      currentCommandIndex++;

      writeTextWithDelay(command.name, 0);
    } else {
      running = false;
      prompt.innerText = "";
      currentDirectory = "justdaniel@127.0.0.1:~";
      currentCommandIndex = 0;
    }
  }, 2000);
}

function writeTextWithDelay(text: string, index: number): void {
  let delay: number = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
  if (index < text.length) {
    setTimeout(function (): void {
      prompt.textContent += text[index];
      writeTextWithDelay(text, index + 1);
    }, delay);
  } else {
    setTimeout(function (): void {
      prompt.textContent += "\n";
      prompt.scrollTop = prompt.scrollHeight;
      const currentCommand = commands[currentCommandIndex - 1];

      if (currentCommand.output)
        prompt.textContent += currentCommand.output + "\n";

      if (currentCommand.execute) {
        currentCommand.execute();
      }

      runNextCommand();
    }, delay);
  }
}

function checkVisible(elm: HTMLElement): boolean {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

setInterval((): void => {
  if (checkVisible(prompt) && !running) runNextCommand();
}, 1000);
