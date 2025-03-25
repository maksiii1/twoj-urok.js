function setTodayDateForFirstComment() {
  const firstDateElement = document.querySelector(".comment__date");

  if (firstDateElement) {
    const today = new Date();

    const formattedDate = today.toLocaleDateString("pl-PL");

    firstDateElement.textContent = formattedDate;
  }
}

window.onload = setTodayDateForFirstComment;
