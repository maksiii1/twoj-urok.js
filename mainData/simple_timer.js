function startTimer() {
  // Устанавливаем конечное время (например, через 20 секунд)
  var endTime = new Date(new Date().getTime() + 20000 * 1000);

  // Ищем все элементы с классом 'timer'
  var timerElements = document.querySelectorAll(".timer");

  // Функция для обновления времени
  function updateTimer() {
    var now = new Date();
    var remainingTime = endTime - now;

    // Если время вышло, прекращаем таймер
    if (remainingTime <= 0) {
      clearInterval(interval);
      timerElements.forEach(function (timerElement) {
        timerElement.innerHTML = "00 : 00 : 00";
      });
      return;
    }

    // Вычисляем часы, минуты и секунды
    var hours = Math.floor(remainingTime / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Обновляем каждый элемент с классом .timer
    timerElements.forEach(function (timerElement) {
      timerElement.innerHTML =
        (hours < 10 ? "0" + hours : hours) +
        " : " +
        (minutes < 10 ? "0" + minutes : minutes) +
        " : " +
        (seconds < 10 ? "0" + seconds : seconds);
    });
  }

  updateTimer(); // Инициализируем сразу
  var interval = setInterval(updateTimer, 1000); // Обновляем каждую секунду
}

// Запускаем таймер при загрузке страницы
window.onload = startTimer;
