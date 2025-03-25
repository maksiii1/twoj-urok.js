function setTodayDateForFirstComment() {
  const firstDateElement = document.querySelector(".comment__date");
  const secondDateElement = document.querySelector(".date");

  if (firstDateElement) {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("pl-PL");
    firstDateElement.textContent = formattedDate;
    secondDateElement.textContent = formattedDate;
  }
}

document.addEventListener("DOMContentLoaded", setTodayDateForFirstComment);
