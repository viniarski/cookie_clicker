document.addEventListener("DOMContentLoaded", function () {
  let savedCount = localStorage.getItem("cookieCount");
  if (savedCount !== null) {
    counter = parseInt(savedCount, 10);
    updateCounterDisplay();
  }

  setInterval(updateCounter, 1000);

  const cookieButton = document.getElementById("cookieButton");
  cookieButton.addEventListener("click", incrementCounter);
  const resetButton = document.getElementById("monsterButton");
  resetButton.addEventListener("click", resetCounter);
});

let counter = 0;

function updateCounter() {
  counter++;
  updateCounterDisplay();
}

function incrementCounter() {
  counter++;
  updateCounterDisplay();
  localStorage.setItem("cookieCount", counter.toString());
}

function resetCounter() {
  counter = 0;
  updateCounterDisplay();
  localStorage.removeItem("cookieCount");

  const eventMessage = document.getElementById("eventMessage");
  eventMessage.textContent = "Nom nom nom"; // <-- MOST IMPORTANT EVENT!!! Monster eats all 🍪 🍪 🍪
  eventMessage.style.visibility = "visible";

  setTimeout(() => {
    eventMessage.textContent = "";
    eventMessage.style.visibility = "hidden";
  }, 500);
}

function updateCounterDisplay() {
  const cookieCount = document.getElementById("cookieCount");
  cookieCount.textContent = `${counter} Cookies`;
}
