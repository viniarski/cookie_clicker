document.addEventListener("DOMContentLoaded", function () {
    setInterval(updateCounter, 1000);

    // Counter increment on clicking cookieButton
    const cookieButton = document.getElementById("cookieButton");
    cookieButton.addEventListener("click", incrementCounter);
});

let counter = 0;

function updateCounter() {
    counter++;
    const cookieCountElement = document.getElementById("cookieCount");
    cookieCountElement.textContent = `${counter} Cookies`;
}

function incrementCounter() {
    counter++;
    updateCounter();
}
