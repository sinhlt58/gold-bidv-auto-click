var isClicked = false;

// Select button with multiple classes
var button = document.querySelector(".next-step.btn-block");

const targetTime = new Date();
targetTime.setHours(9, 30, 0); // Set target time to 9:30:00 AM

setInterval(function () {
  const currentTime = new Date();

  if (currentTime >= targetTime && !isClicked) {
    if (button) {
      console.log("Click button");
      button.click();
      isClicked = true;
    } else {
      console.log("Not found button");
    }
  }
}, 10);
