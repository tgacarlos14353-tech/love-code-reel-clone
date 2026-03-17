const code = `const love = () => {
  let girl = "M ❤️";

  if (girl === "M ❤️") {
    return "Eu te amo";
  }
};

console.log(love());`;

let i = 0;
const speed = 30;
const codeElement = document.getElementById("code");
const finalText = document.getElementById("finalText");

function type() {
  if (i < code.length) {
    codeElement.innerHTML += code.charAt(i);
    i++;
    setTimeout(type, speed);
  } else {
    setTimeout(() => {
      finalText.style.opacity = 1;
    }, 1000);
  }
}

type();
