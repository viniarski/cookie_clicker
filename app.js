document.addEventListener("DOMContentLoaded", function () {
  setInterval(updateCounter, 1000);

  const cookieButton = document.getElementById("cookieButton");
  cookieButton.addEventListener("click", incrementCounter);
  const resetButton = document.getElementById("monsterButton");
  resetButton.addEventListener("click", resetCounter);
});

let counter = 0;

function updateCounter() {
  counter++;
  const cookieCount = document.getElementById("cookieCount");
  cookieCount.textContent = `${counter} Cookies`;
}

function incrementCounter() {
  counter++;
  updateCounter();
}

function resetCounter() {
    counter = 0;
    const cookieCount = document.getElementById("cookieCount");
    cookieCount.textContent = `${counter} Cookies`;
  
    const eventMessage = document.getElementById("eventMessage");
    eventMessage.textContent = "Nom nom nom";
    eventMessage.style.visibility = 'visible';
  
    setTimeout(() => {
      eventMessage.textContent = "";
      eventMessage.style.visibility = 'hidden';
    }, 500);
  }
  
