let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function () {
  createContainer(16);

  document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
      click = !click;
    }
  });

  let resizeGridButton = document.querySelector("#resizeGrid");
  resizeGridButton.addEventListener("click", () => {
    let size = getSize();
    createContainer(size);
  });
});

function createContainer(size) {
  let container = document.querySelector(".container");
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    let opacity = 0;
    div.addEventListener("mouseover", () => {
      if (click) {
        if (color === "random") {
          div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
          div.style.backgroundColor = "black";
        }
      }
      opacity += 0.3;
      div.style.opacity = opacity.toString();
    });
    container.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let inputSize = prompt("Enter grid size (max 100): ");
  inputSize = parseInt(inputSize);
  if (Number.isInteger(inputSize) && inputSize > 0 && inputSize < 100) {
    alert("You can play!");
    return inputSize;
  } else {
    alert("Please enter a number between 0 and 100");
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function reset() {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}
