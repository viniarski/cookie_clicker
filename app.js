let cookies = 0;
let totalSpeed = 1;

// upgrades
const upgrades = [
  {
    button: document.getElementById("granny"),
    cost: 10,
    speed: 1,
  },
  {
    button: document.getElementById("super_oven"),
    cost: 100,
    speed: 10,
  },
  {
    button: document.getElementById("factory"),
    cost: 1000,
    speed: 100,
  },
];

// update cookie display
function updateCookiesDisplay() {
    const cookieCount = document.getElementById("cookieCount");
    cookieCount.textContent = `${cookies} Cookies`;
  }

// add cookies to counter
function incrementCookies() {
  cookies += totalSpeed;
  updateCookiesDisplay();
  localStorage.setItem("cookieCount", cookies.toString());
  localStorage.setItem("totalSpeedCount", totalSpeed.toString());
}

// MOST IMPORTANT EVENT!!! Cookie Monster eats all 🍪 🍪 🍪
function resetCookies() {
    cookies = 0;
    totalSpeed = 1;
    updateCookiesDisplay();
    localStorage.removeItem("cookieCount");
  
    const eventMessage = document.getElementById("eventMessage");
    eventMessage.textContent = "Nom nom nom";
    eventMessage.style.visibility = "visible";
    nomnom.play();
  
    setTimeout(() => {
      eventMessage.textContent = "";
      eventMessage.style.visibility = "hidden";
    }, 1000);
  }

document.addEventListener("DOMContentLoaded", function () {
  let savedCount = localStorage.getItem("cookieCount");
  let savedTotalSpeed = localStorage.getItem("totalSpeedCount");
  if (savedCount !== null && savedTotalSpeed !=null) {
    cookies = parseInt(savedCount, 10);
    totalSpeed = parseInt(savedTotalSpeed)
    updateCookiesDisplay();
  }

  setInterval(incrementCookies, 1000);

  const cookieButton = document.getElementById("cookieButton");
  cookieButton.addEventListener("click", incrementCookies);

  const resetButton = document.getElementById("monsterButton");
  resetButton.addEventListener("click", resetCookies);

  upgrades.forEach(upgrade => {
    upgrade.button.addEventListener("click", function () {
      if (cookies >= upgrade.cost) {
        cookies -= upgrade.cost;
        totalSpeed += upgrade.speed;
        updateCookiesDisplay();
        localStorage.setItem("cookieCount", cookies.toString());
      } else {
        console.log("Not enough cookies for this upgrade!");
      }
    });
  });
});

// custom cursor

document.addEventListener("DOMContentLoaded", function () {
    const customCursor = document.getElementById("customCursor");
  
    document.addEventListener("mousemove", function (e) {
      customCursor.style.left = `${e.pageX +10}px`;
      customCursor.style.top = `${e.pageY +10}px`;
    });
  
    document.addEventListener("mouseenter", function () {
      customCursor.style.display = "block";
    });
  
    document.addEventListener("mouseleave", function () {
      customCursor.style.display = "none";
    });
  });
  