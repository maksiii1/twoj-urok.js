function startTimer() {
  var endTime = new Date(new Date().getTime() + 20000 * 1000);

  var timerElements = document.querySelectorAll(".timer");

  function updateTimer() {
    var now = new Date();
    var remainingTime = endTime - now;

    if (remainingTime <= 0) {
      clearInterval(interval);
      timerElements.forEach(function (timerElement) {
        timerElement.innerHTML = "00 : 00 : 00";
      });
      return;
    }

    var hours = Math.floor(remainingTime / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    timerElements.forEach(function (timerElement) {
      timerElement.innerHTML =
        (hours < 10 ? "0" + hours : hours) +
        " : " +
        (minutes < 10 ? "0" + minutes : minutes) +
        " : " +
        (seconds < 10 ? "0" + seconds : seconds);
    });
  }

  updateTimer();
  var interval = setInterval(updateTimer, 1000);
}

window.onload = startTimer;
