const msgDiv = document.querySelector("#msg");
const dear = document.createElement("h3");
const msgContainer = document.createElement("h2");
const wish = document.createElement("h3");

const msgs = [
  "Dearest Shivani,",
  "On this day, I propose you and invite you to live in my heart forever. My feelings for you have only grown stronger since the day we first met. I want to seal our bond forever today.",
  "Happy Propose Day!",
];

async function typeWriter(element, msg) {
  for (let i = 0; i < msg.length; i++) {
    element.innerHTML += msg.charAt(i);
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}

async function app() {
  msgDiv.appendChild(dear);
  msgDiv.appendChild(msgContainer);
  msgDiv.appendChild(wish);
  await typeWriter(dear, msgs[0]);
  await typeWriter(msgContainer, msgs[1]);
  await typeWriter(wish, msgs[2]);

  setInterval(() => {
    const wishContainer = document.querySelectorAll("h3")[1];
    wishContainer.style.opacity = wishContainer.style.opacity == 0 ? 1 : 0;
  }, 300);
}

app();
